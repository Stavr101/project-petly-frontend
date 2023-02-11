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
} from './PetsData.styled';

export default function PetsData() {
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const [isOpen, setIsOpen] = useState(false);
  const [pets, setPets] = useState([]);
  const petA = useSelector(getPets);
  // console.log(pets);
  const dispatch = useDispatch();

  useEffect(() => {
    setPets(petA);
  });

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
      {isLoading && !error ? (
        <UserLoader />
      ) : (
        <PetsList array={pets} setArray={setPets} />
      )}
    </PetsWrapper>
  );
}
