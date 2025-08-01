import { BREAKPOINT } from '@/app/_constant/breakpoint';
import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  z-index: 100;

  @media (max-width: ${BREAKPOINT}px) {
    height: 65px;
  }
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

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 100px;

  @media (max-width: ${BREAKPOINT}px) {
    height: 65px;
  }
`;

export const HeaderLogoTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #222;

  @media (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

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
  font-size: 18px;
  font-weight: 600;
  color: #222;
  text-decoration: none;
  &:hover {
    color: rgba(0, 0, 0, 0.5);
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
