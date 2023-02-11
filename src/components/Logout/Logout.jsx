import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import logoutSvg from 'images/UserPage/logoutSvg.svg';
import { useTranslation } from 'react-i18next';
import { LogOutButton, SVG } from './Logout.styled';

export const Logout = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <LogOutButton type="button" onClick={() => dispatch(logOut())}>
      <SVG src={logoutSvg} />
      {t("user.logout")}
    </LogOutButton>
  );
};
