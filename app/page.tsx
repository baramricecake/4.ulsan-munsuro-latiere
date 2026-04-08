"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    src: '/img/home/hero-1.jpg',
    alt: '문수로 라티에르 673',
    label: '울산 1호 트램역 초역세권',
    title: '울산의 모든 가치,\n그 이상의 선을 넘다',
  },
  {
    src: '/img/home/hero-2.jpg',
    alt: '트램',
    label: '트램1호선 공업로터리역 2029 개통예정',
    title: '새로운 이동의 시대,\n라티에르가 먼저입니다',
  },
  {
    src: '/img/home/hero-3.jpg',
    alt: '도심 전경',
    label: '울산 남구 신정동 673-1번지',
    title: '울산을 새로삶',
  },
];

const premiums = [
  { num: '01', title: '트램역 초역세권', eng: 'TRAM STATION', desc: '트램1호선 공업로터리역 2029년 개통(예정). 울산 1호 트램역세권.' },
  { num: '02', title: '명문 학세권', eng: 'EDUCATION', desc: '울산여고·서여중 등 명문학교 인접. 트램 이용 4~6분 내 접근.' },
  { num: '03', title: '청정 숲세권', eng: 'NATURE', desc: '울산대공원·태화강국가정원 인접. 도심 속 자연과 함께.' },
  { num: '04', title: '원스톱 생활인프라', eng: 'LIFESTYLE', desc: '대형마트·백화점·종합병원·먹자골목. 모든 일상이 가까이.' },
  { num: '05', title: '남구 미래비전', eng: 'FUTURE VALUE', desc: '2차전지 특화단지 조성 및 트램 교통 허브 완성.' },
  { num: '06', title: '고품격 단지특화', eng: 'PREMIUM DESIGN', desc: '아파트 1.5대 주차·프리미엄 조망설계·녹색건축 인증.' },
  { num: '07', title: '스마트 금융솔루션', eng: 'SMART FINANCE', desc: '계약금 5%, 1차 500만원. 합리적인 조건으로 내 집 마련.' },
];

const supplyInfo = [
  { label: '단지명', value: '문수로 라티에르 673' },
  { label: '대지위치', value: '울산광역시 남구 신정동 673-1번지 일원' },
  { label: '아파트', value: '199세대', sub: '84A·B·C㎡ / 104㎡' },
  { label: '오피스텔', value: '35실', sub: '110㎡' },
  { label: '계약금', value: '5%', sub: '1차 500만원' },
  { label: '시행사', value: '(주)구전개발', sub: '792-81-02085' },
  { label: '모델하우스', value: '울산 남구 신정동 1268-2' },
  { label: '문의전화', value: '1811-0432', isPhone: true },
];

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  const brandRef = useFadeUp();
  const supplyRef = useFadeUp();
  const premiumTitleRef = useFadeUp();
  const formRef = useFadeUp();
  const locationRef = useFadeUp();

  return (
    <div className="w-full flex flex-col">

      {/* ── 히어로: 풀스크린 ── */}
      <section
        className="w-full relative overflow-hidden"
        style={{ height: 'calc(100dvh - 56px)' }}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
            <div
              className="absolute inset-0 flex flex-col justify-end pb-16"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)' }}
            >
              <div className="max-w-[1200px] mx-auto px-6 w-full">
                <p className="text-white/70 text-[11px] tracking-[0.2em] font-medium mb-3">{slide.label}</p>
                <h1 className="text-white text-[28px] md:text-[36px] font-black leading-tight tracking-tight whitespace-pre-line">
                  {slide.title}
                </h1>
                <a
                  href="tel:1811-0432"
                  className="mt-6 self-start inline-flex items-center gap-2 bg-[#B89A5A] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#a38448] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  1811-0432
                </a>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40 transition backdrop-blur-sm">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40 transition backdrop-blur-sm">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-1.5 bg-[#B89A5A]' : 'w-1.5 h-1.5 bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* ── 공지 띠 ── */}
      <div className="w-full bg-[#1C2E50] text-white py-2.5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-2 text-[11px] font-bold tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89A5A] animate-pulse flex-shrink-0" />
          <span className="whitespace-nowrap">트램1호선 공업로터리역 초역세권 · 계약금 5% · 1차 500만원</span>
        </div>
      </div>

      {/* ── 브랜드 소개 ── */}
      <section className="w-full bg-white py-16">
        <div ref={brandRef} className="fade-up max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.4em] text-[#B89A5A] font-bold mb-4">MUNSURO LATIERE 673</p>
          <h2 className="text-[28px] md:text-[36px] font-black text-[#1C2E50] leading-snug tracking-tight mb-6">
            울산을 새로삶
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] leading-[2.2]">
            울산의 영원한 중심, 공업탑 로터리.<br />
            명문 교육 입지에서 울산 1호 트램의<br />
            변하지 않을 최고의 중심에서<br />
            울산의 가치를 더 크게 높입니다.
          </p>
          <div className="w-10 h-[2px] bg-[#B89A5A] mx-auto mt-10" />
        </div>
      </section>

      {/* ── 공급 현황 ── */}
      <section className="w-full bg-[#f8f7f5] py-12">
        <div ref={supplyRef} className="fade-up max-w-[1200px] mx-auto px-6">
          <p className="text-[10px] tracking-[0.4em] text-[#B89A5A] font-bold mb-2">SUPPLY INFO</p>
          <h2 className="text-[22px] font-black text-[#1C2E50] tracking-tight mb-8">공급 현황</h2>
          <div className="flex flex-col divide-y divide-gray-200">
            {supplyInfo.map((row, idx) => (
              <div key={row.label}
                className={`flex gap-4 py-4 fade-up fade-up-delay-${Math.min(idx + 1, 4)}`}
                ref={(el) => {
                  if (!el) return;
                  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('is-visible'); }, { threshold: 0.1 });
                  obs.observe(el);
                }}
              >
                <span className="text-[11px] text-gray-400 font-semibold w-24 flex-shrink-0 pt-0.5 tracking-wide">{row.label}</span>
                <div>
                  {row.isPhone ? (
                    <a href="tel:1811-0432" className="text-[15px] font-black text-[#B89A5A]">{row.value}</a>
                  ) : (
                    <p className="text-[15px] font-black text-[#1C2E50] leading-snug">{row.value}</p>
                  )}
                  {row.sub && <p className="text-[11px] text-gray-400 mt-0.5">{row.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7대 프리미엄 ── */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div ref={premiumTitleRef} className="fade-up">
            <p className="text-[10px] tracking-[0.4em] text-[#B89A5A] font-bold mb-2">PREMIUM</p>
            <h2 className="text-[22px] font-black text-[#1C2E50] tracking-tight mb-10 leading-snug">
              옥신정의 진정한 프리미엄을<br />모두 담았습니다
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-100">
            {premiums.map((p, idx) => (
              <div
                key={p.num}
                className={`premium-item py-5 flex items-start gap-5 rounded-lg px-2 -mx-2 fade-up fade-up-delay-${Math.min(idx + 1, 4)}`}
                ref={(el) => {
                  if (!el) return;
                  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('is-visible'); }, { threshold: 0.1 });
                  obs.observe(el);
                }}
              >
                <span className="text-[#B89A5A] font-black text-xs tracking-widest flex-shrink-0 w-6 pt-0.5">{p.num}</span>
                <div className="flex-1">
                  <p className="text-[9px] tracking-[0.2em] text-gray-400 font-bold mb-0.5">{p.eng}</p>
                  <h3 className="font-black text-[#1C2E50] text-[15px] mb-1">{p.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 관심고객 등록 ── */}
      <section id="form" className="w-full bg-[#1C2E50] py-14">
        <div ref={formRef} className="fade-up max-w-[1200px] mx-auto px-6">
          <p className="text-[10px] tracking-[0.4em] text-[#B89A5A] font-bold mb-2">REGISTRATION</p>
          <h2 className="text-[24px] font-black text-white tracking-tight mb-1">관심고객 등록</h2>
          <p className="text-white/50 text-[13px] mb-6">등록해 주시면 신속하고 친절하게 안내해 드립니다.</p>
          <a
            href="tel:1811-0432"
            className="w-full flex items-center justify-center gap-2 bg-[#B89A5A] text-white py-4 rounded-lg font-black text-[15px] mb-5 hover:bg-[#a38448] transition-colors active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" />
            1811-0432 전화 상담
          </a>
          <div className="bg-white rounded-xl p-5">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── 오시는 길 ── */}
      <section className="w-full bg-white">
        <div ref={locationRef} className="fade-up max-w-[1200px] mx-auto px-6 pt-12 pb-6">
          <p className="text-[10px] tracking-[0.4em] text-[#B89A5A] font-bold mb-2">LOCATION</p>
          <h2 className="text-[22px] font-black text-[#1C2E50] tracking-tight mb-8">오시는 길</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {[
              { label: '사업지', value: '울산광역시 남구 신정동 673-1번지 일원' },
              { label: '모델하우스', value: '울산 남구 신정동 1268-2' },
              { label: '문의전화', value: '1811-0432', isPhone: true },
            ].map((row) => (
              <div key={row.label} className="flex gap-4 py-4">
                <span className="text-[11px] text-gray-400 font-semibold w-24 flex-shrink-0 pt-0.5">{row.label}</span>
                {row.isPhone ? (
                  <a href="tel:1811-0432" className="text-[15px] font-black text-[#B89A5A]">{row.value}</a>
                ) : (
                  <span className="text-[14px] font-bold text-[#1C2E50] leading-snug">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/home/map.png" alt="오시는 길" className="w-full h-auto block" />
        <div className="h-24" />
      </section>

    </div>
  );
}
