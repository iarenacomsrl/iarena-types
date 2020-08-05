import {e2eApiV1Iarena} from "../test-utils";
import {e2eDefaultUserId} from "../../types/constants";

jest.setTimeout(30000);

describe("Old deals test", () => {
  it("should get user's old deals", async () => {
    const res = await e2eApiV1Iarena.oldDealsGetAll(e2eDefaultUserId);
    expect(res.ok).toBeTruthy();
    expect(Array.isArray(res.data)).toBeTruthy();
    res.data!.forEach(deal => {
      //is the id of the negotiation on the db sql
      expect(deal.id).toBeDefined();
      expect(deal.featuredFields).toBeDefined();
    });
    const dealsWithAcceptedQuotes = res.data!.filter(deal => deal.quotes!.length > 0);
    expect(dealsWithAcceptedQuotes.length).toBeGreaterThan(0);
  });
});
