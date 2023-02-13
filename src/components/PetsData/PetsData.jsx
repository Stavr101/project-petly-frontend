import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPetInfo } from 'redux/pets/operations';
import { getLoading, getError, getPets } from 'redux/pets/selectors';
import ModalAddsPetApp from 'components/ModalAddsPet/ModalAddsPetsApp';
import UserLoader from 'shared/userLoader/Loader';
import { useTranslation } from 'react-i18next';
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

export default function PetsData({ pets, setPets }) {
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const petsData = useSelector(getPets);
  const isPets = Boolean(petsData.length);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPetInfo());
  }, [dispatch]);

  const { t } = useTranslation();

  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>{t('user.pets')}</UserPetsTitle>
        <PetBtnWrapper>
          <AddPetTitleBtn>{t('notices.add')}</AddPetTitleBtn>
          <AddPetBtn onClick={() => setIsOpen(true)} />
        </PetBtnWrapper>
      </PetsTitleWrapper>
      {isOpen ? (
        <ModalAddsPetApp
          petsData={pets}
          setPets={setPets}
          onOpenModal={isOpen}
          onCloseModal={() => setIsOpen(false)}
        />
      ) : null}
      {isPets ? (
        <PetList />
      ) : (
        <NonPetWrapper>
          <p>{t('user.nopets')}</p>
        </NonPetWrapper>
      )}
      {isLoading && !error ? (
        <UserLoader />
      ) : (
        <PetsList dataPets={pets} setDataPets={setPets} />
      )}
    </PetsWrapper>
  );
}
