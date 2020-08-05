import {commonRes} from "./common-res";
import {IDealRes} from "../api_deals/responses";
import {deal} from "./deal";

export const dealsGetOneRes: IDealRes = {
  data: deal,
  ...commonRes,
};
