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

export default function RegisterForm() {
  return (
    <FormWrapper>
      <FormTitle>Login</FormTitle>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={authValidate.LoginSchema}
        onSubmit={(values) => {
          console.log(values);
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
