import * as yup from "yup";

export const mongoInstanceValidationScheme = {
  _id: yup
    .string()
    .length(24)
    .required(),
};
