import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_constant/breakpoint';

interface ButtonProps {
  $mode: 'light' | 'dark';
  $size: 'sm' | 'md';
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $mode }) => ($mode === 'light' ? '#fff' : '#222')};
  color: ${({ $mode }) => ($mode === 'light' ? '#222' : '#fff')};
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: ${({ $size }) => ($size === 'sm' ? '14px' : '16px')};
  font-weight: 600;
  padding: ${({ $size }) => ($size === 'sm' ? '10px 20px' : '15px 25px')};
  transition: all 0.3s ease;
  border: 1px solid #222;

  &:hover {
    background-color: ${({ $mode }) => ($mode === 'light' ? '#222' : '#fff')};
    color: ${({ $mode }) => ($mode === 'light' ? '#fff' : '#222')};
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
    padding: ${({ $size }) => ($size === 'sm' ? '8px 15px' : '12px 20px')};
  }
`;
