import { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import { Notify } from "notiflix/build/notiflix-notify-aio";
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
  BtnFormBack,
  EyePassword,
  Wrapper,
  BtnFormRegister,
} from "./RegisterForm.styled";
import authOperation from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import AuthContainer from "components/Container/AuthContainer/AuthContainer";
import Loader from "shared/loader/Loader";
import { useTranslation } from "react-i18next";

export default function RegisterForm() {
  const [currentPage, setCurrentPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function onHandleSubmit({ email, password, name, address, phone }) {
    if (!name || !address || !phone) {
      return;
    }
    setLoading(true);
    try {
      const res = await dispatch(
        authOperation.register({
          email,
          password,
          name,
          address,
          phone,
        })
      );
      if (res.payload === 409) {
        return Notify.failure("Email already exist");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function toggleConfirmShowPassword() {
    setConfirmShowPassword((prev) => !prev);
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function onNext() {
    setCurrentPage(true);
  }

  function prevPage() {
    setCurrentPage(false);
  }

  const { t } = useTranslation();

  return (
    <AuthContainer>
      {!loading ? (
        <FormWrapper>
          <FormTitle>{t("registration.registration")}</FormTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
              name: "",
              address: "",
              phone: "",
            }}
            validationSchema={
              !currentPage
                ? authValidate.RegisterSchemaFirstPage
                : authValidate.RegisterSchemaSecondPage
            }
            onSubmit={currentPage ? onHandleSubmit : onNext}
          >
            {({ handleChange, handleSubmit, values, handleBlur }) => (
              <>
                {!currentPage && (
                  <FormEl>
                    <Wrapper>
                      <InputField
                        autoFocus
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                        placeholder={t("registration.password")}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="password"
                        render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                      />
                      <EyePassword type="button" onClick={toggleShowPassword}>
                        {!showPassword ? <ImEye /> : <ImEyeBlocked />}
                      </EyePassword>
                    </Wrapper>
                    <Wrapper>
                      <InputField
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder={t("registration.confirm")}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                      />
                      <EyePassword
                        type="button"
                        onClick={toggleConfirmShowPassword}
                      >
                        {!showConfirmPassword ? <ImEye /> : <ImEyeBlocked />}
                      </EyePassword>
                    </Wrapper>
                    <BtnForm type="submit" onClick={handleSubmit}>
                      {t("registration.next")}
                    </BtnForm>
                  </FormEl>
                )}
                {currentPage && (
                  <FormEl>
                    <Wrapper>
                      <InputField
                        autoFocus
                        type="text"
                        name="name"
                        placeholder={t("registration.name")}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="name"
                        render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                      />
                    </Wrapper>
                    <Wrapper>
                      <InputField
                        name="address"
                        placeholder={t("registration.city")}
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="address"
                        render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                      />
                    </Wrapper>
                    <Wrapper>
                      <InputField
                        name="phone"
                        placeholder={t("registration.phone")}
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="phone"
                        render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                      />
                    </Wrapper>
                    <BtnFormRegister type="submit" onClick={onHandleSubmit}>
                      {t("registration.register")}
                    </BtnFormRegister>
                    <BtnFormBack type="button" onClick={prevPage}>
                      {t("registration.back")}
                    </BtnFormBack>
                  </FormEl>
                )}
              </>
            )}
          </Formik>
          <Text>
            {t("registration.have")}{" "}
            <LinkAuth to="/login">{t("registration.login")}</LinkAuth>
          </Text>
        </FormWrapper>
      ) : (
        <Loader />
      )}
    </AuthContainer>
  );
}
