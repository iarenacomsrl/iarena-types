import * as yup from "yup";
import {profileInfoFields} from "../enums/forms/profile-info";

export const profileInfoValidationScheme = {
  [profileInfoFields.full_name]: yup
    .string()
    .nullable()
    .required(),
};
