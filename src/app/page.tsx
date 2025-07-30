import type { Metadata } from 'next';
import MainContainer from './_modules/main/main-container/MainContainer';

export const metadata: Metadata = {
  title: "Hyejin's Portfolio",
  description: "Hyejin's Portfolio",
};

export default function Home() {
  return <MainContainer />;
}
