import {e2eApiV1Iarena, signInAndFillToken} from "../test-utils";
import {DisplayTypes, InputTypes} from "../../types/api_iarena/dtos/input-fields";

jest.setTimeout(30000);

describe("Input types test after authorization", () => {
  beforeAll(signInAndFillToken);

  it("should get base inputs", async () => {
    const res = await e2eApiV1Iarena.negotiationGenerateDealForm(1);
    expect(res.ok).toBeTruthy();
    expect(Array.isArray(res.data)).toBeTruthy();
    expect(Array.isArray(res.data![0].sections)).toBeTruthy();
  });

  it("should return sections for other category", async () => {
    const res = await e2eApiV1Iarena.negotiationGenerateDealForm(162);
    expect(res.ok).toBeTruthy();
    expect(Array.isArray(res.data)).toBeTruthy();
    //Control of the type for the text area
    expect(res.data![0].sections[0].sectionItems[0].typology).toBe(8);
    //Control for the expiring date
    expect(res.data![0].sections[0].sectionItems[1].typology).toBe(9);
  });

  it("should return sections with boolean typology", async () => {
    const res = await e2eApiV1Iarena.negotiationGenerateDealForm(90);
    // TODO: Alex, use lodash findDeep
    const field = res.data!.find(i => i.sections[0].sectionItems[0].typology === InputTypes.Boolean);
    expect(field).toBeDefined();
  });

  it("should get full companies list", async () => {
    const res = await e2eApiV1Iarena.companies();
    expect(res.ok).toBeTruthy();
    expect(res.count).toBeGreaterThan(0);
    expect(Array.isArray(res.data)).toBeTruthy();
    res.data!.forEach(company => {
      expect(typeof company.id).toBe("number");
      expect(typeof company.name).toBe("string");
    });
  });

  it("should search with parameter", async () => {
    const companyName = "Amissima";
    const res = await e2eApiV1Iarena.companies({q: companyName});
    expect(res.ok).toBeTruthy();
    expect(res.count).toBeGreaterThan(0);
    expect(Array.isArray(res.data)).toBeTruthy();
    expect(res.data!.length).toEqual(1);
    expect(res.data![0].name).toEqual("Amissima");
  });

  it("should add or update a list of questions for a specific category", async () => {
    const res = await e2eApiV1Iarena.addUpdateQuestions({
      id_interest_area: 1,
      status: 1,
      version: 0,
      sections: [
        {
          name: "Test inserimento domande",
          description: "Test Scegli una delle due opzioni",
          sectionItems: [
            {
              isRequired: true,
              quotationId: 0,
              typology: InputTypes.Select,
              displayType: DisplayTypes.Default,
              id: 0,
              label: "Scegli tra le seguenti opzioni:",
              items: [
                {
                  displayText: "Scelta A",
                  id: 1,
                },
                {
                  displayText: "Scelta B",
                  id: 2,
                },
              ],
            },
          ],
        },
        {
          name: "Test inserimento domande2",
          description: "Test Scegli una delle due opzioni",
          sectionItems: [
            {
              isRequired: true,
              quotationId: 0,
              typology: InputTypes.Select,
              displayType: DisplayTypes.Default,
              id: 0,
              label: "Scegli tra le seguenti opzioni:",
              items: [
                {
                  displayText: "Scelta C",
                  id: 1,
                },
                {
                  displayText: "Scelta D",
                  id: 2,
                },
              ],
            },
          ],
        },
      ],
    });
    expect(res.ok).toBeTruthy();
  });

  it("should get a list of question depending on the categoryId , status and version", async () => {
    const res = await e2eApiV1Iarena.questions({
      id_category: 1,
      status: 1,
      version: 0,
    });
    expect(res.ok).toBeTruthy();
    expect(Array.isArray(res.data)).toBeTruthy();
  });

  it("should get a list of all question depending on the categoryId", async () => {
    const res = await e2eApiV1Iarena.allQuestions(1);
    expect(res.ok).toBeTruthy();
    expect(Array.isArray(res.data)).toBeTruthy();
  });

  it("should delete a specific list depending of id_category, version and status", async () => {
    const res = await e2eApiV1Iarena.deleteQuestions({
      id_category: 1,
      status: 1,
      version: 0,
    });
    expect(res.ok).toBeTruthy();
  });

  // it("should send one filled data", () => {
  //   const inputs: IIntegrationTestSendInputsReq = {
  //     id: 5622099,
  //     quotationId: 111545,
  //     moduleId: "661921",
  //     booleanValue: null,
  //     dateValue: new Date("2019-10-03T12:59:52.245Z"),
  //     floatValue: null,
  //     intValue: null,
  //     stringValue: null
  //   };
  //   return e2eApiV1Iarena
  //     .integrationSendSingleInput(inputs)
  //     .then(res => {
  //       expect(res.ok).toBeTruthy();
  //     });
  // });
  //
  // it("should send an array of filled datas", () => {
  //   const inputs: IIntegrationTestSendInputsReq[] = [
  //     {
  //       id: 5630214,
  //       quotationId: 111675,
  //       moduleId: "662992",
  //       booleanValue: null,
  //       dateValue: new Date("2019-10-03T12:59:52.245Z"),
  //       floatValue: null,
  //       intValue: null,
  //       stringValue: null
  //     }, {
  //       id: 5630215,
  //       quotationId: 111675,
  //       moduleId: "662993",
  //       booleanValue: null,
  //       dateValue: null,
  //       floatValue: null,
  //       intValue: 1,
  //       stringValue: null
  //     }, {
  //       id: 5630216,
  //       quotationId: 111675,
  //       moduleId: "662994",
  //       booleanValue: null,
  //       dateValue: null,
  //       floatValue: 100000,
  //       intValue: null,
  //       stringValue: null
  //     }, {
  //       id: 5630217,
  //       quotationId: 111675,
  //       moduleId: "662994",
  //       booleanValue: null,
  //       dateValue: null,
  //       floatValue: 100000,
  //       intValue: null,
  //       stringValue: null
  //     }, {
  //       id: 5630218,
  //       quotationId: 111675,
  //       moduleId: "662994",
  //       booleanValue: false,
  //       dateValue: null,
  //       floatValue: null,
  //       intValue: null,
  //       stringValue: null
  //     }, {
  //       id: 5630219,
  //       quotationId: 111675,
  //       moduleId: "662994",
  //       booleanValue: false,
  //       dateValue: null,
  //       floatValue: null,
  //       intValue: null,
  //       stringValue: null
  //     }];
  //   return e2eApiV1Iarena
  //     .integrationSendInputs(inputs)
  //     .then(res => {
  //       expect(res.ok).toBeTruthy();
  //     });
  // });
  //


  afterAll(e2eApiV1Iarena.signOut);
});
