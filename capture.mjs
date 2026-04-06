import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://xn--673-v76m58abycl4ekwt48h897a.com';

// 모든 요소 강제 표시 + 애니메이션 제거
const FORCE_VISIBLE_CSS = `
  *, *::before, *::after {
    animation: none !important;
    animation-duration: 0ms !important;
    animation-delay: 0ms !important;
    transition: none !important;
    transition-duration: 0ms !important;
    opacity: 1 !important;
    transform: none !important;
    visibility: visible !important;
    clip-path: none !important;
    filter: none !important;
  }
`;

async function forceVisible(page) {
  await page.evaluate(() => {
    // 모든 요소 opacity/transform/visibility 강제 초기화
    const allEls = document.querySelectorAll('*');
    allEls.forEach(el => {
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('transform', 'none', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('animation', 'none', 'important');
      el.style.setProperty('transition', 'none', 'important');
    });
  });
}

async function hideChrome(page) {
  await page.evaluate(() => {
    // fixed/sticky 요소 숨기기
    document.querySelectorAll('*').forEach(el => {
      const s = window.getComputedStyle(el);
      if (s.position === 'fixed' || s.position === 'sticky') {
        el.style.setProperty('display', 'none', 'important');
      }
    });
  });
}

// 스크롤로 lazy-load 트리거 후 맨 위로 복귀
async function triggerLazyLoad(page) {
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y <= total; y += 400) {
    await page.evaluate(sy => window.scrollTo(0, sy), y);
    await page.waitForTimeout(80);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
}

async function setupPage(browser, url) {
  const context = await browser.newContext({
    viewport: { width: 430, height: 932 },
    deviceScaleFactor: 2,
  });
  // 애니메이션 비활성화 CSS를 페이지 로드 전에 주입
  await context.addInitScript(`
    Object.defineProperty(document, 'readyState', { get: () => 'complete' });
  `);
  const page = await context.newPage();

  // 스타일시트 주입 (로드 전)
  await page.addStyleTag({ content: FORCE_VISIBLE_CSS }).catch(() => {});

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);

  // 스타일 재주입 (DOM 로드 후)
  await page.addStyleTag({ content: FORCE_VISIBLE_CSS }).catch(() => {});

  // 팝업 닫기
  try {
    const closeBtn = page.locator('button:has-text("닫기"), .btn-close, [class*="close"]');
    if (await closeBtn.count() > 0) {
      await closeBtn.first().click();
      await page.waitForTimeout(300);
    }
  } catch {}

  // lazy-load 트리거
  await triggerLazyLoad(page);

  // 강제 visible 적용
  await forceVisible(page);
  await page.waitForTimeout(500);

  // fixed/sticky 제거
  await hideChrome(page);
  await page.waitForTimeout(300);

  // 다시 강제 visible (네비 숨기기 후 일부 요소가 리셋될 수 있음)
  await forceVisible(page);

  return { context, page };
}

async function captureSections(browser, url, outDir, prefix, skipTopPx = 0) {
  fs.mkdirSync(outDir, { recursive: true });
  const { context, page } = await setupPage(browser, url);

  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`[${prefix}] totalHeight=${totalHeight}px (skip=${skipTopPx}px)`);

  const chunkH = 1200;
  let idx = 1;
  for (let y = skipTopPx; y < totalHeight; y += chunkH) {
    await page.evaluate(sy => window.scrollTo(0, sy), y);
    await page.waitForTimeout(150);
    // 각 뷰에서 다시 강제 visible 적용
    await forceVisible(page);
    const outPath = path.join(outDir, `${prefix}_${String(idx).padStart(2, '0')}.png`);
    await page.screenshot({ path: outPath });
    console.log('  saved:', outPath);
    idx++;
  }
  await context.close();
}

async function captureHero(browser, url, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  const { context, page } = await setupPage(browser, url);

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await forceVisible(page);

  const heroPath = path.join(outDir, 'home_hero.png');
  await page.screenshot({ path: heroPath, clip: { x: 0, y: 0, width: 430, height: 760 } });
  console.log('  hero saved:', heroPath);
  await context.close();
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  console.log('=== 히어로 ===');
  await captureHero(browser, BASE_URL + '/', 'public/site/home');

  console.log('\n=== 홈 섹션 (히어로 이후) ===');
  await captureSections(browser, BASE_URL + '/', 'public/site/home', 'section', 760);

  console.log('\n=== 사업안내 (서브비주얼 이후) ===');
  await captureSections(browser, BASE_URL + '/info/overview/', 'public/site/business', 'business', 370);

  console.log('\n=== 입지환경 (서브비주얼 이후) ===');
  await captureSections(browser, BASE_URL + '/info/location-environment/', 'public/site/location', 'location', 370);

  await browser.close();
  console.log('\nAll done!');
}

main().catch(console.error);
