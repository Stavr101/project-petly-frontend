import * as Yup from "yup";
import { regExp } from "helpers/regExp/regExp";

const RegisterSchemaFirstPage = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is a required"),
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
  location: Yup.string()
    .matches(regExp.location, "только город и регион")
    .required("Location a required field"),
  phone: Yup.string().required("Phone is a required"),
});

export const authValidate = {
  RegisterSchemaFirstPage,
  RegisterSchemaSecondPage,
};