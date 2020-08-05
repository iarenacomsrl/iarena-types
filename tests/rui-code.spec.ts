import {ruiCodeRegEx} from "../types/validators/reg-ex/rui-code";


describe("RUI-code test", () => {
  it("should validate RUI code", () => {
    const validRUICodeSubAgent = "E786613671";
    const invalidRUICodeSubAgent = "E783671";

    const validRUICodeOther = "C786613671";
    const invalidRUICodeOther = "C783671";

    const validRUICodeBroker = "B786613671";
    const invalidRUICodeBroker = "B783671";

    const validRUICodeAgent = "A786613671";
    const invalidRUICodeAgent = "A783671";

    const validRUICodeUE = "UE86613671";
    const invalidRUICodeUE = "UE783671";

    const genericInvalidRui = "324567809913";

    expect(validRUICodeSubAgent.match(ruiCodeRegEx)).toBeTruthy();
    expect(invalidRUICodeSubAgent.match(ruiCodeRegEx)).toBeFalsy();

    expect(validRUICodeOther.match(ruiCodeRegEx)).toBeTruthy();
    expect(invalidRUICodeOther.match(ruiCodeRegEx)).toBeFalsy();

    expect(validRUICodeBroker.match(ruiCodeRegEx)).toBeTruthy();
    expect(invalidRUICodeBroker.match(ruiCodeRegEx)).toBeFalsy();

    expect(validRUICodeAgent.match(ruiCodeRegEx)).toBeTruthy();
    expect(invalidRUICodeAgent.match(ruiCodeRegEx)).toBeFalsy();

    expect(validRUICodeUE.match(ruiCodeRegEx)).toBeTruthy();
    expect(invalidRUICodeUE.match(ruiCodeRegEx)).toBeFalsy();

    expect(genericInvalidRui.match(ruiCodeRegEx)).toBeFalsy();
  });
});
