import {e2eApiV1Iarena, signInAndFillToken} from "../test-utils";
import {DisplayTypes, IB2BPartnerInputField, InputTypes} from "../../types/api_iarena/dtos/input-fields";
import {b2bPartnersRes} from "../../types/mocks/b2b-partners-res";
import {productFields} from "../../types/enums/forms/product";
import {IB2BAnswerQuestionsReq} from "../../types/api_iarena/requests";
import {COVER_HOLDER_ID} from "../../types/enums/b2b-partners";

jest.setTimeout(30000);

describe("Products test", () => {
  beforeAll(signInAndFillToken);

  it("should get cover-holder products", async () => {
    const res = await e2eApiV1Iarena.b2bGetProducts(COVER_HOLDER_ID);
    expect(res.ok).toBeTruthy();
    expect(res.data!.length).toBeGreaterThan(COVER_HOLDER_ID);
    res.data!.forEach(product => {
      expect(product.id).toBeDefined();
      expect(product[productFields.name]).toBeDefined();
      expect(product[productFields.description]).toBeDefined();
    });
    const formRes = await e2eApiV1Iarena.b2bGetQuestions({
      partnerId: COVER_HOLDER_ID,
      categoryId: res.data![0].id,
    });
    expect(formRes.data!.length).toBeGreaterThan(0);
  });

  it("should return all partners for a specified category", async () => {
    const res = await e2eApiV1Iarena.b2bPartners(90);
    const product = res.data![0];
    expect(res.ok).toBeTruthy();
    expect(product.id).toBeDefined();
    expect(product.logo).toBeDefined();
    expect(product.name).toBeDefined();
  });

  it("should return products for sub-categories", async () => {
    const res1 = await e2eApiV1Iarena.b2bPartners(90);
    expect(res1.data![0].id).toBeDefined();
    const res2 = await e2eApiV1Iarena.b2bPartners(92);
    expect(res2.data![0].id).toBeDefined();
  });

  it("should update send filled form for cover-holder partner", async () => {
    const formFilled: IB2BPartnerInputField[] = [
      {
        id: 7094520,
        label: "some label",
        value: "2020-02-22T12:59:52.245Z",
        isRequired: true,
        quotationId: 136498,
        typology: InputTypes.Date,
        displayType: DisplayTypes.Default,
      },
      {
        id: 7094521,
        label: "some label",
        value: "1",
        isRequired: true,
        quotationId: 136498,
        typology: InputTypes.Int,
        displayType: DisplayTypes.Default,
      },
      {
        id: 7094522,
        label: "some label",
        value: "100000",
        isRequired: true,
        quotationId: 136498,
        typology: InputTypes.Float,
        displayType: DisplayTypes.Default,
      },
      {
        id: 7094523,
        label: "some label",
        value: "100000",
        isRequired: true,
        quotationId: 136498,
        typology: InputTypes.Float,
        displayType: DisplayTypes.Default,
      },
      {
        id: 7094525,
        label: "some label",
        value: false,
        isRequired: true,
        quotationId: 136498,
        typology: InputTypes.Boolean,
        displayType: DisplayTypes.Default,
      },
    ];
    const req: IB2BAnswerQuestionsReq = {sectionItems: formFilled};
    const res = await e2eApiV1Iarena.b2bAnswerQuestions(COVER_HOLDER_ID, req);
    expect(res.ok).toBeTruthy();
  });

  it("should update send filled form for cover-holder partner with meta", async () => {
    const formFilled: IB2BPartnerInputField[] = [
      {
        id: 7094520,
        meta: {
          quotationId: 136498,
        },
        label: "some label",
        value: "2020-02-22T12:59:52.245Z",
        isRequired: true,
        typology: InputTypes.Date,
        displayType: DisplayTypes.Default,
      },
      {
        id: 7094521,
        meta: {
          quotationId: 136498,
        },
        label: "some label",
        value: "1",
        isRequired: true,
        typology: InputTypes.Int,
        displayType: DisplayTypes.Default,
      },
      {
        id: 7094522,
        meta: {
          quotationId: 136498,
        },
        label: "some label",
        value: "100000",
        isRequired: true,
        typology: InputTypes.Float,
        displayType: DisplayTypes.Default,
      },
      {
        id: 7094523,
        meta: {
          quotationId: 136498,
        },
        label: "some label",
        value: "100000",
        isRequired: true,
        typology: InputTypes.Float,
        displayType: DisplayTypes.Default,
      },
      {
        id: 7094525,
        meta: {
          quotationId: 136498,
        },
        label: "some label",
        value: false,
        isRequired: true,
        typology: InputTypes.Boolean,
        displayType: DisplayTypes.Default,
      },
    ];
    const req: IB2BAnswerQuestionsReq = {sectionItems: formFilled};
    const res = await e2eApiV1Iarena.b2bAnswerQuestionsAdapted(COVER_HOLDER_ID, req);
    expect(res.ok).toBeTruthy();
  });

  it("should return generated auto-quote from partner", () => {
    const quotationId = 136498;
    return e2eApiV1Iarena
      .b2bGetAutoQuote(COVER_HOLDER_ID, quotationId)
      .then(res => {
        expect(res.ok).toBeTruthy();
        const quote = res.rates[0];
        expect(quote.id).toBeDefined();
        expect(quote.premioLordoFinale).toBeDefined();
        expect(quote.quotationId).toBeDefined();
        expect(quote.totaleProvviggioni).toBeDefined();
        expect(Array.isArray(quote.quotationRateMajorWarranties)).toBeTruthy();
        quote.quotationRateMajorWarranties.forEach(warranty => {
          expect(warranty.name).toBeDefined();
          expect(warranty.value).toBeDefined();
        });
      });
  });

  it("should save a quotation as Draft", () => {
    const quotationId = 136498;
    const title = "The title of the quotation saved 30";
    return e2eApiV1Iarena
      .saveAsDraftQuotation(quotationId, title)
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect((typeof res.quotationId)).toBe("number");
      });
  });

  afterAll(e2eApiV1Iarena.signOut);
});
