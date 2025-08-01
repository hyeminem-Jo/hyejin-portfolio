import { BREAKPOINT } from '@/app/_constant/breakpoint';
import styled from '@emotion/styled';

export const InnerContent = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Inner = ({ children }: { children: React.ReactNode }) => {
  return <InnerContent>{children}</InnerContent>;
};

export default Inner;
