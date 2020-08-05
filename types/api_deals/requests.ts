import {sqlId} from "../types";
import {IChatData} from "./dtos/chat";
import {IUserDefinedField, IUserDefinedFieldInstance} from "./dtos/user-defined-field";
import {IB2BPartnerInputField} from "../api_iarena/dtos/input-fields";

export interface IQuotesGetAllReq {
  dealId: sqlId;
  creatorUserId?: sqlId;
}

export interface IDealsGetAllReq {
  currentUserId?: number;
}

export interface IDealsGetOneReq extends IDealsGetAllReq {
  dealId: sqlId;
}

export interface IFieldsReq {
  dealId?: number;
  notDealId?: number;
  categoryId?: number;
  fieldId?: number;
  text?: string;
}

export interface IUserDefinedFieldsCreateReq {
  dealId: sqlId,
  fields: IUserDefinedField[],
}

export interface IUserDefinedFieldUpdateReq {
  dealId: sqlId,
  field: IUserDefinedFieldInstance,
}

export interface IFeaturedFieldsCreateReq {
  dealId: sqlId,
  fields: IB2BPartnerInputField[],
}

export interface IDealsDeleteReq extends IDealsGetOneReq {
}


export interface IChatsCreateReq {
  /**
   * Chat data
   */
  chat: IChatData;

  /**
   * Id of the user to initiate chat with
   */
  userIdToChatWith: sqlId;
}

export interface IUsersGetAllReq {
}

export interface INotificationsReadReq {
  notificationId?: number;
}
