import React from 'react';
import WorkDetail from '@/app/_modules/works/work-detail/WorkDetail';
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: 'Work Detail',
  description: 'Work Detail 페이지 입니다.',
};

const WorkDetailPage = ({ params }: Props) => {
  const { id } = params;

  return <WorkDetail id={id} />;
};

export default WorkDetailPage;
