import React, { useEffect, useState } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from 'redux/users/selectors';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import { updateUserData } from 'redux/users/operations';

import editAvatar from 'images/UserPage/editAvatar.svg';
import { regExp } from 'helpers/regExp/regExp';

export default function UserDataList() {
  const dataUser = useSelector(getUserData);
  const { _id, name, email, birthday, phone, address, avatarUrl } =
    dataUser.user;
  const [activeBtn, setActiveBtn] = useState(true);
  // const dataUser = useSelector(selectUser);
  // console.log(ava, 'ava');
  // console.log(dataUser, 'useselector');
  // const { userId } = useParams();

  // const { name, email, birthday, phone, address, avatarUrl } = dataUser;

  const dispatch = useDispatch();

  // const handleAvatar = async e => {
  //   e.preventDefault();
  //   const avatar = URL.createObjectURL(e.target.files[0]);
  //   dispatch(updateUserData({ userAvatar: avatar }));
  //   console.log(avatar, 'avatar');
  // };;
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarUrlD, setAvatarUrlD] = useState(null);
  const handleChange = e => {
    setAvatarUrlD(e.target.files[0]);
  };

  const handleAvatar = async e => {
    e.preventDefault();
    const data = new FormData();

    data.append('avatarUrlD', e.target.elements.avatar.files[0]);
  };
  // /////////

  // /////

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
          {name ? (
            <UserDataItem
              userIdD={_id}
              typeInput="name"
              nameInput="name"
              valueUser={name}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.nameRegexp}
            />
          ) : (
            <UserDataItem
              typeInput="name"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>Email:</UserInfoTitle>
          {email ? (
            <UserDataItem
              typeInput="email"
              nameInput="email"
              valueUser={email}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.email}
            />
          ) : (
            <UserDataItem
              typeInput="email"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>
        <UserInfoItem>
          <UserInfoTitle>Birthday:</UserInfoTitle>
          {birthday ? (
            <UserDataItem
              typeInput="date"
              nameInput="birthday"
              valueUser={birthday.split('-').reverse().join('.')}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              pattern={regExp.bdayRegexp}
              min="1930-01-01"
              max="2015-12-31"
            />
          ) : (
            <UserDataItem
              typeInput="date"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              pattern={regExp.bdayRegexp}
            />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>Phone:</UserInfoTitle>
          {phone ? (
            <UserDataItem
              typeInput="phone"
              nameInput="phone"
              valueUser={phone}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.phoneRegexpUser}
            />
          ) : (
            <UserDataItem
              typeInput="phone"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>

        <UserInfoItem>
          <UserInfoTitle>City:</UserInfoTitle>
          {address ? (
            <UserDataItem
              typeInput="text"
              nameInput="address"
              valueUser={address.split(',').splice(0, 1)}
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
              paramValid={regExp.address}
            />
          ) : (
            <UserDataItem
              typeInput="text"
              activeBtn={activeBtn}
              setActiveBtn={setActiveBtn}
            />
          )}
        </UserInfoItem>
      </UserInfoList>
    </>
  );
}
