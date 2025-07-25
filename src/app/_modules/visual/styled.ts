import styled from '@emotion/styled';

export const Visual = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100dvh - 80px);
  padding: 0 30px;
`;

export const MainTextList = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
  font-size: 60px;
  line-height: 1;
  width: 100%;
`;

export const MainTextInner = styled.span`
  overflow: hidden;

  &:nth-of-type(1) i {
    animation-delay: 0.3s;
  }
  &:nth-of-type(2) i {
    animation-delay: 0.5s;
  }
`;

export const MainText = styled.i`
  display: inline-block;
  transition: transform 0.5s linear;
  font-style: normal;
  opacity: 0;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: slideUp 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
`;

export const SubText = styled.h4`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: auto;
  padding-bottom: 20px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #555;
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    width: 24%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
