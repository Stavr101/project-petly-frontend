import { useState } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
// import { getUserData } from 'redux/user/selectors';
// import { updateUserData } from 'redux/user/operations';
import { Input, UpdateBtn, InputWrapper } from './UserDataItem.styled';
import { updateUserData } from 'redux/users/operations';
import { useDispatch } from 'react-redux';
import { getUserData } from 'redux/users/selectors';

export default function UserDataItem(props) {
  const [inputValue, setInputValue] = useState(props.valueUser);
  const [inputName, setInputName] = useState(props.nameInput);

  const [disabled, setDisabled] = useState(true);

  const [updateInput, setUpdateInput] = useState(props.valueUser);
  const dispatch = useDispatch();
  // const []
  // const [display, setDisplay] = useState(false);

  function handleChangeInput(e) {
    e.preventDefault();
    setInputValue(e.target.value);
    setInputName(e.target.name);
  }
  function handleSubmitInput(e) {
    e.preventDefault();
    // dispatch(updateUserData({ inputName: inputValue }));
    // const action = updateUserData(updateInput);
    // dispatch(action);

    setDisabled(disabled);
  }

  return (
    <InputWrapper>
      <Input
        type={props.type}
        name={inputName}
        value={inputValue}
        onChange={handleChangeInput}
        disabled={!disabled}
        // readOnly={disabled ? false : true}
      />
      {/* {disabled && (
        <UpdateBtnDeactive
          type="submit"
          onClick={handleChangeInput}
        ></UpdateBtnDeactive>
      )} */}
      {/* {disabled && <UpdateBtn onClick={handleChangeInput}></UpdateBtn>} */}
      <UpdateBtn type="submit" onClick={handleSubmitInput}></UpdateBtn>
      {/* <UpdateBtn type="submit"></UpdateBtn> */}
    </InputWrapper>
  );
}
