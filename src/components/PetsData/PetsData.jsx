import React from 'react';
import PetsList from 'components/PetsList/PetsList';
import {
  PetsWrapper,
  PetsTitleWrapper,
  UserPetsTitle,
  PetBtnWrapper,
  AddPetTitleBtn,
  AddPetBtn,
} from './PetsData.styled';
import { useDispatch } from 'react-redux';

export default function PetsData() {
  return (
    <PetsWrapper>
      {/* You haven't added your pets - если нет животных*/}
      <PetsTitleWrapper>
        <UserPetsTitle>My pets:</UserPetsTitle>
        <PetBtnWrapper>
          <AddPetTitleBtn>Add pet</AddPetTitleBtn>
          <AddPetBtn type="button"></AddPetBtn>
        </PetBtnWrapper>
      </PetsTitleWrapper>
      <PetsList />
    </PetsWrapper>
  );
}
