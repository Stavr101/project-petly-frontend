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
} from "./LoginForm.styled";
import { LinkAuth } from "./RegisterForm.styled";
import authOperation from "redux/auth/operations";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
  const dispatch = useDispatch();

  async function onHandleSubmit(data) {
    await dispatch(authOperation.logIn(data));
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
