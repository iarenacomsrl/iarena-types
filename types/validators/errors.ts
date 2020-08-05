import {LocaleObject} from "yup";

const p = "VALIDATION_ERRORS";

export const errorKeys: LocaleObject = {
  string: {
    email: `${p}.email`,
  },
};

export const customErrorKeys = {
  recaptcha: `${p}.recaptcha`,
};
