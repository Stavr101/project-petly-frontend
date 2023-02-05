import React from 'react';
import {
  UserWrapper,
  UserDataWrapper,
  UserDataTitle,
  AvatarInfoWrapper,
  AvatarImg,
  LabelEditPhoto,
  InputEditPhoto,
  SVG,
  UserInfoWrapper,
  UserInfoList,
  UserInfoItem,
  UserInfoTitle,
} from './UserData.styled';
import UserDataItem from 'components/UserDataItem/UserDataItem-ver 05.02-15:40';
import { Logout } from 'components/Logout/Logout';
import editAvatar from 'images/UserPage/editAvatar.svg';

export default function UserData() {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('send data', e.target.value);
  //   // setDisabled(true);
  // };
  return (
    <UserWrapper>
      <UserDataTitle>My information:</UserDataTitle>
      <UserDataWrapper>
        <AvatarInfoWrapper>
          {/* avatarURL ? avatarImg : <Avatar c default photo></Avatar> */}
          <AvatarImg
            alt="avatar"
            src="https://res.cloudinary.com/dzwpa63px/image/upload/v1675012570/cld-sample.jpg"
          />
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
        <UserInfoWrapper>
          <UserInfoList>
            <UserInfoItem>
              <UserInfoTitle>Name:</UserInfoTitle>
              <UserDataItem type="name" />
            </UserInfoItem>
            <UserInfoItem>
              <UserInfoTitle>Email:</UserInfoTitle>
              <UserDataItem type="email" />
            </UserInfoItem>
            <UserInfoItem>
              <UserInfoTitle>Birthday:</UserInfoTitle>
              <UserDataItem type="date" />
            </UserInfoItem>

            <UserInfoItem>
              <UserInfoTitle>Phone:</UserInfoTitle>
              <UserDataItem type="phone" />
            </UserInfoItem>

            <UserInfoItem>
              <UserInfoTitle>City:</UserInfoTitle>
              <UserDataItem type="text" />
            </UserInfoItem>
          </UserInfoList>
        </UserInfoWrapper>
        <Logout />
      </UserDataWrapper>
    </UserWrapper>
  );
}
