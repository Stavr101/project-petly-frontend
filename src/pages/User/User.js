import React from 'react';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { UserPageWrapper } from './User.styled';

export default function User() {
  return (
    <UserPageWrapper>
      <UserData />
      <PetsData />
    </UserPageWrapper>
  );
}
