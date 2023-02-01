import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "components/Header/Header/Header";
import Nav from "components/Nav/Nav";
import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import HeaderContainer from "components/Header/HeaderContainer/HeaderContainer";
import Logo from "components/Logo/Logo";
import Loader from "shared/loader/Loader";

export const SharedLayout = () => {
  return (

    <>
      <MainPageContainer>
        <HeaderContainer>
          <Header>
            <Logo />
            <Nav />
          </Header>
        </HeaderContainer>
      </MainPageContainer>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};
