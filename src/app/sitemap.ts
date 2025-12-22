import type { MetadataRoute } from 'next';
import { companyList } from './_data/companyList';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hyejin-portfolio.vercel.app';

  // 기본 페이지들
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  // Work Detail 페이지들 동적 생성
  companyList.forEach((company) => {
    company.projectList.forEach((project) => {
      routes.push({
        url: `${baseUrl}/work/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return routes;
}
