import { useState } from "react";
import { ErrorMessage, Formik } from "formik";
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
} from "./RegisterForm.styled";
import authOperation from "redux/auth/operations";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
  const [currentPage, setCurrentPage] = useState(false);
  const [formData, setFormData] = useState(null);
  const dispatch = useDispatch();
  console.log(formData);

  async function onHandleSubmit(data) {}

  return (
    <>
      {!currentPage && (
        <FormWrapper>
          <FormTitle>Registration</FormTitle>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={authValidate.RegisterSchemaFirstPage}
            onSubmit={({ email, password }) => {
              setFormData({ email, password });
              setCurrentPage(true);
            }}
          >
            {({ errors, touched }) => (
              <FormEl>
                <InputField name="email" type="email" placeholder="Email" />
                <ErrorMessage
                  name="email"
                  render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                />
                <InputField name="password" placeholder="Password" />
                <ErrorMessage
                  name="password"
                  render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                />
                <InputField
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                />
                <BtnForm type="submit">Next</BtnForm>
              </FormEl>
            )}
          </Formik>
          <Text>
            Already have an account? <LinkAuth to="/login">Login</LinkAuth>
          </Text>
        </FormWrapper>
      )}
      {currentPage && (
        <FormWrapper>
          <FormTitle>Registration</FormTitle>
          <Formik
            initialValues={{
              name: "",
              address: "",
              phone: "",
            }}
            validationSchema={authValidate.RegisterSchemaSecondPage}
            onSubmit={async (values) => {
              setFormData({ ...formData, ...values });
              await dispatch(
                authOperation.register({ ...formData, ...values })
              );
            }}
          >
            {({ errors, touched }) => (
              <FormEl>
                <InputField name="name" placeholder="Name" />
                <ErrorMessage
                  name="name"
                  render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                />
                <InputField name="address" placeholder="address" />
                <ErrorMessage
                  name="address"
                  render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                />
                <InputField name="phone" placeholder="Phone" />
                <ErrorMessage
                  name="phone"
                  render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                />
                <BtnForm type="submit">Register</BtnForm>
              </FormEl>
            )}
          </Formik>
          <Text>
            Already have an account? <LinkAuth to="/login">Login</LinkAuth>
          </Text>
        </FormWrapper>
      )}
    </>
  );
}
