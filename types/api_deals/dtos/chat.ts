import {chatFields} from "../../enums/forms/chat";
import {sqlId} from "../../types";
import {messageFields} from "../../enums/forms/message";
import {IMongoInstance} from "./dtos";

/**
 * Chat data
 */
export interface IChatData {
  /**
   * Name of the chat
   */
  [chatFields.title]: string;

  /**
   * Name of the chat
   */
  [chatFields.description]?: string;
}

/**
 * Chat instance stored in db
 */
export interface IChatInstance extends IMongoInstance, IChatData {
  /**
   * Creator id
   */
  [chatFields.creatorUserId]: sqlId;

  /**
   * List of users in chat
   */
  [chatFields.members]: sqlId[];

  /**
   * List of messages in chat
   */
  [chatFields.messages]: IMessageInstance[];
}

/**
 * Message data
 */
export interface IMessageData {
  [messageFields.text]: string;
  [messageFields.attachmentUrl]?: string;
  [messageFields.fontType]?: MessageFontTypes;
}

/**
 * Message instance stored in db
 */
export interface IMessageInstance extends IMessageData, IMongoInstance {
  [messageFields.fromUserId]: sqlId;
  [messageFields.status]: MessageStatuses;
}

/**
 * All possible message states
 */
export enum MessageStates {
  Loading,
  Success,
  Error,
  Read,
}

export enum MessageStatuses {
  New,
  Read,
  Deleted,
}

export enum MessageFontTypes {
  Normal,
  Bold,
  Italic,
}
