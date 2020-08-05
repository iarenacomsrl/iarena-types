import {sqlId} from "../../types";

/**
 * Model representing an insurance company
 */
export interface ICompany {
  /**
   * Id in DB
   */
  id: sqlId;

  /**
   * Name of the Company
   * es. Allianz
   */
  name: string;
}

/**
 * Product from b2b integrated partners
 * Model that represents the products offered by the partner CoverHolder
 * Relating to the Professional RC category (Rc Professionale)
 * TODO: Mirko, please add description for fields
 */
export interface IProduct {
  id: sqlId;
  name: string;
  nameEn: string;
  description?: string;
  hide: boolean;
  macroProduct?: boolean;
}

/**
 * b2b integrated partner (coverholder, generali)
 */
export interface IPartner {
  /**
   * Id in DB
   */
  id: sqlId;

  /**
   * Number of questions, required by partner
   */
  questionsCount: number;

  /**
   * URL to a partner's logo
   */
  logo: string;

  /**
   * Partner's name
   */
  name: string;
}
