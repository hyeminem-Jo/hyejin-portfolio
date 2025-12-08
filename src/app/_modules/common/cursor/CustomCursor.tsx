'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '../hooks/useIsMobile';
import * as S from './styled';

const CustomCursor = () => {
  const { isMobile } = useIsMobile();
  const pathname = usePathname();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    // 상태 초기화
    setIsHovering(false);
    setIsClicking(false);

    document.body.style.cursor = 'default';

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = (e: MouseEvent) => {
      setIsClicking(false);
      const target = e.target as HTMLElement;
      const isOnInteractive = target.closest('a, button, [role="button"]');
      if (!isOnInteractive) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Button과 Link 요소에 이벤트 리스너 추가
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      setIsHovering(false);
      setIsClicking(false);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile, pathname]);

  if (isMobile) return null;

  return (
    <S.CursorCircle
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
      $isHovering={isHovering}
      $isClicking={isClicking}
    />
  );
};

export default CustomCursor;
