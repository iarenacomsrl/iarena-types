import {ITag} from "../quote";

export interface IRate {
  /**
   * DB id
   */
  id: number;

  quotationId: number;

  /**
   * Price
   */
  premioLordoFinale: number;

  /**
   * Commission
   */
  totaleProvviggioni: number;

  /**
   * Tags
   */
  quotationRateMajorWarranties: ITag[];
}

/**
 * CoverHolder quote
 */
export interface ICoverHolderQuoteData {
  /**
   * Returned auto-quotes from cover-holder. Only the first one is needed
   */
  rates: IRate[];
}
