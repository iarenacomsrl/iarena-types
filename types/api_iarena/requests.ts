import {ICompany} from "./dtos/dtos";
import {signInFields} from "../enums/forms/sign-in";
import {signUpFields} from "../enums/forms/sign-up";
import {changePasswordFields} from "../enums/forms/change-password";
import {ISection, IB2BPartnerInputField} from "./dtos/input-fields";
import {UserRoles} from "./dtos/user";
import {sqlId} from "../types";

export interface IForgotPasswordReq {
  [signInFields.email]: string;
}

export interface IChangePasswordReq {
  [changePasswordFields.oldPassword]: string;
  [changePasswordFields.newPassword]: string;
}

export interface ISignInReq {
  [signInFields.email]: string;
  [signInFields.password]: string;
  [signInFields.recaptcha]?: string;
}

export interface ISignUpReq extends ISignInReq {
  [signUpFields.username]: string;
}

export interface ICompaniesReq {
  q: string;
}

export interface IFieldsReq {
  id_interest_area: number;
  status: number;
  version: number;
  sections: ISection[];
}

export interface IUserQuestionsReq {
  id_category: number;
  status: number;
  version: number;
}

export interface IUsersPhotoUploadReq {
  image: string;
}

export interface ISignUpClientReq extends ISignUpReq {
  firstName: string;

  secondName: string;

  /**
   * The RUICode is a unique code to identify an insurance intermediaries,
   * consisting of a letter and 9 numbers for Italy (Ex. A798563187,B944238647,E786613671),
   * different composition in other country
   */
  RUICode: number;

  location: string;

  companies: ICompany[];

  photo: string;

  type: UserRoles;
}

export interface ISendEmailReq {
  from: string;
  to: string;
  // type: string;
  subject: string;
}

export interface IB2BQuestionsReq {
  /**
   * Id of the integrated b2b partner
   */
  partnerId: sqlId;

  /**
   * Id of the product that the partner is offering
   */
  categoryId: sqlId;
}

export interface IB2BAnswerQuestionsReq {
  sectionItems: IB2BPartnerInputField[];
}
