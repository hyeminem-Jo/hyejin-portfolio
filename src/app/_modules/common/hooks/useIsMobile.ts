import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { BREAKPOINT } from '../../../_constant/breakpoint';

export const useIsMobile = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${BREAKPOINT}px)` });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 모바일 감지가 완료된 후에 로딩 완료로 설정
    setIsLoaded(true);
  }, [isMobile]);

  return { isMobile, isLoaded };
};
