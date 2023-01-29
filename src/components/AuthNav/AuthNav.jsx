import React from 'react';
import { AuthNavItem, AuthBtn } from './AuthNav.styled';

 const AuthNav = () => {
  return (
    <>
      <AuthNavItem>
        <AuthBtn type="button" href="/login">Login</AuthBtn>
      </AuthNavItem>
      <AuthNavItem>
        <AuthBtn type="button" href="/register">Registration</AuthBtn>
      </AuthNavItem>
    </>
  )
}

export default AuthNav;