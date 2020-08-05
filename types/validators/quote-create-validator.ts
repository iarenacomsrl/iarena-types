import * as yup from "yup";
import {quoteFields} from "../enums/forms/quote";
import {companyFields} from "../enums/forms/company";

export const quoteCreateValidationScheme = {
  [quoteFields.dealId]: yup.string().required(),
  [quoteFields.price]: yup
    .number()
    .nullable()
    .required(),
  [quoteFields.commissionPercentage]: yup
    .number()
    .nullable()
    .required(),
  [quoteFields.company]: yup
    .object()
    .shape({
      [companyFields.id]: yup.number().required(),
      [companyFields.name]: yup.string().required(),
    })
    .required(),
  [quoteFields.expireDate]: yup
    .date()
    .nullable()
    .required(),
  [quoteFields.tags]: yup.array().nullable(),
};
