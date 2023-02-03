import { ErrorMessage, Formik } from "formik";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { ImEye, ImEyeBlocked } from "react-icons/im";

import { authValidate } from "helpers/validationSchema/authValidate";
import {
  BtnForm,
  FormEl,
  FormTitle,
  FormWrapper,
  InputField,
  ErrorMsg,
  Text,
  LinkAuth,
  Wrapper,
  EyePassword,
} from "./LoginForm.styled";
import authOperation from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  async function onHandleSubmit(data) {
    try {
      const res = await dispatch(authOperation.logIn(data));
      if (res.payload === 401) {
        return Notify.failure("Must be authorization");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <FormWrapper>
      <FormTitle>Login</FormTitle>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={authValidate.LoginSchema}
        onSubmit={onHandleSubmit}
      >
        {({ errors, touched }) => (
          <FormEl>
            <Wrapper>
              <InputField name="email" type="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
              />
            </Wrapper>
            <Wrapper>
              <InputField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
              />
              <EyePassword type="button" onClick={toggleShowPassword}>
                {!showPassword ? <ImEye /> : <ImEyeBlocked />}
              </EyePassword>
            </Wrapper>
            <BtnForm type="submit">Login</BtnForm>
          </FormEl>
        )}
      </Formik>
      <Text>
        Already have an account? <LinkAuth to="/register">Register</LinkAuth>
      </Text>
    </FormWrapper>
  );
}
