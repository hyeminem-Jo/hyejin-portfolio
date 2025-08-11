import { useState, useEffect } from 'react';
import { BREAKPOINT } from '../../../_constant/breakpoint';

export const useIsMobile = (breakpoint: number = BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth <= breakpoint;
      setIsMobile(mobile);
      setIsLoaded(true);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return { isMobile, isLoaded };
};
