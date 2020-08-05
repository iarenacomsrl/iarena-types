/**
 * Frontend's representation of category in a nested way
 */
import {IDBInstance} from "../../api_deals/dtos/dtos";

export interface ICategory {
  /**
   * Id in DB
   */
  id: number;

  /**
   * Description to show
   */
  description: string;

  /**
   * Category main parentId
   */
  parentId: number;

  /**
   * Path of the category in the tree structure
   * es. Vita / Capitalizzazione / Index
   */
  fullPath: string;

  /**
   * Nested sub-categories
   */
  children?: ICategory[];
}

export interface ICategoryEntity extends ICategory, IDBInstance {
}

/**
 * A database's representation of category
 */
export interface ICategoryFlat {
  /**
   * Id
   */
  idInterestArea: number;

  /**
   * Foreign id of a parent node
   */
  idFather: number;

  /**
   * Main parent category id
   */
  idMainFather: number;

  /**
   * Category's depth
   */
  levelNode: number;

  /**
   * Title to show
   */
  description: string;

  /**
   * description of the category (equal to the description)
   */
  fullDescription: string;

  /**
   * Path of the category in the tree structure
   * es. Vita / Capitalizzazione / Index
   */
  fullPath: string;

  /**
   *  Translation in UK for field description (not set at the moment)
   */
  descriptionuk: string;

  /**
   * Translation in UK for field fullPath (not set at the moment)
   */
  fullPathuk: string | null;
}
