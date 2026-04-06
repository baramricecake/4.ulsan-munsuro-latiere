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
      <header className="w-full bg-white shadow-sm flex justify-center sticky top-0 z-50">
        <div className="w-full max-w-[768px] px-4 h-14 flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex flex-col leading-none" onClick={() => setMenuOpen(false)}>
            <span className="text-[#1C2E50] font-black text-sm tracking-tight">문수로</span>
            <span className="text-sm font-black tracking-tight">
              <span className="text-[#B89A5A]">라티에르</span>
              <span className="text-[#1C2E50]"> 673</span>
            </span>
          </Link>

          {/* 데스크톱 nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:text-[#B89A5A] transition-colors ${pathname === item.path ? 'text-[#B89A5A]' : 'text-[#1C2E50]'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 우측: 전화 + 햄버거 */}
          <div className="flex items-center gap-2">
            <a
              href="tel:1811-0432"
              className="flex items-center gap-1.5 bg-[#1C2E50] text-white px-3 py-2 rounded-full text-xs font-bold hover:bg-[#B89A5A] transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>1811-0432</span>
            </a>
            <button
              className="md:hidden p-2 text-[#1C2E50]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 드로어 메뉴 */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
          <nav className="relative ml-auto w-64 bg-white h-full shadow-2xl flex flex-col pt-16 px-6 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`py-3 border-b border-gray-100 font-bold text-base transition-colors ${
                  pathname === item.path ? 'text-[#B89A5A]' : 'text-[#1C2E50]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:1811-0432"
              className="mt-4 flex items-center justify-center gap-2 bg-[#1C2E50] text-white py-3 rounded-full font-bold text-base hover:bg-[#B89A5A] transition"
            >
              <Phone className="w-4 h-4" />
              1811-0432
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
