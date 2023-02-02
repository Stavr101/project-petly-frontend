import * as Yup from "yup";
import { regExp } from "helpers/regExp/regExp";

const RegisterSchemaFirstPage = Yup.object().shape({
  email: Yup.string()
    .matches(regExp.email, "Invalid email")
    .required("Email is a required"),
  password: Yup.string()
    .min(7, "Min length 7 symbols")
    .max(32, "Too Long!")
    .matches(regExp.pwd, "Spaces should not be")
    .required("Password a required field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password a required"),
});

const RegisterSchemaSecondPage = Yup.object().shape({
  name: Yup.string().required("Name is a required"),
  address: Yup.string()
    .matches(regExp.location, "For example: Bucha, Kyiv")
    .required("Address a required field"),
  phone: Yup.string()
    .required("Phone is a required")
    .matches(regExp.mobile, "Example: +380111111111"),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is a required"),
  password: Yup.string()
    .min(7, "Min length 7 symbols")
    .max(32, "Too Long!")
    .matches(regExp.pwd, "Spaces should not be")
    .required("Password a required field"),
});

export const authValidate = {
  RegisterSchemaFirstPage,
  RegisterSchemaSecondPage,
  LoginSchema,
};
