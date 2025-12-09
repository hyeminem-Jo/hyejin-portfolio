import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Company, Project } from '@/app/_constant/type';
import * as S from './styled';

type ProjectWithCompany = {
  project: Project;
  company: Company;
};

type WorkDetailNavigationProps = {
  prevProject: ProjectWithCompany | null;
  nextProject: ProjectWithCompany | null;
  currentProjectName: string;
};

const WorkDetailNavigation = ({
  prevProject,
  nextProject,
  currentProjectName,
}: WorkDetailNavigationProps) => {
  if (!prevProject && !nextProject) {
    return null;
  }

  return (
    <S.NavigationContainer>
      {prevProject && (
        <S.NavigationItem href={`/work/${prevProject.project.id}`}>
          <S.NavigationArrow>
            <FaArrowUp />
          </S.NavigationArrow>
          <S.NavigationTitle>{prevProject.project.projectName}</S.NavigationTitle>
          <S.NavigationProjectDate>{prevProject.project.projectPeriod}</S.NavigationProjectDate>
        </S.NavigationItem>
      )}
      {nextProject && (
        <S.NavigationItem href={`/work/${nextProject.project.id}`}>
          <S.NavigationArrow>
            <FaArrowDown />
          </S.NavigationArrow>
          <S.NavigationTitle>{nextProject.project.projectName}</S.NavigationTitle>
          <S.NavigationProjectDate>{nextProject.project.projectPeriod}</S.NavigationProjectDate>
        </S.NavigationItem>
      )}
    </S.NavigationContainer>
  );
};

export default WorkDetailNavigation;
