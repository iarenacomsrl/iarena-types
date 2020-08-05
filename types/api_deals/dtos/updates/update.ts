import {UserDefinedFieldUpdate} from "./user-defined-field-update";
import {QuoteUpdate} from "./quote-update";
import {DealUpdate} from "./deal-update";

export enum EnumUpdates {
  DealCreate = 1,
  UserDefinedFieldCreate,
  UserDefinedFieldUpdate,
  QuoteCreate ,
  QuoteAccept ,
  QuoteDecline ,
}

export interface IUpdateOptions {
  currentUserId: number;
}

export type IUpdate =
  UserDefinedFieldUpdate |
  DealUpdate |
  QuoteUpdate;
