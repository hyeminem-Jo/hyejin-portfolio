'use client';

import { BREAKPOINT } from '@/app/_constant/breakpoint';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './styled';
import { useIsMobile } from '../hooks/useIsMobile';

const menuItems = [
  { href: '/', text: 'HOME' },
  { href: '/about', text: 'ABOUT' },
  { href: '/skills', text: 'SKILLS' },
  { href: '/contact', text: 'WORKS' },
  { href: '/contact', text: 'SIDE PROJECT' },
];

const Header = () => {
  const { isMobile } = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
