import styled from '@emotion/styled';

interface TitleProps {
  $isCenter: boolean;
  $color: 'white' | 'black';
}

export const Title = styled.h2<TitleProps>`
  font-size: 45px;
  font-weight: 700;
  text-align: ${({ $isCenter }) => ($isCenter ? 'center' : 'left')};
  color: ${({ $color }) => ($color === 'white' ? '#fff' : '#222')};
`;
