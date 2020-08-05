import {sqlId} from "../../types";
import {IBaseInputField, ILabelField} from "../../api_iarena/dtos/input-fields";
import {IDBInstance} from "./dtos";

export interface ILabelFieldInstance extends IDBInstance, ILabelField {
  /**
   * Id of the category this field refers to
   */
  categoryId?: number;
}

export interface IUserDefinedField extends IBaseInputField {
  /**
   * Label field from another table
   */
  labelField?: ILabelFieldInstance;

  /**
   * Label field db id
   */
  labelFieldId?: number;

  /**
   * Id of the category this field refers to
   */
  categoryId?: number;
}

export interface IUserDefinedFieldInstance extends IUserDefinedField, IDBInstance {
  /**IUserDefinedField
   * Field owner user id
   */
  ownerId: sqlId;

  /**
   * Id of the deal this field refers to
   */
  dealId: number;
}
