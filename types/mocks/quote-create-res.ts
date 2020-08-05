import {commonRes} from "./common-res";
import {IQuoteRes} from "../api_deals/responses";
import {QuoteStatuses} from "../api_deals/dtos/quote";
import {companiesRes} from "./companies-res";

export const quoteCreateRes: IQuoteRes = {
  data: {
    id: 1,
    dealId: 1,
    ownerId: 1,
    price: 1,
    company: companiesRes.data![0]!,
    status: QuoteStatuses.Default,
    commissionPercentage: 1,
    expireDate: new Date(),
    tags: [{
      name: "tag1",
      value: "tag1",
    }],
  },
  ...commonRes,
};
