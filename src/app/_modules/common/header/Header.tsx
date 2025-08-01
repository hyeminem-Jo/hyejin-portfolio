'use client';

import Image from 'next/image';
import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderLogo>
          <Image src='/assets/images/portfolio-logo.webp' alt='logo' width={50} height={50} />
          <S.HeaderLogoTitle>HYEJIN </S.HeaderLogoTitle>
        </S.HeaderLogo>
        <S.HeaderNav>
          <S.HeaderNavItem href='/'>HOME</S.HeaderNavItem>
          <S.HeaderNavItem href='/about'>ABOUT</S.HeaderNavItem>
          <S.HeaderNavItem href='/skills'>SKILLS</S.HeaderNavItem>
          <S.HeaderNavItem href='/contact'>WORKS</S.HeaderNavItem>
          <S.HeaderNavItem href='/contact'>SIDE PROJECT</S.HeaderNavItem>
        </S.HeaderNav>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
