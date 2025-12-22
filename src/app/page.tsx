import type { Metadata } from 'next';
import MainContainer from './_modules/main/main-container/MainContainer';

export const metadata: Metadata = {
  title: 'Home',
  description:
    '프론트엔드 개발자 조혜진의 포트폴리오 사이트입니다. React, Next.js, TypeScript를 활용한 웹 개발 경험, 프로젝트 및 스킬을 소개합니다.',
};

export default function Home() {
  return <MainContainer />;
}
