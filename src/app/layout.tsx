import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins, Righteous } from 'next/font/google';
import './globals.css';
import './_modules/common/styles/fonts.css';
import AppLayout from './_modules/common/layout/AppLayout';
import EmotionRegistry from './_modules/common/styles/EmotionRegistry';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const righteous = Righteous({
  variable: '--font-righteous',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: {
    default: '조혜진의 프론트엔드 개발자 포트폴리오',
    template: '%s | 조혜진의 포트폴리오',
  },
  description:
    '프론트엔드 개발자 조혜진의 포트폴리오 사이트입니다. 저의 웹 개발 경험과 프로젝트를 소개합니다 :)',
  keywords: [
    '프론트엔드 개발자',
    'React',
    'Next.js',
    'TypeScript',
    '포트폴리오',
    '웹 개발자',
    'Frontend Developer',
    '조혜진',
    'Hyejin Jo',
  ],
  authors: [{ name: 'Hyejin Jo' }],
  creator: 'Hyejin Jo',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hyejin-portfolio.vercel.app',
    siteName: '조혜진의 포트폴리오',
    title: '조혜진의 프론트엔드 개발자 포트폴리오',
    description:
      '프론트엔드 개발자 조혜진의 포트폴리오 사이트입니다. React, Next.js, TypeScript를 활용한 웹 개발 경험과 프로젝트를 소개합니다.',
    images: [
      {
        url: 'https://hyejin-portfolio.vercel.app/assets/images/portfolio-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Hyejin Jo Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '조혜진의 프론트엔드 개발자 포트폴리오',
    description: '프론트엔드 개발자 조혜진의 포트폴리오 사이트입니다.',
    images: ['https://hyejin-portfolio.vercel.app/assets/images/portfolio-logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Cug26p3MwhwWYdurcI0cyjPpm1aVgW25mTE7E8-nF0s',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${righteous.variable}`}
      >
        <EmotionRegistry>
          <AppLayout>{children}</AppLayout>
        </EmotionRegistry>
      </body>
    </html>
  );
}
