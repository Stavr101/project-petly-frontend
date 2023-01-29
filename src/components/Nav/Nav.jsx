import React from 'react';
import { NavContainer, PrimaryNav, NavLink, NavMenu, AuthMenu } from "./Nav.styled";
import AuthNav from 'components/AuthNav/AuthNav';
import { MobileMenuBtn } from './Nav.styled';
// import BurgerMenuBtn from "images/icons/BurgerMenuBtn.svg";
import Logo from "components/Logo/Logo";

const Nav = () => {
  return (
    <>
      <NavContainer>
        <Logo />
        <PrimaryNav>
          <NavMenu>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/notices">Find pet</NavLink>
            <NavLink to="/friends">Our friends</NavLink>
          </NavMenu>
        </PrimaryNav>
        <AuthMenu>
            <AuthNav/>
        </AuthMenu>
        <MobileMenuBtn />
      </NavContainer>
    </>
  )
}

export default Nav;
