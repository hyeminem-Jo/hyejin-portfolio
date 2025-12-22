import React from 'react';
import WorkDetail from '@/app/_modules/works/work-detail/WorkDetail';
import type { Metadata } from 'next';
import { companyList } from '@/app/_data/companyList';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  let targetProject = null;
  let targetCompany = null;

  for (const company of companyList) {
    const project = company.projectList.find((p) => p.id === Number(id));
    if (project) {
      targetProject = project;
      targetCompany = company;
      break;
    }
  }

  if (!targetProject) {
    return {
      title: 'Work Detail',
      description: '프로젝트 상세 페이지입니다.',
    };
  }

  const title = `${targetProject.projectName} | Work Detail`;
  const description =
    targetProject.projectDesc || `${targetProject.projectName} 프로젝트 상세 정보입니다.`;
  const skills = targetProject.skillList?.join(', ') || '';

  return {
    title,
    description: `${description} ${skills ? `사용 기술: ${skills}` : ''}`,
    keywords: [
      targetProject.projectName,
      ...(targetProject.skillList || []),
      targetCompany?.name || '',
      '프로젝트',
      '포트폴리오',
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      type: 'article',
      images: targetProject.projectThumbnail
        ? [
            {
              url: `https://hyejin-portfolio.vercel.app${targetProject.projectThumbnail}`,
              width: 1200,
              height: 630,
              alt: targetProject.projectName,
            },
          ]
        : undefined,
    },
  };
}

const WorkDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  return <WorkDetail id={id} />;
};

export default WorkDetailPage;
