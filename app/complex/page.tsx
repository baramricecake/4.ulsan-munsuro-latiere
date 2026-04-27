"use client";
import { useState } from 'react';
import SubVisual from '../../components/SubVisual';

const types = [
  { id: '84a', label: '84A 타입', img: '/img/complex/type_84a.jpg' },
  { id: '84b', label: '84B 타입', img: '/img/complex/type_84b.jpg' },
  { id: '84c', label: '84C 타입', img: '/img/complex/type_84c.jpg' },
  { id: '104', label: '104 타입', img: '/img/complex/type_104.jpg' },
];

export default function ComplexPage() {
  const [activeTab, setActiveTab] = useState(types[0].id);

  return (
    <div className="w-full flex flex-col pb-20 bg-white">
      {/* 꽉 찬 너비의 서브 비주얼 */}
      <SubVisual title="단지안내" />

      {/* 동호수 배치도 섹션 */}
      <section className="w-full py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-black text-[#1C2E50] mb-6 text-center">동·호수 배치도</h2>
          
          {/* PC 배치도 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/img/complex/layout_pc.jpg" 
            alt="동호수 배치도 PC" 
            className="w-full h-auto hidden md:block rounded-xl shadow-sm" 
          />
          {/* 모바일 배치도 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/img/complex/layout_mobile.jpg" 
            alt="동호수 배치도 모바일" 
            className="w-full h-auto block md:hidden rounded-xl shadow-sm" 
          />
        </div>
      </section>

      {/* 타입별 평면도 섹션 */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-black text-[#1C2E50] mb-8 text-center">타입별 평면도</h2>
          
          {/* 탭 버튼 */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-6 py-3 rounded-md font-bold text-sm transition-all duration-300 border ${
                  activeTab === t.id 
                    ? 'bg-[#1C2E50] text-white border-[#1C2E50] shadow-md' 
                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-100 hover:text-[#1C2E50]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* 탭 내용 (이미지) */}
          <div className="w-full max-w-[800px] mx-auto">
            {types.map((t) => (
              <div 
                key={t.id}
                className={`transition-opacity duration-500 ${activeTab === t.id ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={t.img} 
                  alt={`${t.label} 평면도`} 
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-100 bg-white" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
