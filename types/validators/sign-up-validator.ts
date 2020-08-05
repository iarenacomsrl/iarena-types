import * as yup from "yup";
import {signUpFields} from "../enums/forms/sign-up";

export const signUpValidationScheme = {
  [signUpFields.username]: yup
    .string()
    .nullable()
    .min(3)
    .required(),
  [signUpFields.email]: yup
    .string()
    .nullable()
    .email()
    .required(),
  [signUpFields.password]: yup
    .string()
    .nullable()
    // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{7,}$/,"La Password deve contenere almeno 7 caratteri, avere una maiuscola e un numero.")
    .min(7)
    .required(),
  [signUpFields.recaptcha]: yup
    .string()
    .nullable()
    .required(),
};
