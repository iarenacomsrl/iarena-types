import {sqlId} from "../../types";
import {IDBInstance} from "./dtos";
import {ICompany} from "../../api_iarena/dtos/dtos";

export interface ITag {
  name: string;
  value: string;
}

/**
 * Quote basic fields
 */
export interface IQuoteData {
  /**
   * Deal id, to which the quote was created
   */
  dealId: sqlId;

  /**
   * Asked price
   */
  price: number;

  /**
   * Commission percentage from 0 to 100
   */
  commissionPercentage: number;

  /**
   * Date, when quote becomes expired
   */
  expireDate: Date;

  /**
   * List of tags entered by user
   */
  tags: ITag[];

  /**
   * Selected external company
   */
  company: ICompany;

  /**
   * Deal id, to which the quote was created
   */
  companyId?: sqlId;
}

/**
 * A database's representation of a quote
 */
export interface IQuoteInstance extends IQuoteData, IDBInstance {
  /**
   * User id, who has created the quote
   */
  ownerId: sqlId;

  /**
   * Status of the quote
   */
  status: QuoteStatuses;

  /**
   * Reason, why the quote was declined
   */
  declineReason?: string;
}

/**
 * Quote statuses
 */
export enum QuoteStatuses {
  /**
   * Default status of all created quote
   */
  Default,

  /**
   * Accepted by any user
   */
  Accepted,

  /**
   * Declined by any user
   */
  Declined,

  /**
   * Canceled by quote creator
   */
  Canceled,
}
