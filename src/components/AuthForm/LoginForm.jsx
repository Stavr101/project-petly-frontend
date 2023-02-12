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
import Loader from "shared/loader/Loader";
import { useTranslation } from "react-i18next";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function onHandleSubmit(data) {
    setLoading(true);
    try {
      const res = await dispatch(authOperation.logIn(data));
      if (res.payload === 401) {
        return Notify.failure(t("notification.wrongLogin"));
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

  const { t } = useTranslation();

  return (
    <AuthContainer>
      {!loading ? (
        <FormWrapper>
          <FormTitle>{t("login.login")}</FormTitle>
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
                    autoFocus
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
                    placeholder={t("login.password")}
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
                <BtnForm type="submit">{t("login.login")}</BtnForm>
              </FormEl>
            )}
          </Formik>
          <Text>
            {t("login.noacc")}{" "}
            <LinkAuth to="/register">{t("login.register")}</LinkAuth>
          </Text>
        </FormWrapper>
      ) : (
        <Loader />
      )}
    </AuthContainer>
  );
}
