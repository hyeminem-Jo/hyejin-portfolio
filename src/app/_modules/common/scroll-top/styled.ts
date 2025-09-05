import styled from '@emotion/styled';

interface ScrollTopButtonProps {
  $isVisible: boolean;
}

export const ScrollTopButton = styled.button<ScrollTopButtonProps>`
  position: fixed;
  bottom: 35px;
  right: ${(props) => (props.$isVisible ? '35px' : '-80px')};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;

  &:hover {
    background-color: #555;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: ${(props) => (props.$isVisible ? '20px' : '-70px')};
    font-size: 18px;
  }
`;
