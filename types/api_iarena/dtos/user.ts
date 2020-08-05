import {sqlId} from "../../types";
import {ICategory, ICategoryFlat} from "./category";
import {userFields} from "../../enums/forms/user-info";
import {IDBInstance} from "../../api_deals/dtos/dtos";

/**
 * Roles of users
 */
export enum UserRoles {
  /**
   * Default role for all new users
   */
  Guest,

  /**
   * Admins
   */
  Admin,

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
 * User company
 */
export interface IUserCompany {
  /**
   * Id in DB
   */
  id: number;

  /**
   * Company name
   */
  name: string;
}

/**
 * User description
 */
export interface IUser {
  /**
   * Id in DB
   */
  id: sqlId;

  /**
   * JWT token
   */
  token?: string;

  /**
   * Name of the user
   */
  fullName?: string;

  /**
   * URL to a profile's picture
   */
  avatar?: string;

  /**
   * Float number from 0 to 5. Default is 1
   */
  rating: number;

  /**
   * In app currency (1 currency = 1 euro)
   */
  balance: number;

  /**
   * User login and email
   */
  email: string;

  /**
   * User phone
   */
  phone: string | null;

  /**
   * User location (Country, town)
   */
  location: string | null;

  /**
   * User location (Country, town)
   */
  companies: IUserCompany[] | null;

  /**
   * The ruiCode is a unique code to identify an insurance intermediaries,
   * consisting of a letter and 9 numbers for Italy (Ex. A798563187, B944238647, E786613671),
   * different composition in other country
   */
  ruiCode: string | null;

  /**
   * Categories, that user has selected
   */
  categories: ICategoryFlat[];

  /**
   * Role, assigned to the user
   */
  role: UserRoles;
}
