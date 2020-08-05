import {e2eApiV1Iarena} from "../test-utils";

jest.setTimeout(30000);

describe("Email service test", () => {
  it("should send email to user", async () => {
    const res = await e2eApiV1Iarena.sendEmail({
      subject: "",
      to: "",
      from: "",
    });
    expect(res.ok).toBeTruthy();
  });
});
