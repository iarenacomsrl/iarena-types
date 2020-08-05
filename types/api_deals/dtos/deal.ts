import {sqlId} from "../../types";
import {IB2BPartnerInputField} from "../../api_iarena/dtos/input-fields";
import {IDBInstance} from "./dtos";
import {IUserDefinedFieldInstance} from "./user-defined-field";
import {ICategory} from "../../api_iarena/dtos/category";
import {IQuoteInstance} from "./quote";

export interface IAggregationByCategory {
  category: ICategory;
  count: number;
}

export interface IAggregationByUser {
  /**
   * ID of the user
   */
  ownerId: sqlId,

  /**
   * Amount of deals, created by user
   */
  count: number,
}

/**
 * Deal basic fields
 */
export interface IDealData {
  /**
   * Selected category of the deal
   */
  category: ICategory;

  /**
   * Fields defined by iarena service
   */
  featuredFields: IB2BPartnerInputField[];

  /**
   * Expire date of the deal
   */
  expireDate: string | Date;
}

/**
 * A database's representation of a deal
 */
export interface IDealInstance extends IDealData, IDBInstance {
  /**
   * User id, who has created a deal
   */
  ownerId: sqlId;

  /**
   * Category id
   */
  categoryId?: number;

  /**
   * Custom user fields
   */
  userDefinedFields?: IUserDefinedFieldInstance[];

  /**
   * External fields from b2b partners
   */
  b2bFields?: IB2BPartnerInputField[];

  /**
   * Quotes for this deal
   */
  quotes?: IQuoteInstance[];

  /**
   * Id of the user, who accepted this deal
   */
  acceptedQuoteOwnerId?: sqlId;

  /**
   * Status of a deal, dependent on quotes count
   */
  quoteStatus: DealQuoteStatuses;

  /**
   * Status of a deal, dependent on quotes count
   */
  questionStatus: DealQuestionStatuses;

  /**
   * Define if this deal can be unfixed.
   * If current user has created a quote for the deal, it can not be unfixed (isFixed can't become `false`)
   */
  isLocked: boolean;
}

/**
 * Deal levels of trust, dependent on user who created it
 */
export enum DealTrustLevels {
  /**
   * Deals made by users without RUI code
   */
  Basic = 1,

  /**
   * Deals made by users with RUI code
   */
  BasicPlus,

  /**
   * Deals made by VIP users
   */
  VIP,
}

/**
 * Deal statuses with respect to user-defined-fields
 */
export enum DealQuestionStatuses {
  /**
   * Deal has no user-defined-fields associated with it
   */
  Default,

  /**
   * Deal has user-defined-fields
   */
  HasQuestions,
}

/**
 * Deal statuses with respect to quotes
 */
export enum DealQuoteStatuses {
  /**
   * Deal with 0 quotes and that has been created more than 24 hours ago
   */
  Default,

  /**
   * Deal, that has been created less than 24 hours ago
   */
  New,

  /**
   * Deal with any quotes
   */
  HasQuotes,

  /**
   * Deal with accepted quote. Deal could have only one accepted quote
   */
  Closed,
}

/**
 * Deal times
 */
export enum DealTimeStatuses {
  /**
   * Not expired deal
   */
  Active,

  /**
   * Deal without any quote and expire date has come
   */
  Expired,

  /**
   * Deal with any accepted quote with extra time duration to auto accepting.
   * All deals with accepted quote will become auto-accepted ones in n times
   */
  PreAccepted,
}
