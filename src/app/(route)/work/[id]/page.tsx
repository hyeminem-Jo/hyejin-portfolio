import React from 'react';
import WorkDetail from '@/app/_modules/works/work-detail/WorkDetail';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: 'Work Detail',
  description: 'Work Detail 페이지 입니다.',
};

const WorkDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  return <WorkDetail id={id} />;
};

export default WorkDetailPage;
