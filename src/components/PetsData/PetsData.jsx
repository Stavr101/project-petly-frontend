import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPetInfo } from 'redux/pets/operations';
import { getLoading, getError, getPets } from 'redux/pets/selectors';
import ModalAddsPetApp from 'components/ModalAddsPet/ModalAddsPetsApp';
import UserLoader from 'shared/userLoader/Loader';
import PetsList from 'components/PetsList/PetsList';
import {
  PetsWrapper,
  PetsTitleWrapper,
  UserPetsTitle,
  PetBtnWrapper,
  AddPetTitleBtn,
  AddPetBtn,
  NonPetWrapper,
} from './PetsData.styled';
import { PetList } from 'components/PetsList/PetsList.styled';

export default function PetsData() {
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const petsData = useSelector(getPets);
  const isPets = Boolean(petsData.length);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPetInfo());
  }, [dispatch]);

  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>My pets:</UserPetsTitle>
        <PetBtnWrapper>
          <AddPetTitleBtn>Add pet</AddPetTitleBtn>
          <AddPetBtn onClick={() => setIsOpen(true)} />
        </PetBtnWrapper>
      </PetsTitleWrapper>
      {isOpen ? (
        <ModalAddsPetApp
          onOpenModal={isOpen}
          onCloseModal={() => setIsOpen(false)}
        />
      ) : null}
      {isPets ? (
        <PetList />
      ) : (
        <NonPetWrapper>
          <p>
            You don't have any animals added yet. If you want to add your pet,
            click button "Add pets"
          </p>
        </NonPetWrapper>
      )}
      {isLoading && !error ? <UserLoader /> : <PetsList dataPets={petsData} />}
    </PetsWrapper>
  );
}
