'use client';

import * as S from './styled';
import Image from 'next/image';

const logoList = [
  { id: 'f', src: '/assets/images/logo/fat-logo-01.png', alt: 'F' },
  { id: 'e', src: '/assets/images/logo/fat-logo-02.png', alt: 'E' },
  { id: 'h', src: '/assets/images/logo/fat-logo-03.png', alt: 'H' },
  { id: 'j', src: '/assets/images/logo/fat-logo-04.png', alt: 'J' },
];

interface LogoWrapProps {
  className?: string;
  isVisual?: boolean;
}

const renderLogoItem = (logo: (typeof logoList)[0], isVisual: boolean) => (
  <S.LogoImageWrap id={logo.id} key={logo.id} $isVisual={isVisual}>
    <Image src={logo.src} alt={logo.alt} width={100} height={100} />
  </S.LogoImageWrap>
);

const LogoWrap = ({ className, isVisual = true }: LogoWrapProps) => {
  return (
    <S.LogoWrap className={className} $isVisual={isVisual}>
      {isVisual ? (
        <>
          <S.LogoGroup $isVisual={isVisual}>
            {logoList.slice(0, 2).map((logo) => renderLogoItem(logo, isVisual))}
          </S.LogoGroup>
          <S.LogoGroup $isVisual={isVisual}>
            {logoList.slice(2, 4).map((logo) => renderLogoItem(logo, isVisual))}
          </S.LogoGroup>
        </>
      ) : (
        logoList.map((logo) => renderLogoItem(logo, isVisual))
      )}
    </S.LogoWrap>
  );
};

export default LogoWrap;
