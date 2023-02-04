import React, { useEffect } from 'react';
import {
  UserInfoWrapper,
  UserInfoList,
  UserInfoItem,
  UserInfoTitle,
} from './UserDataList.styled';
// import UserDataItem from 'components/UserDataList/UserDataList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from 'redux/users/selectors';
import { getUserInfo } from 'redux/users/operations';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import { selectUser } from 'redux/auth/selectors';

export default function UserDataList() {
  //   const dataUser = getUserInfo();
  const dataUser = useSelector(getUserData);
  //   console.log(dataUser, 'data');
  //   console.log(dataUser.user, 'data user');

  const { name, email, birthday, phone, address } = dataUser.user;
  //   console.log(birthday, 'birthday');
  // useEffect(() => {});
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('send data', e.target.value);
  //   // setDisabled(true);
  // };

  return (
    <UserInfoList>
      <UserInfoItem>
        <UserInfoTitle>Name:</UserInfoTitle>
        {name && <UserDataItem type="name" nameInput="name" valueUser={name} />}
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoTitle>Email:</UserInfoTitle>
        {email && (
          <UserDataItem type="email" nameInput="email" valueUser={email} />
        )}
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoTitle>Birthday:</UserInfoTitle>
        {birthday && (
          <UserDataItem type="date" nameInput="birthday" valueUser={birthday} />
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoTitle>Phone:</UserInfoTitle>
        {phone && (
          <UserDataItem type="phone" nameInput="phone" valueUser={phone} />
        )}
      </UserInfoItem>

      <UserInfoItem>
        <UserInfoTitle>City:</UserInfoTitle>
        {address && (
          <UserDataItem
            type="text"
            nameInput="address"
            valueUser={address.split(',').splice(0, 1)}
          />
        )}
      </UserInfoItem>
    </UserInfoList>
  );
}
