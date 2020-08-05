import {commonRes} from "./common-res";
import {IDealsCreateRes} from "../api_deals/responses";
import {deal} from "./deal";

export const dealsCreateRes: IDealsCreateRes = {
  data: deal,
  ...commonRes,
};
