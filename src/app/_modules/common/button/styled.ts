import styled from '@emotion/styled';

interface ButtonProps {
  $mode: 'light' | 'dark';
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
  font-size: 16px;
  font-weight: 600;
  padding: 15px 25px;
  transition: all 0.3s ease;
  border: 1px solid #222;

  &:hover {
    background-color: ${({ $mode }) => ($mode === 'light' ? '#222' : '#fff')};
    color: ${({ $mode }) => ($mode === 'light' ? '#fff' : '#222')};
  }
`;
