import React from 'react';
import { NavContainer, PrimaryNav, NavLink, NavMenu, AuthMenu } from "./Nav.styled";
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import Logo from "components/Logo/Logo";
import { MobileMenuBtn } from './Nav.styled';
import { useAuth } from 'hooks';

const Nav = () => {
  const selectIsLoggedIn = useAuth();

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
        {selectIsLoggedIn ?
          <UserNav />
        : 
          <AuthMenu>
            <AuthNav/>
          </AuthMenu>}
        <MobileMenuBtn type='button'>
          <svg width="30" height="20" viewBox="0 0 30 20">
            <path d="M0 20H30V16.6667H0V20ZM0 11.6667H30V8.33333H0V11.6667ZM0 0V3.33333H30V0H0Z" fill="#212121"/>
          </svg>
        </MobileMenuBtn>
      </NavContainer>
    </>
  )
}

export default Nav;
