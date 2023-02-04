import React, { useEffect } from 'react';
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
// import UserDataItem from 'components/UserDataItem/UserDataItem';
import { Logout } from 'components/Logout/Logout';
import editAvatar from 'images/UserPage/editAvatar.svg';
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
  const dataUser = useSelector(getUserData);
  const { avatarURL } = dataUser;
  console.log(dataUser.avatarURL, 'avatar');
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
        <AvatarInfoWrapper>
          {/* avatarURL ? avatarImg : <Avatar c default photo></Avatar> */}
          <AvatarImg src={avatarURL} alt="avatar" />
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
        <UserDataList />

        {/* <UserInfoWrapper>
            <UserInfoList>
              <UserInfoItem>
                <UserInfoTitle>Name:</UserInfoTitle>
                <UserDataItem type="name" value={item.name} />
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
          </UserInfoWrapper> */}
        <Logout />
      </UserDataWrapper>
    </UserWrapper>
  );
}

// <UserInfoWrapper>
//   <UserInfoList>
//     <UserInfoItem>
//       <UserInfoTitle>Name:</UserInfoTitle>
//       <UserDataItem type="name" />
//     </UserInfoItem>
//     <UserInfoItem>
//       <UserInfoTitle>Email:</UserInfoTitle>
//       <UserDataItem type="email" />
//     </UserInfoItem>
//     <UserInfoItem>
//       <UserInfoTitle>Birthday:</UserInfoTitle>
//       <UserDataItem type="date" />
//     </UserInfoItem>

//     <UserInfoItem>
//       <UserInfoTitle>Phone:</UserInfoTitle>
//       <UserDataItem type="phone" />
//     </UserInfoItem>

//     <UserInfoItem>
//       <UserInfoTitle>City:</UserInfoTitle>
//       <UserDataItem type="text" />
//     </UserInfoItem>
//   </UserInfoList>
// </UserInfoWrapper>;
