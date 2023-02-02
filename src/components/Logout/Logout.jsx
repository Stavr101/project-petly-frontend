import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import logoutSvg from 'images/UserPage/logoutSvg.svg';

import { LogOutButton, SVG } from './Logout.styled';

export const Logout = () => {
  const dispatch = useDispatch();

  return (
    <LogOutButton type="button" onClick={() => dispatch(logOut())}>
      <SVG src={logoutSvg} />
      Log Out
    </LogOutButton>
  );
};
