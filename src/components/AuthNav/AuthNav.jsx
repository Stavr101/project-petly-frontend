import React from 'react';
import { AuthNavItem, NavBtnLink } from './AuthNav.styled';
import { useTranslation } from 'react-i18next';

const AuthNav = () => {
  const { t } = useTranslation();

  return (
    <>
      <AuthNavItem>
        <NavBtnLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>{t("main.login")}</NavBtnLink>
      </AuthNavItem>
      <AuthNavItem>
        <NavBtnLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>{t("main.register")}</NavBtnLink>
      </AuthNavItem>
    </>
  )
}

export default AuthNav;