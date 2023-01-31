import React from 'react';
import { AuthNavItem, NavBtnLink } from './AuthNav.styled';

 const AuthNav = () => {
  return (
    <>
      <AuthNavItem>
        <NavBtnLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavBtnLink>
      </AuthNavItem>
      <AuthNavItem>
        <NavBtnLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>Registration</NavBtnLink>
      </AuthNavItem>
    </>
  )
}

export default AuthNav;