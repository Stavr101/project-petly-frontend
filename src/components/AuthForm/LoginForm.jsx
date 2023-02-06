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
import AuthContainer from "components/Container/AuthContainer/AuthContainer";
import { MainPageContainerBlock } from "components/Container/MainPageContainer/MainPageContainer.styled";
import Loader from "shared/loader/Loader";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function onHandleSubmit(data) {
    setLoading(true);
    try {
      const res = await dispatch(authOperation.logIn(data));
      if (res.payload === 401) {
        return Notify.failure("Must be authorization");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <AuthContainer>
      <MainPageContainerBlock>
        {!loading ? (
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
              {({ handleChange, values }) => (
                <FormEl>
                  <Wrapper>
                    <InputField
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
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
                      value={values.password}
                      onChange={handleChange}
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
              Don't have an account?{" "}
              <LinkAuth to="/register">Register</LinkAuth>
            </Text>
          </FormWrapper>
        ) : (
          <Loader />
        )}
      </MainPageContainerBlock>
    </AuthContainer>
  );
}
