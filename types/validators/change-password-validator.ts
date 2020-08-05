import * as yup from "yup";
import {changePasswordFields} from "../enums/forms/change-password";

export const changePasswordValidationScheme = {
  [changePasswordFields.oldPassword]: yup
    .string()
    .nullable()
    .required(),
  [changePasswordFields.newPassword]: yup
    .string()
    .nullable()
    .required(),
};
