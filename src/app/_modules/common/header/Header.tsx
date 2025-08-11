'use client';

import Image from 'next/image';
import { useState } from 'react';
import * as S from './styled';
import { useIsMobile } from '../hooks/useIsMobile';

const menuItems = [
  { href: '#visual', text: 'HOME' },
  { href: '#about', text: 'ABOUT' },
  { href: '#skills', text: 'SKILLS' },
  { href: '#works', text: 'WORKS' },
  { href: '#side-projects', text: 'SIDE PROJECT' },
];

const Header = () => {
  const { isMobile } = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = isMobile ? 65 : 80; // 헤더 높이
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }

    // 모바일에서 메뉴가 열려있다면 닫기
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderLogo>
          <Image
            src='/assets/images/portfolio-logo.webp'
            alt='logo'
            width={isMobile ? 45 : 50}
            height={isMobile ? 45 : 50}
          />
          <S.HeaderLogoTitle>HYEJIN </S.HeaderLogoTitle>
        </S.HeaderLogo>
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
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
