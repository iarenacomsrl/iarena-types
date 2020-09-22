import {commonRes} from "./common-res";
import {IQuotesRes} from "../api_deals/responses";
import {e2eUserId1, e2eUserId2} from "../constants";
import {QuoteStatuses} from "../api_deals/dtos/quote";
import {companiesRes} from "./companies-res";

export const quotesGetAllRes: IQuotesRes = {
  data: [
    {
      id: 1,
      dealId: 1,
      ownerId: e2eUserId1,
      status: QuoteStatuses.Accepted,
      price: 120,
      company: companiesRes.data![0]!,
      commissionPercentage: 1,
      expireDate: new Date(),
      tags: [{
        name: "tag1",
        value: "tag1",
      }, {
        name: "tag2",
        value: "tag2",
      }, {
        name: "tag3",
        value: "tag3",
      }, {
        name: "tag4",
        value: "tag4",
      }],
    },
    {
      id: 2,
      dealId: 2,
      ownerId: e2eUserId1,
      status: QuoteStatuses.Default,
      price: 2,
      company: companiesRes.data![1]!,
      commissionPercentage: 2,
      expireDate: new Date(),
      tags: [{
        name: "tag1",
        value: "tag1",
      }],
    },
    {
      id: 3,
      dealId: 3,
      ownerId: e2eUserId2,
      status: QuoteStatuses.Default,
      price: 3,
      company: companiesRes.data![2]!,
      commissionPercentage: 3,
      expireDate: new Date(),
      tags: [{
        name: "tag1",
        value: "tag1",
      }],
    },
  ],
  count: 3,
  ...commonRes,
};
