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
import { getUserData } from 'redux/users/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function UserDataItem({
  typeInput,
  nameInput,
  valueUser,
  activeBtn,
  setActiveBtn,
  paramValid,
}) {
  const user = useSelector(getUserData);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(valueUser);
  const [error, setError] = useState(null);

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
    if (valueUser === e.target.value) {
      setActiveBtn(true);
      setIsEditing(false);
      return;
    }

    const validInput = paramValid;

    if (nameInput === 'birthday') {
      setActiveBtn(true);
      setIsEditing(false);
      dispatch(
        updateUserData({
          [nameInput]: editedValue,
        })
      );
    }
    if (!validInput.test(editedValue)) {
      setError(`Invalid ${nameInput}`);
      Notify.warning(`Invalid ${nameInput}`);
    } else {
      setError(null);

      setActiveBtn(true);
      setIsEditing(false);
      dispatch(
        updateUserData({
          [nameInput]: editedValue,
        })
      );
    }
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
