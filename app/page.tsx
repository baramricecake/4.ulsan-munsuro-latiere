"use client";
import ContactForm from '../components/ContactForm';
import { Phone } from 'lucide-react';

const premiums = [
  { icon: '🚊', badge: '01', title: '트램역 초역세권', desc: '트램1호선 공업로터리역 2029년 개통(예정). 울산 최초 트램역세권으로 도시 이동의 새로운 기준.' },
  { icon: '🏫', badge: '02', title: '명문 학세권', desc: '울산여고, 서여중 등 명문 학교와 인접. 트램 이용 시 4~6분 내 주요 학교 접근 가능.' },
  { icon: '🌳', badge: '03', title: '청정 숲세권', desc: '울산대공원, 태화강국가정원 등 청정 자연환경과 인접. 도심 속 자연을 누리는 주거 환경.' },
  { icon: '🏬', badge: '04', title: '원스톱 생활인프라', desc: '대형마트, 백화점, 종합병원, 먹자골목까지 한 번에 이용 가능한 완벽한 생활 편의.' },
  { icon: '🔋', badge: '05', title: '남구 미래비전', desc: '2차전지 특화단지 조성 및 트램 교통 허브 완성으로 울산 남구의 미래 가치 상승.' },
  { icon: '🏢', badge: '06', title: '고품격 단지특화', desc: '아파트 1.5대 주차, 프리미엄 조망설계, 녹색건축 인증으로 삶의 질이 달라집니다.' },
  { icon: '💳', badge: '07', title: '스마트 금융솔루션', desc: '계약금 5%, 1차 500만원으로 초기 부담 최소화. 합리적인 조건으로 내 집 마련.' },
];

// Playwright로 캡처한 콘텐츠 이미지들
const contentImages = [
  '/site/home/home_content_02.png',
  '/site/home/home_content_03.png',
  '/site/home/home_content_04.png',
  '/site/home/home_content_05.png',
  '/site/home/home_content_06.png',
];

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      {/* ── 히어로 ── */}
      <section className="w-full max-w-[768px] relative overflow-hidden bg-[#1C2E50]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/site/home/home_hero.png"
          alt="문수로 라티에르 673"
          className="w-full h-auto object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <span className="inline-block px-3 py-1 border border-[#B89A5A]/70 rounded-full text-[#B89A5A] text-[10px] font-bold tracking-[0.2em] mb-4">
            울산 트램1호선 초역세권 · 남구 신정동
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white drop-shadow-2xl leading-tight mb-2">
            울산을 새로삶
          </h1>
          <p className="text-base md:text-xl text-white/80 font-medium drop-shadow-lg">
            그 이상의 선을 넘다
          </p>
          <p className="mt-3 text-white/50 text-sm font-semibold tracking-widest">
            문수로 라티에르 673
          </p>
          <a
            href="tel:1811-0432"
            className="mt-6 flex items-center gap-2 bg-[#B89A5A] text-white px-6 py-3 rounded-full font-black text-lg shadow-lg hover:bg-[#a38448] transition active:scale-95"
          >
            <Phone className="w-5 h-5" />
            1811-0432
          </a>
        </div>
      </section>

      {/* ── 공지 띠 ── */}
      <div className="w-full max-w-[768px] bg-[#1C2E50] text-white text-center py-3 text-xs font-bold tracking-widest">
        <span className="inline-block w-2 h-2 rounded-full bg-[#B89A5A] mr-2 animate-pulse align-middle" />
        트램1호선 공업로터리역 초역세권 · 계약금 5% 특별 조건
      </div>

      {/* ── 공급 현황 카드 ── */}
      <section className="w-full max-w-[768px] bg-white px-4 py-8">
        <p className="text-center text-[10px] font-bold tracking-[0.2em] text-[#B89A5A] mb-4">SUPPLY INFO</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: '아파트', value: '199세대', sub: '84A·B·C㎡ / 104㎡' },
            { label: '오피스텔', value: '35실', sub: '110㎡' },
            { label: '계약금', value: '5%', sub: '1차 500만원' },
            { label: '트램역', value: '2029예정', sub: '공업로터리역' },
          ].map((card) => (
            <div key={card.label} className="border border-gray-100 rounded-xl p-4 text-center shadow-sm">
              <p className="text-[10px] text-gray-400 font-bold mb-1">{card.label}</p>
              <p className="text-xl font-black text-[#1C2E50]">{card.value}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{card.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 사이트 콘텐츠 이미지 (Playwright 캡처) ── */}
      <section className="w-full max-w-[768px] bg-[#f8f9fa] flex flex-col">
        <p className="text-center text-[10px] font-bold tracking-[0.2em] text-[#B89A5A] pt-8 pb-4">HIGHLIGHTS</p>
        {contentImages.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt={`문수로 라티에르 673 ${i + 1}`} className="w-full h-auto block" />
        ))}
      </section>

      {/* ── 7대 프리미엄 ── */}
      <section className="w-full max-w-[768px] bg-white px-4 py-10">
        <p className="text-center text-[10px] font-bold tracking-[0.2em] text-[#B89A5A] mb-2">7 PREMIUMS</p>
        <h2 className="text-center text-xl md:text-2xl font-black text-[#1C2E50] mb-6">
          문수로 라티에르 673의 특별한 가치
        </h2>
        <div className="flex flex-col gap-3">
          {premiums.map((p) => (
            <div key={p.badge} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 shadow-sm bg-white">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1C2E50] flex items-center justify-center text-xl">
                {p.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-[#B89A5A] tracking-widest mb-0.5">PREMIUM {p.badge}</p>
                <p className="font-black text-[#1C2E50] text-sm mb-1">{p.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 관심고객 등록 폼 ── */}
      <section id="contact-form" className="w-full max-w-[768px] bg-[#f8f9fa] px-4 py-10">
        <p className="text-center text-[10px] font-bold tracking-[0.2em] text-[#B89A5A] mb-2">CUSTOMER REGISTRATION</p>
        <h2 className="text-center text-xl font-black text-[#1C2E50] mb-1">관심고객 등록</h2>
        <p className="text-center text-xs text-gray-500 mb-6">등록해주시면 신속하고 친절하게 안내해 드리겠습니다.</p>

        <a
          href="tel:1811-0432"
          className="w-full flex items-center justify-center gap-2 bg-[#1C2E50] text-white py-4 rounded-xl font-black text-lg mb-6 hover:bg-[#B89A5A] transition active:scale-95"
        >
          <Phone className="w-5 h-5" />
          1811-0432 분양 상담
        </a>

        <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
          <ContactForm />
        </div>
      </section>

      {/* ── 오시는 길 ── */}
      <section className="w-full max-w-[768px] bg-white px-4 py-8 border-t border-gray-100">
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#B89A5A] mb-4">LOCATION</p>
        <div className="space-y-3">
          <div className="rounded-xl bg-[#f8f9fa] p-4">
            <p className="text-[10px] font-bold text-gray-400 mb-1">사업지</p>
            <p className="text-sm font-bold text-[#1C2E50]">울산광역시 남구 신정동 673-1번지 일원</p>
          </div>
          <div className="rounded-xl bg-[#f8f9fa] p-4">
            <p className="text-[10px] font-bold text-gray-400 mb-1">모델하우스</p>
            <p className="text-sm font-bold text-[#1C2E50]">울산 남구 신정동 1268-2</p>
          </div>
        </div>
      </section>
    </div>
  );
}
