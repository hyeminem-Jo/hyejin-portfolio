'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Inner from '../common/layout/Inner';
import { useState, useRef } from 'react';
import { companyList } from '@/app/_data/companyList';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import Button from '../common/button/Button';
import { useRouter } from 'next/navigation';
import { FaArrowDown } from 'react-icons/fa';

const Works = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);
  const companyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${BREAKPOINT_SM + 1}px)`, () => {
      companyRefs.current.forEach((ref, index) => {
        if (!ref) return;

        ScrollTrigger.create({
          trigger: ref,
          start: 'top 20%',
          end: 'bottom 20%',
          onEnter: () => setActiveCompanyIndex(index),
          onEnterBack: () => setActiveCompanyIndex(index),
        });
      });
    });

    mm.add(`(min-width: ${BREAKPOINT + 1}px)`, () => {
      const worksItems = document.querySelectorAll('.works-item-parallax');

      worksItems.forEach((item, index) => {
        const animationType = index % 3;
        let yValue: number;

        switch (animationType) {
          case 0:
            yValue = -40;
            break;
          case 1:
            yValue = -80;
            break;
          case 2:
            yValue = -120;
            break;
          default:
            yValue = -80;
            break;
        }

        gsap.to(item, {
          y: yValue,
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  const activeCompany = companyList[activeCompanyIndex] || companyList[0];

  const handleSkipToProjects = () => {
    const targetElement = document.querySelector('#my-projects');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      router.push('/#my-projects');
    }
  };

  return (
    <S.Works id='work'>
      <Inner
        title={`WORKS`}
        stickyContent={
          <S.CompanyHeader>
            <S.CompanyLogo src={activeCompany.companyLogo} alt={activeCompany.name} />
            <S.CompanyInfo>
              <S.CompanyName>{activeCompany.name}</S.CompanyName>
              <S.CompanyPeriod>{activeCompany.companyPeriod}</S.CompanyPeriod>
            </S.CompanyInfo>
            <Button
              text={
                <>
                  <FaArrowDown />
                  <span>SKIP</span>
                </>
              }
              size='sm'
              onClick={handleSkipToProjects}
            />
          </S.CompanyHeader>
        }
      >
        <S.WorksInner>
          <S.WorksInnerBox>
            <S.WorksCompanyList>
              {companyList.map((company, index) => (
                <div
                  key={company.name}
                  ref={(el) => {
                    companyRefs.current[index] = el;
                  }}
                >
                  <S.WorksList>
                    {' '}
                    {company.projectList.map((project) => (
                      <S.WorksItem key={project.projectName} className='works-item-parallax'>
                        <S.WorksItemImageWrap className='works-item-image-wrap'>
                          <S.WorksItemImage
                            className='works-item-image'
                            src={
                              project?.projectThumbnail || (project?.projectImgList?.[0] as string)
                            }
                            alt={project.projectName}
                            width={400}
                            height={600}
                            placeholder='blur'
                            blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlOWVjZWY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZGllbnQpIiAvPgo8L3N2Zz4='
                            quality={80}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />
                        </S.WorksItemImageWrap>

                        <S.WorksItemOverview className='works-item-overview'>
                          <S.ProjectDesc>{project.projectDesc}</S.ProjectDesc>
                          <S.WorksItemLink href={`/work/${project.id}`}>View More</S.WorksItemLink>
                        </S.WorksItemOverview>
                        <S.WorksItemInfo>
                          <S.ProjectName>{project.projectName}</S.ProjectName>
                          <S.ProjectPeriod>{project.projectPeriod}</S.ProjectPeriod>
                        </S.WorksItemInfo>
                      </S.WorksItem>
                    ))}
                  </S.WorksList>
                </div>
              ))}
            </S.WorksCompanyList>
          </S.WorksInnerBox>
        </S.WorksInner>
      </Inner>
    </S.Works>
  );
};

export default Works;
