'use client'

import Header from "../header/Header";
import * as S from './styled'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.AppLayoutContainer>
      <Header />
      {children}
    </S.AppLayoutContainer>
  );
};

export default AppLayout;