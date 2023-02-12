import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

import { ModalContainer, ModalTitle, ButtonOff } from "./ModalAddsPet.styled";
import Forma from "./ModalAddsPet";

export default function ModalAddsPetApp({ onOpenModal, onCloseModal }) {
  const [pets, setPets] = useState(
    () => JSON.parse(window.localStorage.getItem("pets")) ?? []
  );

  //Запис в локал сторидж
  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  // Підтвердження збереження тваринки!
  const submitHandle = (data) => {
    //Заборони користувачеві можливість додавати тваринок, імена яких вже присутні у переліку.
    const sameName = pets.find(
      (element) => element.name.toLowerCase() === data.name.toLowerCase()
    );
    // При спробі виконати таку дію виведи alert із попередженням.
    if (sameName) return alert(sameName.name + " is already in pets list!");

    //Присвоювання ID та запис у !
    data.id = nanoid();
    setPets((pets) => [data, ...pets]);
  };

  const { t } = useTranslation();

  return (
    <>
      <Modal open={onOpenModal} onClose={onCloseModal}>
        <ModalContainer>
          <ButtonOff variant="contained" onClick={onCloseModal}></ButtonOff>
          <ModalTitle>{t("notices.add")}</ModalTitle>
          <Forma handleClose={onCloseModal} onSubmit={submitHandle} />
        </ModalContainer>
      </Modal>
    </>
  );
}

// const [filter, setFilter] = useState('');
// Пошук необхідної тваринки
//   const filterChange = event => {
//     event.preventDefault();
//     setFilter(event.currentTarget.value);
//   };
//       const normalizeFilter = filter.toLowerCase();
//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
// Видалення раніше збережених тваринок
//   const onDelete = id => {
//     setPets(pets => pets.filter(pet => pet.id !== id));
//   };
