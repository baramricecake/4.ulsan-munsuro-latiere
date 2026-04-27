"use client";
import { useState, useEffect } from 'react';
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`w-full sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#1C2E50]/90 backdrop-blur-md' : 'bg-[#1C2E50]'}`}>
        <div className="max-w-[1200px] mx-auto px-6 h-[56px] flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo-light.png"
              alt="문수로 라티에르 673"
              className="h-[28px] md:h-[32px] w-auto object-contain transition-all"
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
              href="/#form"
              className="flex items-center gap-1.5 bg-[#B89A5A] text-white px-4 py-1.5 rounded-sm text-[12px] font-bold hover:bg-[#a38448] transition-colors"
            >
              관심고객등록
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
              href="/#form"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 bg-[#B89A5A] text-white py-3 rounded-sm font-bold text-sm"
            >
              관심고객등록
            </a>
          </div>
        </div>
      )}
    </>
  );
}
