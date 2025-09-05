'use client';

import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import * as S from './styled';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.ScrollTopButton onClick={scrollToTop} aria-label='맨 위로 이동' $isVisible={isVisible}>
      <FaChevronUp />
    </S.ScrollTopButton>
  );
};

export default ScrollTop;
