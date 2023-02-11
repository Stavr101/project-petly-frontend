import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPetInfo } from 'redux/pets/operations';
import { getLoading, getError } from 'redux/pets/selectors';
import ModalAddsPetApp from 'components/ModalAddsPet/ModalAddsPetsApp';
import { useTranslation } from 'react-i18next';
import PetsList from 'components/PetsList/PetsList';
import {
  PetsWrapper,
  PetsTitleWrapper,
  UserPetsTitle,
  PetBtnWrapper,
  AddPetTitleBtn,
  AddPetBtn,
} from './PetsData.styled';
import Loader from 'shared/loader/Loader';

export default function PetsData() {
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPetInfo());
  }, [dispatch]);

  const { t } = useTranslation();

  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>{t("user.pets")}</UserPetsTitle>
        <PetBtnWrapper>
          <AddPetTitleBtn>{t("notices.add")}</AddPetTitleBtn>
          <AddPetBtn onClick={() => setIsOpen(true)} />
        </PetBtnWrapper>
      </PetsTitleWrapper>
      {isOpen ? (
        <ModalAddsPetApp
          onOpenModal={isOpen}
          onCloseModal={() => setIsOpen(false)}
        />
      ) : null}
      {isLoading && !error ? <Loader /> : <PetsList />}
    </PetsWrapper>
  );
}
