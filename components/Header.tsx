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
      <header className="w-full bg-[#1C2E50] sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-[56px] flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo-light.png"
              alt="문수로 라티에르 673"
              className="h-[22px] w-auto object-contain"
            />
          </Link>

          {/* PC: 가로 메뉴 */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[13px] font-bold transition-colors ${
                  pathname === item.path ? 'text-[#B89A5A]' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 우측: 전화 + 햄버거(모바일) */}
          <div className="flex items-center gap-2">
            <a
              href="tel:1811-0432"
              className="flex items-center gap-1.5 border border-white/40 text-white px-3 py-1.5 rounded-full text-[11px] font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-3 h-3" />
              1811-0432
            </a>
            <button
              className="md:hidden p-1.5 text-white/80 hover:text-white"
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
        <div className="fixed inset-0 z-40 md:hidden" style={{ top: 56 }}>
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-[240px] h-full bg-[#1C2E50] flex flex-col px-6 pt-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`py-4 border-b border-white/10 font-bold text-sm transition-colors ${
                  pathname === item.path ? 'text-[#B89A5A]' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:1811-0432"
              className="mt-6 flex items-center justify-center gap-2 bg-[#B89A5A] text-white py-3 rounded-lg font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              1811-0432
            </a>
          </div>
        </div>
      )}
    </>
  );
}
