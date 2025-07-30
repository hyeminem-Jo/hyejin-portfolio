import styled from '@emotion/styled';

export const InnerContent = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Inner = ({ children }: { children: React.ReactNode }) => {
  return <InnerContent>{children}</InnerContent>;
};

export default Inner;
