import {commonRes} from "./common-res";
import {IDealsAggregateByCategoriesRes} from "../api_deals/responses";

export const dealsCountByCategoriesRes: IDealsAggregateByCategoriesRes = {
  data: [
    {
      category: {
        id: 3,
        fullPath: "Tutela legale / Privati",
        description: "Category 3",
        parentId: 0,
      },
      count: 1,
    },
    {
      category: {
        id: 2,
        fullPath: "Tutela legale / Privati",
        description: "Category 2",
        parentId: 0,
      },
      count: 2,
    },
    {
      category: {
        id: 1,
        fullPath: "Tutela legale / Privati",
        description: "Some title",
        parentId: 0,
      },
      count: 3,
    },
  ],
  ...commonRes,
};
