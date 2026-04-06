"use client";
import { useState, useEffect, useCallback } from 'react';
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

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="w-full flex flex-col">

      {/* ── 히어로 슬라이더 ── */}
      <section className="w-full relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
            <div
              className="absolute inset-0 flex flex-col justify-end px-5 pb-10"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }}
            >
              <p className="text-white/70 text-[10px] tracking-[0.2em] font-medium mb-1.5">{slide.label}</p>
              <h1 className="text-white text-[22px] font-black leading-tight tracking-tight whitespace-pre-line">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}

        {/* 슬라이드 버튼 */}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition backdrop-blur-sm">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition backdrop-blur-sm">
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* 도트 */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? 'w-5 h-1.5 bg-[#B89A5A]' : 'w-1.5 h-1.5 bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* ── 공지 띠 ── */}
      <div className="w-full bg-[#1C2E50] text-white py-2.5 px-4 flex items-center gap-2 text-[10px] font-bold tracking-widest overflow-hidden">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B89A5A] animate-pulse flex-shrink-0" />
        <span className="whitespace-nowrap">트램1호선 공업로터리역 초역세권 · 계약금 5% · 1차 500만원</span>
      </div>

      {/* ── 브랜드 소개 ── */}
      <section className="w-full bg-white px-6 py-12 text-center">
        <p className="text-[9px] tracking-[0.3em] text-[#B89A5A] font-bold mb-3">MUNSURO LATIERE 673</p>
        <h2 className="text-[20px] font-black text-[#1C2E50] leading-snug tracking-tight mb-4">
          울산을 새로삶
        </h2>
        <p className="text-gray-500 text-[13px] leading-[1.9]">
          울산의 영원한 중심, 공업탑 로터리.<br />
          명문 교육 입지에서 울산 1호 트램의<br />
          변하지 않을 최고의 중심에서<br />
          울산의 가치를 더 크게 높입니다.
        </p>
        <div className="w-8 h-px bg-[#B89A5A] mx-auto mt-8" />
      </section>

      {/* ── 공급 현황 ── */}
      <section className="w-full bg-[#f8f7f5] px-5 py-8">
        <p className="text-[9px] tracking-[0.3em] text-[#B89A5A] font-bold mb-4">SUPPLY INFO</p>
        <div className="grid grid-cols-2 gap-px rounded-lg overflow-hidden border border-gray-200">
          {[
            { label: '단지명', value: '문수로 라티에르 673', full: true },
            { label: '아파트', value: '199세대', sub: '84A·B·C / 104㎡' },
            { label: '오피스텔', value: '35실', sub: '110㎡' },
            { label: '계약금', value: '5%', sub: '1차 500만원' },
            { label: '대지위치', value: '울산 남구 신정동', full: true },
          ].map((item) => (
            <div key={item.label}
              className={`bg-white px-4 py-4 ${item.full ? 'col-span-2' : ''}`}>
              <p className="text-[10px] text-gray-400 font-medium mb-0.5">{item.label}</p>
              <p className="text-sm font-black text-[#1C2E50] leading-tight">{item.value}</p>
              {item.sub && <p className="text-[10px] text-gray-400 mt-0.5">{item.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── 7대 프리미엄 ── */}
      <section className="w-full bg-white px-5 py-12">
        <p className="text-[9px] tracking-[0.3em] text-[#B89A5A] font-bold mb-2">PREMIUM</p>
        <h2 className="text-[18px] font-black text-[#1C2E50] tracking-tight mb-8 leading-snug">
          옥신정의 진정한 프리미엄을<br />모두 담았습니다
        </h2>
        <div className="flex flex-col divide-y divide-gray-100">
          {premiums.map((p) => (
            <div key={p.num} className="py-5 flex items-start gap-4">
              <span className="text-[#B89A5A] font-black text-xs tracking-widest flex-shrink-0 w-6">{p.num}</span>
              <div>
                <p className="text-[9px] tracking-[0.2em] text-gray-400 font-bold mb-0.5">{p.eng}</p>
                <h3 className="font-black text-[#1C2E50] text-[14px] mb-1">{p.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 관심고객 등록 (메인 CTA) ── */}
      <section id="form" className="w-full bg-[#1C2E50] px-5 py-12">
        <p className="text-[9px] tracking-[0.3em] text-[#B89A5A] font-bold mb-2">REGISTRATION</p>
        <h2 className="text-[20px] font-black text-white tracking-tight mb-1">관심고객 등록</h2>
        <p className="text-white/50 text-xs mb-5">등록해 주시면 신속하고 친절하게 안내해 드립니다.</p>
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
      </section>

      {/* ── 오시는 길 ── */}
      <section className="w-full bg-white">
        <div className="px-5 pt-10 pb-5">
          <p className="text-[9px] tracking-[0.3em] text-[#B89A5A] font-bold mb-4">LOCATION</p>
          <div className="flex flex-col divide-y divide-gray-100">
            {[
              { label: '사업지', value: '울산광역시 남구 신정동 673-1번지 일원' },
              { label: '모델하우스', value: '울산 남구 신정동 1268-2' },
              { label: '문의전화', value: '1811-0432', isPhone: true },
            ].map((row) => (
              <div key={row.label} className="flex gap-4 py-3.5">
                <span className="text-[11px] text-gray-400 font-medium w-20 flex-shrink-0 pt-0.5">{row.label}</span>
                {row.isPhone ? (
                  <a href="tel:1811-0432" className="text-sm font-black text-[#B89A5A]">{row.value}</a>
                ) : (
                  <span className="text-[13px] font-bold text-[#1C2E50] leading-snug">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* 오시는길 지도 이미지 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/home/map.png" alt="오시는 길" className="w-full h-auto block" />
        <div className="h-20" />
      </section>

    </div>
  );
}
