import styled from '@emotion/styled';

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  span {
    width: 24%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
