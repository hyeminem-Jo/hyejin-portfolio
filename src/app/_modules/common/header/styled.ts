import { BREAKPOINT } from '@/app/_constant/breakpoint';
import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  z-index: 100;

  @media (max-width: ${BREAKPOINT}px) {
    height: 65px;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 1000;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 10px;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 30vw;
  height: 3px;
  border-radius: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #222;
    opacity: 0.1;
    border-radius: 10px;
  }

  @media (max-width: ${BREAKPOINT}px) {
    width: 150px;
  }
`;

export const PortfolioText = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.05em;
  white-space: nowrap;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 12px;
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #ff9800;
  z-index: 101;
  border-radius: 10px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 20px;
  }
`;

export const HeaderContentLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 100px;
  cursor: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${BREAKPOINT}px) {
    height: 65px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    position: absolute;
    top: 65px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    gap: 25px;
    width: 100%;
    height: calc(100dvh - 65px);
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

    &.menu-open {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const HeaderNavItem = styled(Link)`
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: #222;
  opacity: 0.3;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: 0.1s ease-in-out;
  padding: 5px;

  &:hover {
    opacity: 1;
  }

  &.active {
    color: #222;
    opacity: 1;
    font-weight: 700;

    &::after {
      content: '';
      position: absolute;
      bottom: 50%;
      transform: translateY(-50%);
      left: -5px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #ff8200;
    }
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 22px;
    transform: translateX(-10px);
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &.menu-open {
      transform: translateX(0);
      opacity: 1;
    }

    &:nth-child(1) {
      transition-delay: 0.1s;
    }
    &:nth-child(2) {
      transition-delay: 0.2s;
    }
    &:nth-child(3) {
      transition-delay: 0.3s;
    }
    &:nth-child(4) {
      transition-delay: 0.4s;
    }
    &:nth-child(5) {
      transition-delay: 0.5s;
    }
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: ${BREAKPOINT}px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  &.active .line {
    &:nth-child(1) {
      transform: rotate(45deg) translate(7px, 7px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  }
`;

export const HamburgerLine = styled.span`
  width: 100%;
  height: 3px;
  background-color: #222;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
`;
