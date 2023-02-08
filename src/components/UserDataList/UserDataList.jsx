import React, { useRef, useState } from 'react';
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
import { updateUserAvatar } from 'redux/users/operations';
import editAvatar from 'images/UserPage/editAvatar.svg';
import { regExp } from 'helpers/regExp/regExp';

export default function UserDataList() {
  const dataUser = useSelector(getUserData);
  const { _id, name, email, birthday, phone, address, avatarUrl } =
    dataUser.user;
  const [activeBtn, setActiveBtn] = useState(true);
  const updateBtn = useRef(null);
  const dispatch = useDispatch();

  const [ava, setAva] = useState(null);
  const onButtonClick = e => {
    e.preventDefault();
    updateBtn.current.click();
  };
  const handleChange = e => {
    e.preventDefault();
    const av = URL.createObjectURL(e.target.files[0]);
    const data = new FormData();
    data.append('userAvatar', e.target.files[0]);
    setAva(av);
    dispatch(updateUserAvatar(data));
  };

  return (
    <>
      <AvatarInfoWrapper>
        <form id="userAvatar" encType="multipart/form-data">
          {/* <SVG src={editAvatar} />
          Edit photo */}
          <InputEditPhoto
            type="file"
            name="userAvatar"
            accept=".png, .jpg, .jpeg"
            placeholder="Edit photo"
            onChange={handleChange}
            ref={updateBtn}
          />
          {avatarUrl ? (
            <AvatarImg src={avatarUrl.secure_url} alt="uploaded" />
          ) : (
            <AvatarImg src={ava} />
          )}
          <LabelEditPhoto type="button" onClick={onButtonClick}>
            <SVG src={editAvatar} />
            Edit photo
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
