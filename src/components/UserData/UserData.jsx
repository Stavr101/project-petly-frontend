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
  UserInfoList,
  UserInfoItem,
  UserInfoTitle,
} from './UserData.styled';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import { Logout } from 'components/Logout/Logout';
import editAvatar from 'images/UserPage/editAvatar.svg';
import { UserDatePicker } from 'helpers/datePicker/datePicker';

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
        <Logout />
      </UserDataWrapper>
    </UserWrapper>
  );
}
