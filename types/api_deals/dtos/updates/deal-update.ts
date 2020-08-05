import {IDealInstance} from "../deal";
import {EnumUpdates} from "./update";

export interface ICreateDeal {
  type: EnumUpdates.DealCreate;
  deal: IDealInstance;
}

export type DealUpdate =
  ICreateDeal;
