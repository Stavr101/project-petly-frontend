import React, { useEffect } from 'react';
import { UserWrapper, UserDataWrapper, UserDataTitle } from './UserData.styled';
import { Logout } from 'components/Logout/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/users/selectors';
import UserDataList from '../UserDataList/UserDataList';
import { getLoading, getError } from 'redux/users/selectors';
import { getUserInfo } from 'redux/users/operations';
import { getUserData } from 'redux/users/selectors';

export default function UserData() {
  // const userInfo = useSelector(getUserInfo);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  // const dataUser = useSelector(getUserData);
  // const { avatarURL } = dataUser.user;
  // console.log(avatarURL, 'avatar');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  // const { name } = userData;

  // useEffect(() => {});
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('send data', e.target.value);
  //   // setDisabled(true);
  // };
  return (
    <UserWrapper>
      <UserDataTitle>My information:</UserDataTitle>
      <UserDataWrapper>
        <UserDataList />
        <Logout />
      </UserDataWrapper>
    </UserWrapper>
  );
}
