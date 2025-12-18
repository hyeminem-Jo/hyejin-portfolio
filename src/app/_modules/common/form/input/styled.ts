import styled from '@emotion/styled';

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid #eee;
  border-radius: 15px;
  background-color: #fff;
  color: #222;
  transition: all 0.1s ease;
  font-size: 18px;
  font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  &:focus {
    outline: none;
    border: 2px solid #ffd700;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;
