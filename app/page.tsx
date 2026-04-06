"use client";
import ContactForm from '../components/ContactForm';
import { Phone } from 'lucide-react';

const premiums = [
  {
    num: '01',
    title: '트램역 초역세권',
    eng: 'TRAM STATION',
    desc: '트램1호선 공업로터리역 2029년 개통(예정).\n울산 1호 트램역세권으로 완전히 새로운 이동의 시대.',
  },
  {
    num: '02',
    title: '명문 학세권',
    eng: 'EDUCATION',
    desc: '울산여고, 서여중 등 명문학교 인접.\n트램 이용 시 4~6분 내 주요 학교 접근.',
  },
  {
    num: '03',
    title: '청정 숲세권',
    eng: 'NATURE',
    desc: '울산대공원·태화강국가정원 인접.\n도심 속에서 자연과 함께하는 청정 주거.',
  },
  {
    num: '04',
    title: '원스톱 생활인프라',
    eng: 'LIFESTYLE',
    desc: '대형마트·백화점·종합병원·먹자골목.\n모든 일상을 한 자리에서.',
  },
  {
    num: '05',
    title: '남구 미래비전',
    eng: 'FUTURE VALUE',
    desc: '2차전지 특화단지 조성 및 트램 교통 허브 완성.\n울산 남구의 미래 가치가 더욱 높아집니다.',
  },
  {
    num: '06',
    title: '고품격 단지특화',
    eng: 'PREMIUM DESIGN',
    desc: '아파트 1.5대 주차·프리미엄 조망설계·녹색건축 인증.\n격이 다른 단지 특화.',
  },
  {
    num: '07',
    title: '스마트 금융솔루션',
    eng: 'SMART FINANCE',
    desc: '계약금 5%, 1차 500만원으로 초기 부담 최소화.\n합리적인 조건으로 내 집 마련.',
  },
];

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* ── HERO ── */}
      <section className="w-full max-w-[768px] relative bg-[#d4cfc8]" style={{ minHeight: 520 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/site/home/home_hero.png"
          alt="문수로 라티에르 673"
          className="w-full h-auto block"
        />
        {/* 텍스트 오버레이 */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)' }}>
          <p className="text-white/70 text-xs tracking-[0.2em] mb-1.5 font-medium">
            울산 1호 트램역 초역세권
          </p>
          <h1 className="text-white text-2xl font-black leading-tight tracking-tight mb-1">
            울산의 모든 가치,<br />그 이상의 선을 넘다
          </h1>
          <p className="text-white/60 text-[11px] tracking-[0.15em] mt-1">MUNSURO LATIERE 673</p>
          <a
            href="tel:1811-0432"
            className="mt-5 self-start flex items-center gap-2 bg-[#B89A5A] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-[#a38448] transition-colors active:scale-95"
          >
            <Phone className="w-4 h-4" />
            1811-0432 상담전화
          </a>
        </div>
      </section>

      {/* ── 공지 띠 ── */}
      <div className="w-full max-w-[768px] bg-[#1C2E50] text-white py-2.5 px-4 flex items-center gap-2 text-[11px] font-bold tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B89A5A] animate-pulse flex-shrink-0" />
        <span>트램1호선 공업로터리역 초역세권 · 계약금 5% · 1차 500만원</span>
      </div>

      {/* ── 브랜드 소개 ── */}
      <section className="w-full max-w-[768px] bg-white px-6 py-12 text-center">
        <p className="text-[10px] tracking-[0.25em] text-[#B89A5A] font-bold mb-4">MUNSURO LATIERE 673</p>
        <h2 className="text-[22px] font-black text-[#1C2E50] leading-snug tracking-tight mb-4">
          울산을 새로삶
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          울산의 영원한 중심, 공업탑 로터리.<br />
          명문 교육 입지에서 울산 1호 트램의<br />
          변하지 않을 최고의 중심에서<br />
          울산의 가치를 더 크게 높입니다.
        </p>
        <div className="w-8 h-px bg-[#B89A5A] mx-auto mt-8" />
      </section>

      {/* ── 공급 현황 ── */}
      <section className="w-full max-w-[768px] bg-[#f8f7f5] px-6 py-8">
        <p className="text-[10px] tracking-[0.25em] text-[#B89A5A] font-bold mb-5">SUPPLY INFO</p>
        <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
          {[
            { label: '단지명', value: '문수로 라티에르 673' },
            { label: '아파트', value: '199세대', sub: '84A·B·C / 104㎡' },
            { label: '오피스텔', value: '35실', sub: '110㎡' },
            { label: '계약금', value: '5%', sub: '1차 500만원' },
          ].map((item) => (
            <div key={item.label} className="bg-white px-4 py-4">
              <p className="text-[10px] text-gray-400 font-medium mb-1">{item.label}</p>
              <p className="text-sm font-black text-[#1C2E50] leading-tight">{item.value}</p>
              {item.sub && <p className="text-[10px] text-gray-400 mt-0.5">{item.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── 7대 프리미엄 ── */}
      <section className="w-full max-w-[768px] bg-white px-6 py-12">
        <p className="text-[10px] tracking-[0.25em] text-[#B89A5A] font-bold mb-2">PREMIUM</p>
        <h2 className="text-[20px] font-black text-[#1C2E50] tracking-tight mb-8">
          옥신정의 진정한 프리미엄을 모두
        </h2>

        <div className="flex flex-col">
          {premiums.map((p, i) => (
            <div key={p.num} className={`py-6 ${i < premiums.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex items-start gap-4">
                <span className="text-[#B89A5A] font-black text-xs tracking-widest flex-shrink-0 pt-0.5">
                  {p.num}
                </span>
                <div>
                  <p className="text-[9px] tracking-[0.2em] text-gray-400 font-bold mb-1">{p.eng}</p>
                  <h3 className="font-black text-[#1C2E50] text-[15px] mb-1.5">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 관심고객 등록 폼 (메인 CTA) ── */}
      <section id="form" className="w-full max-w-[768px] bg-[#1C2E50] px-6 py-12">
        <p className="text-[10px] tracking-[0.25em] text-[#B89A5A] font-bold mb-2">REGISTRATION</p>
        <h2 className="text-[22px] font-black text-white tracking-tight mb-1">관심고객 등록</h2>
        <p className="text-white/50 text-xs mb-6">등록해 주시면 신속하고 친절하게 안내해 드립니다.</p>

        <a
          href="tel:1811-0432"
          className="w-full flex items-center justify-center gap-2 bg-[#B89A5A] text-white py-4 rounded-lg font-black text-base mb-5 hover:bg-[#a38448] transition-colors active:scale-[0.98]"
        >
          <Phone className="w-4 h-4" />
          1811-0432 전화 상담
        </a>

        <div className="bg-white rounded-xl p-5">
          <ContactForm />
        </div>
      </section>

      {/* ── 오시는 길 ── */}
      <section className="w-full max-w-[768px] bg-white px-6 py-10 pb-24">
        <p className="text-[10px] tracking-[0.25em] text-[#B89A5A] font-bold mb-5">LOCATION</p>
        <div className="space-y-3">
          <div className="flex gap-4 py-3 border-b border-gray-100">
            <span className="text-xs text-gray-400 font-medium w-20 flex-shrink-0">사업지</span>
            <span className="text-sm font-bold text-[#1C2E50] leading-snug">
              울산광역시 남구 신정동 673-1번지 일원
            </span>
          </div>
          <div className="flex gap-4 py-3 border-b border-gray-100">
            <span className="text-xs text-gray-400 font-medium w-20 flex-shrink-0">모델하우스</span>
            <span className="text-sm font-bold text-[#1C2E50]">울산 남구 신정동 1268-2</span>
          </div>
          <div className="flex gap-4 py-3">
            <span className="text-xs text-gray-400 font-medium w-20 flex-shrink-0">문의전화</span>
            <a href="tel:1811-0432" className="text-sm font-black text-[#B89A5A]">1811-0432</a>
          </div>
        </div>
      </section>

    </div>
  );
}
