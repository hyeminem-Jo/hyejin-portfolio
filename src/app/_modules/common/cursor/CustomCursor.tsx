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
      const target = e.target as HTMLElement | null;
      const isOnInteractive = target?.closest('a, button, [role="button"]');
      setIsHovering(Boolean(isOnInteractive));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      setIsHovering(false);
      setIsClicking(false);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
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
