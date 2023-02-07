import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Input,
  UpdateBtn,
  InputWrapper,
  PensileBtn,
  DeactiveBtn,
} from './UserDataItem.styled';
import { updateUserData } from '../../redux/users/operations';
import { selectUser } from 'redux/auth/selectors';
import { useParams } from 'react-router-dom';
import { getUserData } from 'redux/users/selectors';

export default function UserDataItem({
  typeInput,
  nameInput,
  valueUser,
  activeBtn,
  setActiveBtn,
}) {
  const user = useSelector(getUserData);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(valueUser);

  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(true);
    setActiveBtn(false);
  };

  const handleChange = e => {
    setEditedValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setActiveBtn(true);
    setIsEditing(false);
    dispatch(
      updateUserData({
        [nameInput]: editedValue,
      })
    );
  };

  return (
    <InputWrapper>
      {isEditing ? (
        <>
          <Input
            type={typeInput}
            name={nameInput}
            value={editedValue}
            onChange={handleChange}
          />
          <UpdateBtn onClick={handleSubmit}></UpdateBtn>
        </>
      ) : (
        <>
          <Input name={nameInput} value={valueUser} disabled />

          {activeBtn ? (
            <PensileBtn onClick={handleEdit}></PensileBtn>
          ) : (
            <DeactiveBtn disabled></DeactiveBtn>
          )}
        </>
      )}
    </InputWrapper>
  );
}
