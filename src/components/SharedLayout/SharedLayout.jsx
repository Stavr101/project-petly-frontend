import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "components/Header/Header";
import Logo from "components/Logo/Logo";
import Nav from "components/Nav/Nav";
import NavBar from "components/NavBar/NavBar";
import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import HeaderContainer from "components/Container/HeaderContainer/HeaderContainer";

export const SharedLayout = () => {
  return (

    <>
      <MainPageContainer>
        <HeaderContainer>
          <Header>
            <NavBar>
              <Logo />
              <Nav />
            </NavBar>
          </Header>
          Burger menu Btn
        </HeaderContainer>
      </MainPageContainer>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
