import { BREAKPOINT } from '@/app/_constant/breakpoint';
import styled from '@emotion/styled';
import Title from '../title/Title';

export const InnerContent = styled.div<{ $hasTitle: boolean }>`
  width: 1200px;

  ${({ $hasTitle }) =>
    $hasTitle &&
    `
    display: flex;
    gap: 2rem;
  `}
  margin: 0 auto;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const InnerTitle = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 80px;
  align-self: flex-start;
  height: fit-content;

  @media (max-width: ${BREAKPOINT}px) {
    top: 65px;
  }
`;

export const InnerContentChildren = styled.div`
  flex: 6;
`;

const Inner = ({
  children,
  title = '',
  titleColor = 'black',
}: {
  children: React.ReactNode;
  title?: string;
  titleColor?: 'white' | 'black';
}) => {
  return (
    <InnerContent $hasTitle={!!title}>
      {title && (
        <InnerTitle>
          <Title text={title} color={titleColor} />
        </InnerTitle>
      )}
      <InnerContentChildren>{children}</InnerContentChildren>
    </InnerContent>
  );
};

export default Inner;
