import styled from '@emotion/styled';

export const InnerContent = styled.div`
  width: 100%;
  padding: 0 50px;
`;

const Inner = ({ children }: { children: React.ReactNode }) => {
  return <InnerContent>{children}</InnerContent>;
};

export default Inner;
