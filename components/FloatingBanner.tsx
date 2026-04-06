"use client";
import { Phone, ClipboardList } from 'lucide-react';

export default function FloatingBanner() {
  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 flex flex-col items-center gap-1">
        {/* 전화 */}
        <a
          href="tel:1811-0432"
          className="flex flex-col items-center gap-1 group w-12 py-2"
        >
          <div className="w-9 h-9 rounded-full bg-[#B89A5A] text-white flex items-center justify-center group-hover:scale-110 shadow-md transition-all">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold text-gray-700 whitespace-nowrap">전화상담</span>
        </a>

        <div className="w-6 h-px bg-gray-200" />

        {/* 관심고객 등록 */}
        <a
          href="/contact"
          className="flex flex-col items-center gap-1 group w-12 py-2"
        >
          <div className="w-9 h-9 rounded-full bg-[#1C2E50] text-white flex items-center justify-center group-hover:scale-110 shadow-md transition-all">
            <ClipboardList className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold text-[#1C2E50] whitespace-nowrap">빠른예약</span>
        </a>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="flex flex-col items-center gap-1 animate-bounce">
        <div className="w-7 h-11 bg-[#1C2E50] rounded-2xl flex justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-white rounded-full" />
        </div>
        <span className="text-[9px] font-bold text-[#1C2E50]">Scroll</span>
      </div>
    </div>
  );
}
