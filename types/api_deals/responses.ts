import {IAggregationByCategory, IAggregationByUser, IDealInstance} from "./dtos/deal";
import {IQuoteInstance} from "./dtos/quote";
import {INotificationInstance} from "./dtos/notification";
import {ILabelFieldInstance, IUserDefinedFieldInstance} from "./dtos/user-defined-field";
import {IB2BPartnerInputField} from "../api_iarena/dtos/input-fields";

/**
 * Basic common response of all responses
 */
export interface ICommonRes {
  ok: boolean;
  errors?: string[] | null;
}

/**
 * Common response which has count property representing total amount of items
 */
export interface ICountRes {
  count?: number;
}

export interface IDealsRes extends ICountRes, ICommonRes {
  data?: IDealInstance[];
}

export interface IDealRes extends ICommonRes {
  data?: IDealInstance;
}

export interface IDealsAddUserFields extends ICommonRes {
  data?: IUserDefinedFieldInstance[];
}

export interface IDealsCreateRes extends ICommonRes {
  data?: IDealInstance;
}

/**
 * Return aggregated, category-based data about deals
 */
export interface IDealsAggregateByCategoriesRes extends ICommonRes {
  data?: IAggregationByCategory[];
}

/**
 * Return platform users, who have created at least one deal
 */
export interface IDealsAggregateByUsersRes extends ICommonRes {
  data?: IAggregationByUser[];
}

export interface IUserDefinedFieldsRes extends ICountRes, ICommonRes {
  data?: IUserDefinedFieldInstance[];
}

export interface ILabelsRes extends ICountRes, ICommonRes {
  data?: ILabelFieldInstance[];
}

export interface IUserDefinedFieldRes extends ICommonRes {
  data?: IUserDefinedFieldInstance;
}

export interface IFeatureFieldsRes extends ICountRes, ICommonRes {
  data?: IB2BPartnerInputField[];
}

export interface IFeatureFieldRes extends ICountRes, ICommonRes {
  data?: IB2BPartnerInputField;
}

export interface IQuotesRes extends ICountRes, ICommonRes {
  data?: IQuoteInstance[];
}

export interface IQuoteRes extends ICommonRes {
  data?: IQuoteInstance;
}

export interface INotificationGroupedByDay {
  date: Date | string;
  notifications: INotificationInstance[];
}

export interface INotificationsRes extends ICountRes, ICommonRes {
  unreadCount?: number;
  data?: INotificationGroupedByDay[];
}

export interface INotificationRes extends ICommonRes {
  data?: INotificationInstance;
}
