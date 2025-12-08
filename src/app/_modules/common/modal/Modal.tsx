import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as S from './styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  isImageModal?: boolean;
  imageList?: string[];
  currentImageIndex?: number;
  onImageChange?: (index: number) => void;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  isImageModal = false,
  imageList = [],
  currentImageIndex = 0,
  onImageChange,
}: ModalProps) => {
  const modalSliderRef = useRef<Slider>(null);
  const imageModalRef = useRef<HTMLDivElement>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: (current: number, next: number) => {
      onImageChange?.(next);
    },
  };
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      // 모달이 열릴 때 body 스크롤 방지
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
        // 모달이 닫힐 때 body 스크롤 복원
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      };
    }
  }, [isOpen, onClose]);

  // 모달이 열릴 때 슬라이더를 선택한 이미지로 이동
  useEffect(() => {
    if (isOpen && isImageModal && modalSliderRef.current) {
      modalSliderRef.current.slickGoTo(currentImageIndex);
    }
  }, [isOpen, isImageModal, currentImageIndex]);

  // ScrollTrigger가 wheel을 가로채는 것을 방지하기 위해 모달 열릴 때 비활성화
  useEffect(() => {
    if (typeof window === 'undefined' || !isImageModal) return;
    const triggers = typeof ScrollTrigger !== 'undefined' ? ScrollTrigger.getAll() : [];

    if (isOpen) {
      triggers.forEach((trigger) => trigger.disable(false));
    } else {
      triggers.forEach((trigger) => trigger.enable());
    }

    return () => {
      triggers.forEach((trigger) => trigger.enable());
    };
  }, [isOpen, isImageModal]);

  // 모달 내부 wheel을 강제로 모달 컨테이너에만 적용
  useEffect(() => {
    if (!isImageModal || !isOpen) return;
    const container = imageModalRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      // wheel 이벤트가 바깥으로 버블되어 ScrollTrigger에 가지 않도록 막음
      event.stopPropagation();
      if (container.scrollHeight <= container.clientHeight) return;
      container.scrollTo({
        top: container.scrollTop + event.deltaY,
        behavior: 'auto',
      });
      event.preventDefault();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isImageModal, isOpen]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <S.Overlay onClick={handleOverlayClick}>
      <div>
        {!isImageModal ? (
          <S.ModalContainer $size={size}>
            <S.Header>
              {title && <S.Title>{title}</S.Title>}
              {showCloseButton && (
                <S.CloseButton onClick={onClose} aria-label='Close modal'>
                  <IoClose size={24} />
                </S.CloseButton>
              )}
            </S.Header>
            <S.Content>{children}</S.Content>
          </S.ModalContainer>
        ) : (
          <S.ImageModalContainer ref={imageModalRef}>
            <S.ImageContent>
              <S.ImageContentInner>
                <S.ModalSliderContainer>
                  <Slider
                    ref={modalSliderRef}
                    {...sliderSettings}
                    initialSlide={currentImageIndex}
                    prevArrow={
                      <S.CustomArrow>
                        <FaChevronLeft />
                      </S.CustomArrow>
                    }
                    nextArrow={
                      <S.CustomArrow>
                        <FaChevronRight />
                      </S.CustomArrow>
                    }
                  >
                    {imageList.map((imageUrl: string, index: number) => (
                      <S.ModalSliderImage key={index}>
                        <Image
                          src={imageUrl}
                          alt={`화면 이미지 ${index + 1}`}
                          width={1200}
                          height={800}
                          style={{ objectFit: 'contain' }}
                          quality={90}
                          placeholder='blur'
                          blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlOWVjZWY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZGllbnQpIiAvPgo8L3N2Zz4='
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px'
                          onError={(e) => {
                            console.error('이미지 로드에 실패했습니다.', imageUrl);
                          }}
                        />
                      </S.ModalSliderImage>
                    ))}
                  </Slider>
                </S.ModalSliderContainer>
              </S.ImageContentInner>
            </S.ImageContent>
            <S.ImageCloseButton onClick={onClose} aria-label='Close modal'>
              <IoClose />
            </S.ImageCloseButton>
          </S.ImageModalContainer>
        )}
      </div>
    </S.Overlay>
  );

  if (typeof window !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};

export default Modal;
