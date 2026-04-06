import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://xn--673-v76m58abycl4ekwt48h897a.com';

// 숨길 CSS 셀렉터 목록 (nav, header, footer, 팝업 등)
const HIDE_SELECTORS = [
  'header', 'nav', 'footer', '.header', '.nav', '.footer',
  '.gnb', '.lnb', '.popup', '.modal', '.floating',
  '[class*="header"]', '[class*="nav"]', '[class*="footer"]',
  '[class*="popup"]', '[class*="modal"]', '[class*="floating"]',
  '[class*="fixed"]', '[class*="sticky"]',
  '#header', '#nav', '#footer', '#popup',
];

async function hideUIElements(page) {
  await page.evaluate((selectors) => {
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.style.display = 'none';
      });
    });
  }, HIDE_SELECTORS);
}

async function captureSections(browser, url, outDir, prefix) {
  fs.mkdirSync(outDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 800, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 40000 });
  await page.waitForTimeout(2000);

  // UI 요소 숨기기
  await hideUIElements(page);
  await page.waitForTimeout(500);

  // 전체 높이
  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`[${prefix}] totalHeight=${totalHeight}px`);

  // 섹션별 캡처 (1200px 단위)
  const chunkH = 1200;
  let idx = 1;
  for (let y = 0; y < totalHeight; y += chunkH) {
    await page.evaluate((sy) => window.scrollTo(0, sy), y);
    await page.waitForTimeout(300);
    const outPath = path.join(outDir, `${prefix}_${String(idx).padStart(2, '0')}.png`);
    await page.screenshot({ path: outPath });
    console.log('  saved:', outPath);
    idx++;
  }
  await context.close();
}

async function captureHero(browser, url, outDir, prefix) {
  fs.mkdirSync(outDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 40000 });
  await page.waitForTimeout(3000);

  // 팝업만 닫기, 헤더는 유지 (히어로 배경 포함)
  try {
    const closeBtn = page.locator('button:has-text("닫기"), .btn-close, .close');
    if (await closeBtn.count() > 0) await closeBtn.first().click();
  } catch {}

  // nav/footer만 숨기고 히어로 영역 캡처
  await page.evaluate(() => {
    ['header', 'nav', 'footer', '#header', '#nav', '#footer'].forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.style.display = 'none');
    });
  });
  await page.waitForTimeout(300);

  // 뷰포트 상단 (히어로) 스크린샷
  const heroPath = path.join(outDir, `${prefix}_hero.png`);
  await page.screenshot({ path: heroPath, clip: { x: 0, y: 0, width: 1280, height: 700 } });
  console.log('  hero saved:', heroPath);

  await context.close();
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  // 히어로 이미지 (데스크톱)
  await captureHero(browser, BASE_URL + '/', 'public/site/home', 'home');

  // 홈 콘텐츠 섹션 (모바일 너비 800px)
  await captureSections(browser, BASE_URL + '/', 'public/site/home', 'home_content');

  // 사업안내
  await captureSections(browser, BASE_URL + '/info/overview/', 'public/site/business', 'business');

  // 입지환경
  await captureSections(browser, BASE_URL + '/info/location-environment/', 'public/site/location', 'location');

  await browser.close();
  console.log('\nAll done!');
}

main().catch(console.error);
