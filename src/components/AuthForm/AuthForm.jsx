import React, { useState } from "react";
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
} from "./AuthForm.styled";

export default function AuthForm() {
  const [currentPage, setCurrentPage] = useState(false);
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
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
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
          <Text>Already have an account? Login</Text>
        </FormWrapper>
      )}
      {currentPage && (
        <FormWrapper>
          <FormTitle>Registration</FormTitle>
          <Formik
            initialValues={{
              name: "",
              location: "",
              phone: "",
            }}
            validationSchema={authValidate.RegisterSchemaSecondPage}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <FormEl>
                <InputField name="name" placeholder="Name" />
                <ErrorMessage
                  name="name"
                  render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                />
                <InputField name="location" placeholder="Location" />
                <ErrorMessage
                  name="location"
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
          <Text>Already have an account? Login</Text>
        </FormWrapper>
      )}
    </>
  );
}
