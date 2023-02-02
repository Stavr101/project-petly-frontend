import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPetInfo } from 'redux/pets/operations';
import { getLoading, getError } from 'redux/pets/selectors';
import ModalAddsPet from 'components/ModalAddsPet/ModalAddsPet';

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
  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>My pets:</UserPetsTitle>
        <PetBtnWrapper>
          <AddPetTitleBtn>Add pet</AddPetTitleBtn>
          {/* <AddPetBtn type="button"></AddPetBtn> */}
          <AddPetBtn onClick={() => setIsOpen(true)} />
          {isOpen ? (
            <ModalAddsPet closeModalPets={() => setIsOpen(false)} />
          ) : null}
          {/* end */}
        </PetBtnWrapper>
      </PetsTitleWrapper>
      {isLoading && !error ? <Loader /> : <PetsList />}
    </PetsWrapper>
  );
}

// import React, { useState } from "react";
// import { Popup } from "./components/Popup/Popup";
// const App = () => {
//   const [open, setOpen] = useState(false);
//   return (
//    <div>
//     <button onClick={() => setOpen(true)}> Click to Open       Popup</button>
// {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
//    </div>
//  );
// };
// export default App;
