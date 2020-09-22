import {ICompany, IPartner, IProduct} from "./dtos/dtos";
import {IField} from "./dtos/input-fields";
import {IDealInstance} from "../api_deals/dtos/deal";
import {ICategoryFlat} from "./dtos/category";
import {IUser} from "./dtos/user";
import {ICoverHolderQuoteData} from "../api_deals/dtos/partners/cover-holder";
import {Customer} from "./dtos/customer";

/**
 * Basic common response of all responses
 */
export interface ICommonRes {
  ok: boolean;
  errors?: string[];
}

/**
 * Common response which has count property representing total amount of items
 */
export interface ICountRes {
  count: number;
}

export interface ISignInRes extends ICommonRes {
  data?: IUser;
}

export interface ISignUpRes extends ISignInRes {
}

export interface IValidateTokenRes extends ICommonRes {
  data?: {
    user: IUser;
  };
}

export interface ICompaniesRes extends ICommonRes, ICountRes {
  data?: ICompany[];
}

export interface IB2BQuestionFieldsRes extends ICommonRes {
  data?: IField[];
}

export interface Ib2bPartnersRes extends ICommonRes {
  data?: IPartner[];
}

export interface IB2BProductsRes extends ICommonRes {
  data?: IProduct[];
}

export interface ICategoriesRes extends ICommonRes, ICountRes {
  data?: ICategoryFlat[];
}

export interface IUsersInfoRes extends ICommonRes, ICountRes {
  data?: IUser[];
}

export interface IBaseFieldsRes extends ICommonRes {
  data: IField[];
}

export interface IOldDealsGetAllRes extends ICountRes, ICommonRes {
  data?: IDealInstance[];
}

export interface IGetAutoQuoteRes extends ICommonRes, ICoverHolderQuoteData {
}

export interface IAttachmentRes {
  json_structure: string
}

export interface CreateCustomerResponse {
  customer: Customer;
}
