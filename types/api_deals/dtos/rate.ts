import {IDBInstance} from "./dtos";

export interface IRate extends IDBInstance {
  title: string;
  description: string;
  price: number;
  state: string;
}
