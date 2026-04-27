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
  title: "문수로 라티에르 673",
  description: "문수로 라티에르 모델하우스 공식 안내. 울산 라티에르673, 울산 남구 신정동 문수로 라티에르 673 분양 정보. 트램1호선 공업로터리역 초역세권, 아파트 199세대·오피스텔 35실, 계약금 5%. 1811-0432",
  keywords: "문수로 라티에르 모델하우스, 울산 라티에르673, 문수로라티에르673, 울산 라티에르 모델하우스, 울산 신정동 분양, 울산 트램 역세권 아파트, 울산 남구 분양, 라티에르673 모델하우스, 문수로라티에르, 울산 신정동 아파트, 공업로터리역 아파트",
  verification: {
    google: "icuny2CzwR-hUfHcqzjYDzQfUnaXkX7u6U-3Vd2tUUo",
    other: {
      "naver-site-verification": "cb70eaa0cec0588d289aa1d0c4c3186548bf37b9",
    },
  },
  openGraph: {
    title: "문수로 라티에르 673",
    description: "문수로 라티에르 모델하우스 공식 안내. 울산 남구 신정동 문수로 라티에르 673 분양 정보. 트램1호선 초역세권, 계약금 5% 특별 혜택.",
    type: "website",
    locale: "ko_KR",
    siteName: "문수로 라티에르 673",
  },
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
        <div className="w-full flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
