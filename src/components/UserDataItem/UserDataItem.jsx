import { Hidden } from '@mui/material';
import { useState } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
// import { getUserData } from 'redux/user/selectors';
// import { updateUserData } from 'redux/user/operations';
import { Input, UpdateBtn, UserInfoItem } from './UserDataItem.styled';

export default function UserDataItem(props) {
  const [disabled, setDisabled] = useState(true);
  const [display, setDisplay] = useState(false);

  function handleChangeInput() {
    setDisabled(!disabled);
  }

  return (
    <>
      <Input
        type={props.type}
        name="city"
        // value={value}
        onChange={event => console.log(event.target.value)}
        disabled={disabled}
      />
      <UpdateBtn type="submit" onClick={handleChangeInput}></UpdateBtn>
      {/* <UpdateBtn type="submit"></UpdateBtn> */}
    </>
  );
}
