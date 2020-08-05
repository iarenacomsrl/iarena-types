import {sqlId} from "../../types";

export interface IMongoInstance {
  /**
   * ObjectID type of mongodb
   */
  // _id?: mongoId;

  /**
   * Virtual property
   */
  id?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDBInstance {
  id: sqlId;
  createdAt?: Date;
  updatedAt?: Date;
}
