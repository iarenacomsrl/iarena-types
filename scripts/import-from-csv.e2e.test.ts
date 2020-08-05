import csv from "csv-parser";
import fs from "fs";
import {e2eApiV1DealsReal, signInAndFillToken} from "../e2e/test-utils";
import {IDealData} from "../types/api_deals/dtos/deal";
import {DisplayTypes, InputTypes} from "../types/api_iarena/dtos/input-fields";
import {RC_AUTO_CATEGORY_ID} from "../types/constants";

jest.setTimeout(300000);

const SRC_PATH = `${__dirname}/leads.csv`;

describe("Decode CSV and encode as JSON", () => {
  it("should parse csv", async () => {
    const promisesQueries: Promise<any>[] = [];
    const authRes = await signInAndFillToken();
    e2eApiV1DealsReal.setAuth(authRes.data!.token);
    await new Promise((resolve, reject) => {
      fs.createReadStream(SRC_PATH)
        .pipe(csv())
        .on("data", row => {
          promisesQueries.push(dbQuery(parseRow(row)));
        })
        .on("error", reject)
        .on("end", () => Promise.all(promisesQueries).then(resolve));
    });
    const res = await e2eApiV1DealsReal.dealsGetAll();
    expect(res.ok).toBeTruthy();
  });
});

function dbQuery(deal: IDealData): Promise<any> {
  return e2eApiV1DealsReal.dealsCreate(deal).catch(err => {
    expect(err).not.toBeDefined();
  });
}

function parseRow(row: {[label: string]: string}): IDealData {
  expect(row).toBeDefined();
  return {
    category: {
      id: RC_AUTO_CATEGORY_ID,
      fullPath: "Tutela legale / Privati",
      description: "Rc auto",
    },
    expireDate: new Date(),
    featuredFields: Object.keys(row).map(key => {
      return {
        value: row[key],
        isRequired: true,
        typology: InputTypes.String,
        displayType: DisplayTypes.Default,
        label: key,
      };
    }),
  };
}
