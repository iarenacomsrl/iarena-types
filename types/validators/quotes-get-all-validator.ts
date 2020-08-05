import * as yup from "yup";

export const quotesGetAllValidationScheme = {
  dealId: yup
    .string()
    .length(24)
    .required(),
};
