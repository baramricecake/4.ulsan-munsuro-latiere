"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: '홈', path: '/' },
  { label: '사업안내', path: '/business' },
  { label: '입지환경', path: '/location' },
  { label: '단지안내', path: '/complex' },
  { label: '문의하기', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 flex justify-center sticky top-0 z-50">
        <div className="w-full max-w-[768px] px-4 h-[56px] flex items-center justify-between">

          {/* 로고 */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/site/logo-dark.png"
              alt="문수로 라티에르 673"
              className="h-[28px] w-auto object-contain"
            />
          </Link>

          {/* 우측: 전화버튼 + 햄버거 */}
          <div className="flex items-center gap-2">
            <a
              href="tel:1811-0432"
              className="flex items-center gap-1.5 bg-[#1C2E50] text-white px-3 py-1.5 rounded-full text-[11px] font-bold hover:bg-[#B89A5A] transition-colors"
            >
              <Phone className="w-3 h-3" />
              1811-0432
            </a>
            <button
              className="p-1.5 text-[#1C2E50]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 풀스크린 메뉴 */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col" style={{ top: 56 }}>
          <div className="absolute inset-0 bg-white" onClick={() => setMenuOpen(false)} />
          <nav className="relative flex flex-col w-full max-w-[768px] mx-auto px-6 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`py-4 border-b border-gray-100 font-bold text-[15px] tracking-tight transition-colors ${
                  pathname === item.path ? 'text-[#B89A5A]' : 'text-[#1C2E50]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:1811-0432"
              className="mt-6 flex items-center justify-center gap-2 bg-[#1C2E50] text-white py-4 rounded-xl font-bold text-base hover:bg-[#B89A5A] transition-colors"
            >
              <Phone className="w-4 h-4" />
              1811-0432 전화 상담
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
