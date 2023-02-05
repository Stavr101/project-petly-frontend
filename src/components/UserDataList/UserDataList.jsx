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
import UserDataItem from 'components/UserDataItem/UserDataItem';
import { selectUser } from 'redux/auth/selectors';
import { updateUserData } from 'redux/users/operations';

import editAvatar from 'images/UserPage/editAvatar.svg';

export default function UserDataList() {
  const dataUser = useSelector(getUserData);
  const ava = useSelector(selectUser);
  console.log(ava, 'ava');
  console.log(dataUser, 'useselector');
  const { name, email, birthday, phone, address, avatarUrl } = dataUser.user;
  const dispatch = useDispatch();

  const handleAvatar = async e => {
    e.preventDefault();
    const avatar = URL.createObjectURL(e.target.files[0]);
    dispatch(updateUserData({ avatarUrl: avatar }));
  };
  return (
    <>
      <AvatarInfoWrapper>
        {avatarUrl ? <AvatarImg src={avatarUrl} alt="avatar" /> : <AvatarImg />}
        <form action="" id="avatar-add" encType="multipart/form-data">
          <LabelEditPhoto>
            <SVG src={editAvatar} />
            Edit photo
            <InputEditPhoto
              type="file"
              name="avatar"
              accept=".png, .jpg, .jpeg"
              placeholder="Edit photo"
              onChange={handleAvatar}
            />
          </LabelEditPhoto>
        </form>
      </AvatarInfoWrapper>
      <UserInfoList>
        <UserInfoItem>
          <UserInfoTitle>Name:</UserInfoTitle>
          {name && (
            <UserDataItem
              typeInput="name"
              nameInput="name"
              valueUser={name}

              // onEdit={newValue => onEdit(newValue)}
            />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>Email:</UserInfoTitle>
          {email && (
            <UserDataItem
              typeInput="email"
              nameInput="email"
              valueUser={email}
            />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>Birthday:</UserInfoTitle>
          {birthday && (
            <UserDataItem
              typeInput="date"
              nameInput="birthday"
              valueUser={birthday}
            />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>Phone:</UserInfoTitle>
          {phone && (
            <UserDataItem
              typeInput="phone"
              nameInput="phone"
              valueUser={phone}
            />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>City:</UserInfoTitle>
          {address && (
            <UserDataItem
              typeInput="text"
              nameInput="address"
              valueUser={address.split(',').splice(0, 1)}
            />
          )}
        </UserInfoItem>
      </UserInfoList>
    </>
  );
}
