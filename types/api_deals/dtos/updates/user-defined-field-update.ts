import {IUserDefinedFieldInstance} from "../user-defined-field";
import {EnumUpdates} from "./update";

export interface ICreateUserDefinedFields {
  type: EnumUpdates.UserDefinedFieldCreate;
  userDefinedFields: IUserDefinedFieldInstance[];
  dealId: number;
}

export interface IUpdateUserDefinedField {
  type: EnumUpdates.UserDefinedFieldUpdate;
  userDefinedField: IUserDefinedFieldInstance;
  dealId: number;
}

export type UserDefinedFieldUpdate =
  ICreateUserDefinedFields |
  IUpdateUserDefinedField;
