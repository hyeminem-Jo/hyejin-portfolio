'use client';

import * as S from './styled';

interface TitleProps {
  text: string;
  isCenter?: boolean;
  color?: 'white' | 'black';
}

const Title = ({ text, isCenter = false, color = 'black' }: TitleProps) => {
  return (
    <S.Title $isCenter={isCenter} $color={color}>
      {text}
    </S.Title>
  );
};

export default Title;
