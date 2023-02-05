import React, { useEffect } from 'react';
import {
  UserInfoWrapper,
  UserInfoList,
  UserInfoItem,
  UserInfoTitle,
  AvatarInfoWrapper,
  AvatarImg,
  LabelEditPhoto,
  InputEditPhoto,
  SVG,
} from './UserDataList.styled';
// import UserDataItem from 'components/UserDataList/UserDataList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from 'redux/users/selectors';
import { getUserInfo } from 'redux/users/operations';
import UserDataItem from 'components/UserDataItem/UserDataItem-ver 05.02-15:40';
import { selectUser } from 'redux/auth/selectors';

import editAvatar from 'images/UserPage/editAvatar.svg';

export default function UserDataList() {
  const dataUser = useSelector(getUserData);
  const { name, email, birthday, phone, address, avatarUrl } = dataUser.user;

  return (
    <>
      <AvatarInfoWrapper>
        {avatarUrl ? <AvatarImg src={avatarUrl} alt="avatar" /> : <AvatarImg />}
        <LabelEditPhoto>
          <SVG src={editAvatar} />
          Edit photo
          <InputEditPhoto
            id="nanoid"
            type="file"
            name="avatar"
            accept=".png, .jpg, .jpeg"
            placeholder="Edit photo"
          />
        </LabelEditPhoto>
      </AvatarInfoWrapper>
      <UserInfoList>
        <UserInfoItem>
          <UserInfoTitle>Name:</UserInfoTitle>
          {name && (
            <UserDataItem type="name" nameInput="name" valueUser={name} />
          )}
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
            <UserDataItem
              type="date"
              nameInput="birthday"
              valueUser={birthday}
            />
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
    </>
  );
}
