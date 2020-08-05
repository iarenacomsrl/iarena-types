import * as yup from "yup";
import {signInFields} from "../enums/forms/sign-in";

export const signInValidationScheme = {
  [signInFields.email]: yup
    .string()
    .email() // TODO: Alex, check
    .nullable()
    .required(),
  [signInFields.password]: yup
    .string()
    .nullable()
    .required(),
  [signInFields.recaptcha]: yup
    .string()
    .nullable()
    .required(),
};
