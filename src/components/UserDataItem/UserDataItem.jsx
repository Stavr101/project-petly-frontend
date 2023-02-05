import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Input,
  UpdateBtn,
  InputWrapper,
  PensileBtn,
} from './UserDataItem.styled';
import { updateUserData } from '../../redux/users/operations';
import { selectUser } from 'redux/auth/selectors';

export default function UserDataItem({ typeInput, nameInput, valueUser }) {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(valueUser);

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(valueUser);
  const [activeBtn, setActiveBtn] = useState(true);

  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleSubmit = e => {
    setIsEditing(false);
    dispatch(updateUserData(editedValue));
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
          <UpdateBtn onClick={handleSubmit}></UpdateBtn>
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
