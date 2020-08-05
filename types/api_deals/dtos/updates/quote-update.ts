import {IQuoteInstance} from "../quote";
import {EnumUpdates} from "./update";

export interface ICreateQuote {
  type: EnumUpdates.QuoteCreate;
  quote: IQuoteInstance;
  dealId: number;
}

export interface IAcceptQuote {
  type: EnumUpdates.QuoteAccept;
  quoteId: number;
  dealId: number;
}

export interface IDeclineQuote {
  type: EnumUpdates.QuoteDecline;
  quoteId: number;
  dealId: number;
}

export type QuoteUpdate =
  ICreateQuote |
  IAcceptQuote |
  IDeclineQuote;
