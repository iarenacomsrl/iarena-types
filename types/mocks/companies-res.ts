import {commonRes} from "./common-res";
import {ICompaniesRes} from "../api_iarena/responses";

export const companiesRes: ICompaniesRes = {
  count: 4,
  data: [
    {
      id: 1,
      name: "Vilnius",
    },
    {
      id: 2,
      name: "Kaunas",
    },
    {
      id: 3,
      name: "Pavilnys",
    },
    {
      id: 4,
      name: "Siauliai",
    },
  ],
  ...commonRes,
};
