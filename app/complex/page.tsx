import SubVisual from '../../components/SubVisual';
import { Phone } from 'lucide-react';

export default function ComplexPage() {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      <div className="w-full max-w-[768px]">
        <SubVisual title="단지안내" />
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
          <div className="text-6xl mb-6">🏗️</div>
          <h2 className="text-2xl font-black text-[#1C2E50] mb-3">준비중입니다</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            단지 안내 페이지를 열심히 준비하고 있습니다.<br />
            빠른 시일 내에 업데이트하겠습니다.
          </p>
          <a
            href="tel:1811-0432"
            className="flex items-center gap-2 bg-[#1C2E50] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#B89A5A] transition active:scale-95"
          >
            <Phone className="w-4 h-4" />
            1811-0432 전화 문의
          </a>
        </div>
      </div>
    </div>
  );
}
