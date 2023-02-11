import React, { useEffect } from 'react';
import { UserWrapper, UserDataWrapper, UserDataTitle } from './UserData.styled';
import { Logout } from 'components/Logout/Logout';
import { useDispatch } from 'react-redux';
import UserDataList from '../UserDataList/UserDataList';
import { getUserInfo } from 'redux/users/operations';
import { useTranslation } from 'react-i18next';

export default function UserData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const { t } = useTranslation();

  return (
    <UserWrapper>
      <UserDataTitle>{t("user.info")}</UserDataTitle>
      <UserDataWrapper>
        <UserDataList />
        <Logout />
      </UserDataWrapper>
    </UserWrapper>
  );
}
