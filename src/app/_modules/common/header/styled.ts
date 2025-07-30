import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  margin: 0 auto;
`;

export const HeaderLogo = styled.div`
  width: 50px;
  height: 50px;
`;
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const HeaderNavItem = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: #222;
  text-decoration: none;
  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;
