import * as Yup from "yup";
import { regExp } from "helpers/regExp/regExp";
import i18n from "i18next";

const RegisterSchemaFirstPage = Yup.object().shape({
  email: Yup.string()
    .matches(regExp.email, i18n.t('validation.invalidEmail'))
    .required(i18n.t('validation.requiredEmail')),
  password: Yup.string()
    .min(7, i18n.t('validation.passMin'))
    .max(32, i18n.t('validation.passMax'))
    .matches(regExp.pwd, i18n.t('validation.noSpaces'))
    .required(i18n.t('validation.requiredPass')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], i18n.t('validation.passMatch'))
    .required(i18n.t('validation.requiredPassConfirm')),
});

const RegisterSchemaSecondPage = Yup.object().shape({
  name: Yup.string().required(i18n.t('validation.requiredName')),
  address: Yup.string()
    .matches(regExp.location, i18n.t('validation.addressExample'))
    .required(i18n.t('validation.requiredAddress')),
  phone: Yup.string()
    .required(i18n.t('validation.requiredPhone'))
    .matches(regExp.mobile, i18n.t('validation.phoneExample')),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(regExp.email, i18n.t('validation.invalidEmail'))
    .required(i18n.t('validation.requiredEmail')),
  password: Yup.string()
    .min(7, i18n.t('validation.passMin'))
    .max(32, i18n.t('validation.passMax'))
    .matches(regExp.pwd, i18n.t('validation.noSpaces'))
    .required(i18n.t('validation.requiredPass')),
});

export const authValidate = {
  RegisterSchemaFirstPage,
  RegisterSchemaSecondPage,
  LoginSchema,
};
