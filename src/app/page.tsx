import type { Metadata } from 'next';
import MainContainer from './_modules/main/main-container/MainContainer';

export const metadata: Metadata = {
  title: 'Hyejin Jo Portfolio',
  description:
    '프론트엔드 개발자 조혜진의 포트폴리오 사이트입니다. 저의 웹 개발 경험과 프로젝트를 소개합니다 :)',
};

export default function Home() {
  return <MainContainer />;
}
