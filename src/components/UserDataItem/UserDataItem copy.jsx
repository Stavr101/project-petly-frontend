import { useState } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
// import { getUserData } from 'redux/user/selectors';
// import { updateUserData } from 'redux/user/operations';
import {
  Input,
  UpdateBtn,
  InputWrapper,
  UpdateBtnDeactive,
} from './UserDataItem.styled';

export default function UserDataItem(props) {
  const [disabled, setDisabled] = useState(true);
  // const []
  // const [display, setDisplay] = useState(false);

  function handleChangeInput(e) {
    e.preventDefault();
    setDisabled(!disabled);
  }

  return (
    <InputWrapper>
      <Input
        type={props.type}
        // name="city"
        value={props.valueUser}
        onChange={event => console.log(event.target.value)}
        disabled={disabled}
        readOnly={disabled ? false : true}
      />
      {disabled && (
        <UpdateBtnDeactive
          type="submit"
          onClick={handleChangeInput}
        ></UpdateBtnDeactive>
      )}
      {!disabled && <UpdateBtn onClick={handleChangeInput}></UpdateBtn>}
      {/* <UpdateBtn type="submit" onClick={handleChangeInput}></UpdateBtn> */}
      {/* <UpdateBtn type="submit"></UpdateBtn> */}
    </InputWrapper>
  );
}

// /////////////
// import { useState } from 'react';

// // import { useSelector, useDispatch } from 'react-redux';
// // import { getUserData } from 'redux/user/selectors';
// // import { updateUserData } from 'redux/user/operations';
// import {
//   Input,
//   // UpdateBtn,
//   InputWrapper,
//   // UpdateBtnDeactive,
//   Btn1,
//   Btn2,
//   Btn3,
// } from './UserDataItem.styled';

// export default function UserDataItem(props) {
//   const [activeInput, setActiveInput] = useState(false);
//   const [activeBtn, setActiveBtn] = useState(true);
//   // const []
//   // const [display, setDisplay] = useState(false);

//   // function handleChangeBtn(e) {
//   //   e.preventDefault();
//   //   setActiveInput(false);
//   // }

//   // function handleChangeInput(e) {
//   //   e.preventDefault();
//   //   setActiveInput(true);
//   //   setActiveBtn(false);
//   // }

//   // function handleSubmitbtn(e) {
//   //   e.preventDefault();
//   //   if (props.value === e.target.value) {
//   //     setActiveInput(false);
//   //     setActiveBtn(true);
//   //     return;
//   //   }
//   //   console.log(e.target.value);
//   //   setActiveInput(false);
//   //   setActiveBtn(true);
//   // }
//   // function btnNon(e) {
//   //   e.preventDefault();
//   //   if (props.value === e.target.value) {
//   //     setActiveInput(true);
//   //     setActiveBtn(false);
//   //     return;
//   //   }
//   // }
//   function clickBtn(e) {
//     e.preventDefault();
//     setActiveInput(true);
//   }

//   return (
//     <InputWrapper>
//       <Input
//         type={props.type}
//         // name="city"
//         value={props.valueUser}
//         onChange={event => console.log(event.target.value)}
//         disabled={!activeInput}
//         readOnly={activeInput ? true : false}
//       />
//       {!activeInput ? (
//         <Btn2 type="button" onClick={clickBtn}></Btn2>
//       ) : (
//         <Btn1 type="button"></Btn1>
//       )}
//       {/* {!activeInput ? (
//         <Btn3 type="button"></Btn3>
//       ) : (
//         <Btn2 type="button"> </Btn2>
//       )} */}
//       {/* <Btn3></Btn3> */}

//       {/* {activeInput && (
//         <UpdateBtn
//           type="submit"
//           disabled={activeBtn}
//           // onClick={btnNon}
//         ></UpdateBtn>
//       )}
//       {!activeInput && (
//         <UpdateBtn
//           type="button"
//           disabled={!activeBtn}
//           // onClick={handleSubmitbtn}
//         ></UpdateBtn>
//       )} */}
//       {/* <UpdateBtn type="submit" onClick={handleChangeInput}></UpdateBtn> */}
//       {/* <UpdateBtn type="submit" disabled={activeBtn}></UpdateBtn> */}
//     </InputWrapper>
//   );
// }
