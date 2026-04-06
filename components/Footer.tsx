import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center">
      {/* 푸터 본문 */}
      <div className="w-full bg-[#111820] flex justify-center">
        <div className="w-full max-w-[768px] px-5 py-10 text-gray-400 text-xs leading-relaxed space-y-3">
          <p className="text-white font-black text-sm">문수로 라티에르 673</p>
          <p className="text-gray-300 text-xs font-medium">
            사업지: 울산광역시 남구 신정동 673-1번지 일원<br />
            모델하우스: 울산 남구 신정동 1268-2<br />
            시행사: (주)구전개발 · 사업자등록번호 792-81-02085<br />
            아파트 199세대 (84A·B·C㎡ / 104㎡) · 오피스텔 35실 (110㎡)
          </p>
          <div className="space-y-1 pt-2 border-t border-white/10 text-[11px]">
            <p>※ 본 사이트에 사용된 CG 및 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.</p>
            <p>※ 트램 개통 일정(2029년 예정)은 관계기관 계획에 따라 변경될 수 있습니다.</p>
            <p>© 2026 문수로 라티에르 673. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* 하단 고정 CTA 바 (모바일) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="w-full max-w-[768px] flex pointer-events-auto shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
          <a
            href="tel:1811-0432"
            className="flex-1 bg-white text-[#1C2E50] flex items-center justify-center gap-2 font-bold text-base h-14 border-r border-gray-200 active:bg-gray-50 transition"
          >
            <Phone className="w-4 h-4" />
            전화 상담
          </a>
          <a
            href="/contact"
            className="flex-1 bg-[#B89A5A] text-white flex items-center justify-center font-bold text-base h-14 active:bg-[#a38448] transition"
          >
            관심고객 등록
          </a>
        </div>
      </div>

      {/* 하단 CTA 바 높이만큼 여백 */}
      <div className="h-14 w-full" />
    </footer>
  );
}
