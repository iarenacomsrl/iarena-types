import {sqlId} from "../../types";

/**
 * All possible input types for deal fields
 */
export enum InputTypes {
  String,
  Int,
  Float,
  Boolean,
  Select,
  Date,
  File,
}

/**
 * All possible input types for deal fields
 */
export enum DisplayTypes {
  Default,
  Money,
  ExpireDate,
  Label,
  TextArea,
}

/**
 * IField -> ISection -> IB2BPartnerInputField -> IOption
 * Representation of a logically separated field. Highest in hierarchy
 */
export interface IField {
  /**
   * List of sections in field
   */
  sections: ISection[];
}

/**
 * Representation of a logically separated section in the form
 */
export interface ISection {
  /**
   * Name to be showed
   */
  name?: string;

  /**
   * Extra description to be showed
   */
  description?: string | null;

  /**
   * List of fields in section
   */
  sectionItems: IB2BPartnerInputField[];
}

export interface ILabelField {
  /**
   * Text to be showed as a label
   */
  label: string;
}

export interface IBaseInputField extends ILabelField {
  /**
   * Define, how the field should be displayed and treated
   */
  typology: InputTypes;

  /**
   * Define, how the field should be displayed and treated
   */
  displayType: DisplayTypes;

  /**
   * Set value of the input
   */
  value?: string | number | boolean;
}

/**
 * Representation of a dynamic field in form, such as input with a label
 */
export interface IB2BPartnerInputField extends IBaseInputField {
  /**
   * Id in external partner's DB
   */
  id?: sqlId;

  /**
   * All the extra data for partner request
   */
  meta?: any;

  /**
   * Define, if the field is required (true is yes)
   */
  isRequired?: boolean;

  /**
   * Id of b2b partner
   */
  partnerId?: sqlId;

  /**
   * Id used for the partner system to update values
   */
  quotationId?: sqlId;

  /**
   * List of predefined answers. Preferably used in <select> boxes as <option>
   */
  items?: IOption[];
}

/**
 * Representation of a predefined answer
 */
interface IOption {
  id: sqlId;
  displayText: string;
}
