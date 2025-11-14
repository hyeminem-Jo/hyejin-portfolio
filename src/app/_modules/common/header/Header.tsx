'use client';

import Image from 'next/image';
import { useState } from 'react';
import * as S from './styled';
import { useIsMobile } from '../hooks/useIsMobile';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@/app/_modules/common/button/Button';
import { companyList } from '@/app/_data/companyList';

const menuItems = [
  { href: '#visual', text: 'HOME' },
  { href: '#about', text: 'ABOUT' },
  { href: '#skills', text: 'SKILLS' },
  { href: '#work', text: 'WORKS' },
  { href: '#side-projects', text: 'SIDE PROJECT' },
];

const Header = () => {
  const { isMobile } = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getProjectNotionLink = () => {
    if (pathname.includes('/work/')) {
      const projectId = parseInt(pathname.split('/work/')[1]);
      for (const company of companyList) {
        const project = company.projectList.find((p) => p.id === projectId);
        if (project && project.projectNotionLink) {
          return project.projectNotionLink;
        }
      }
    }
    return null;
  };

  const notionLink = getProjectNotionLink();

  const handleMenuClick = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = isMobile ? 65 : 80;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }

    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        {!usePathname().includes('/work') ? (
          <S.HeaderLogo
            onClick={() => {
              handleMenuClick('#visual');
            }}
          >
            <Image
              src='/assets/images/portfolio-logo.webp'
              alt='logo'
              width={isMobile ? 45 : 50}
              height={isMobile ? 45 : 50}
            />
          </S.HeaderLogo>
        ) : (
          <Button
            text='← Go To List'
            size='sm'
            onClick={() => {
              router.push('/#work');
            }}
          />
        )}

        {!usePathname().includes('/work') ? (
          <>
            <S.HeaderNav className={isMenuOpen ? 'menu-open' : ''}>
              {menuItems.map((item) => (
                <S.HeaderNavItem
                  key={item.text}
                  href={item.href}
                  className={isMenuOpen ? 'menu-open' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.href);
                  }}
                >
                  {item.text}
                </S.HeaderNavItem>
              ))}
            </S.HeaderNav>
            <S.HamburgerButton onClick={toggleMenu} className={isMenuOpen ? 'active' : ''}>
              {[1, 2, 3].map((_, index) => (
                <S.HamburgerLine key={index} className='line' />
              ))}
            </S.HamburgerButton>
          </>
        ) : (
          <>
            {notionLink ? (
              <Button
                text='Notion 보기'
                size='sm'
                mode='light'
                onClick={() => {
                  if (notionLink) {
                    window.open(notionLink, '_blank');
                  }
                }}
              />
            ) : null}
          </>
        )}
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
