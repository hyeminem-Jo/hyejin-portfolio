'use client'

import Image from 'next/image'
import * as S from './styled'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderLogo>
          <Image src="/assets/images/portfolio-logo.webp" alt="logo" width={50} height={50} />
        </S.HeaderLogo>
        <S.HeaderNav>
          <S.HeaderNavItem href="/">Home</S.HeaderNavItem>
          <S.HeaderNavItem href="/about">About</S.HeaderNavItem>
          <S.HeaderNavItem href="/contact">Contact</S.HeaderNavItem>
        </S.HeaderNav>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;