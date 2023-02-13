import React, { useState } from 'react';
import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import { UserPageWrapper } from './User.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from 'redux/users/selectors';
import { getPets } from 'redux/pets/selectors';
import { getPetInfo } from 'redux/pets/operations';

export default function User() {
  const user = useSelector(getUserData);
  const pets = useSelector(getPets);

  return (
    <UserPageWrapper>
      <UserData user={user} />
      <PetsData pets={pets} />
    </UserPageWrapper>
  );
}
