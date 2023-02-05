import { avatarClasses } from '@mui/material';
import React, { useState } from 'react';
import {
  Input,
  UpdateBtn,
  InputWrapper,
  PensileBtn,
} from './UserDataItem.styled';

export default function UserDataItem({
  typeInput,
  nameInput,
  valueUser,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(valueUser);

  //   const handleEditButtonClick = typeInput => {
  //     setActiveInput(typeInput);
  //   };

  //   const handleSaveButtonClick = () => {
  //     setActiveInput(null);
  //     // здесь вы можете сохранить данные, используя любые функции, необходимые для этого
  //   };

  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(true);
    // setActiveInput(true);
    // handleEditButtonClick();
  };

  const handleSave = e => {
    setIsEditing(false);
    // handleSaveButtonClick();
    // setActiveInput(false);
    // onEdit(editedValue);
  };

  return (
    <InputWrapper>
      {isEditing ? (
        <>
          <Input
            type={typeInput}
            name={nameInput}
            value={editedValue}
            onChange={e => setEditedValue(e.target.value)}
          />
          <UpdateBtn onClick={handleSave}></UpdateBtn>
        </>
      ) : (
        <>
          <Input type={typeInput} name={nameInput} value={valueUser} disabled />
          {/* <PensileBtn onClick={handleEdit}></PensileBtn> */}
          <PensileBtn onClick={handleEdit}></PensileBtn>
        </>
      )}
    </InputWrapper>
  );
}
