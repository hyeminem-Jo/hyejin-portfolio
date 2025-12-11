import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';
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
    padding: 0 30px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const InnerTitle = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 100px;
  align-self: flex-start;
  height: fit-content;
  gap: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    top: 100px;
    gap: 15px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    position: static;
    top: 0;
  }
`;

export const InnerContentChildren = styled.div`
  flex: 6;
`;

const Inner = ({
  children,
  title = '',
  titleColor = 'black',
  stickyContent,
}: {
  children: React.ReactNode;
  title?: string;
  titleColor?: 'white' | 'black';
  stickyContent?: React.ReactNode;
}) => {
  return (
    <InnerContent $hasTitle={!!title}>
      {title && (
        <InnerTitle>
          <Title text={title} color={titleColor} />
          {stickyContent}
        </InnerTitle>
      )}
      <InnerContentChildren>{children}</InnerContentChildren>
    </InnerContent>
  );
};

export default Inner;
