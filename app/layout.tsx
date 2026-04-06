import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBanner from "../components/FloatingBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "문수로 라티에르 673 공식 분양안내 | 울산 트램역 초역세권",
  description: "울산 남구 신정동 문수로 라티에르 673 공식 분양 안내. 트램1호선 공업로터리역 초역세권, 아파트 199세대 · 오피스텔 35실, 계약금 5% 특별 혜택.",
  keywords: "문수로라티에르673, 울산 분양, 울산 신정동 아파트, 울산 트램 역세권, 라티에르673, 울산 오피스텔",
  openGraph: {
    title: "문수로 라티에르 673 공식 분양안내 | 울산 트램역 초역세권",
    description: "울산 남구 신정동 문수로 라티에르 673 공식 분양 안내. 트램1호선 공업로터리역 초역세권, 계약금 5% 특별 혜택.",
    type: "website",
    locale: "ko_KR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white font-[family-name:var(--font-geist-sans)] flex flex-col w-full`}
        suppressHydrationWarning
      >
        <Header />
        <FloatingBanner />
        <div className="w-full flex-grow flex flex-col items-center bg-[#f0f0f0]">
          <div className="w-full max-w-2xl mx-auto bg-white">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
