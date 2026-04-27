"use client";
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PopupBanners() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user opted out of seeing the banner today
    const hideBanner = localStorage.getItem('hideLatiereBanner');
    if (hideBanner) {
      const hideUntil = parseInt(hideBanner, 10);
      if (new Date().getTime() < hideUntil) {
        return; // Still hidden
      } else {
        localStorage.removeItem('hideLatiereBanner'); // Expired
      }
    }
    setShow(true);
  }, []);

  const closeBanner = () => {
    setShow(false);
  };

  const closeForToday = () => {
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0); // Next midnight
    localStorage.setItem('hideLatiereBanner', tomorrow.getTime().toString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 md:p-8 backdrop-blur-sm">
      <div className="relative flex flex-col max-h-full max-w-[1200px] mx-auto w-full">
        {/* Banners Container */}
        <div className="flex flex-col md:flex-row gap-4 overflow-y-auto overflow-x-hidden md:overflow-visible items-center md:items-start justify-center flex-1">
          {/* PC shows all 3, Mobile shows only the 3rd one */}
          <div className="hidden md:block w-full max-w-[360px] flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/home/banners/banner1.jpg" alt="초기 배너 1" className="w-full h-auto rounded-xl shadow-lg" />
          </div>
          <div className="hidden md:block w-full max-w-[360px] flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/home/banners/banner2.jpg" alt="초기 배너 2" className="w-full h-auto rounded-xl shadow-lg" />
          </div>
          <div className="w-full max-w-[360px] md:max-w-[360px] flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/home/banners/banner3.jpg" alt="초기 배너 3" className="w-full h-auto rounded-xl shadow-lg" />
          </div>
        </div>

        {/* Controls Container */}
        <div className="flex justify-center w-full mt-4 px-0">
          <div className="flex w-full md:w-auto md:min-w-[500px] bg-[#1C2E50] text-white py-3.5 px-6 rounded-lg justify-between items-center shadow-2xl border border-white/10">
            <label className="flex items-center gap-2.5 cursor-pointer text-[15px] font-medium">
              <input type="checkbox" onChange={closeForToday} className="w-4 h-4 accent-[#B89A5A]" />
              오늘 하루 보지 않기
            </label>
            <button onClick={closeBanner} className="flex items-center gap-1.5 hover:text-[#B89A5A] transition font-bold text-[15px]">
              닫기 <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
