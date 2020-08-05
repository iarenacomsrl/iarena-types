import {IDBInstance} from "./dtos";

export interface INotifyOptions {
  toUserId?: number;
}

export interface INotificationData {
  title: string;
  type: NotificationTypes;
  dealId?: number;
  userDefinedFieldId?: number;
  quoteId?: number;
}

/**
 * Representation of a notification stored in db
 */
export interface INotificationInstance extends INotificationData, IDBInstance {
  userId: number;
  isRead: boolean;
}

export enum NotificationTypes {
  Basic,
  QuoteStatusChange,
  NewQuote = 3,
  NewUserDefinedFieldAdded,
  UserDefinedFieldChanged,
}
