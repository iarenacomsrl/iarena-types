import {e2eApiV1Iarena} from "../test-utils";
import {signUpFields} from "../../types/enums/forms/sign-up";
import {signInFields} from "../../types/enums/forms/sign-in";
import {
  e2eDefaultPassword,
  e2eDefaultUserEmail,
  e2eDefaultUserId,
  e2eUserEmail1,
  e2eUserId1,
  e2eUserId2,
  e2eUserId3,
  e2eUserId4,
  e2eUserId5,
  e2eUserPassword1,
} from "../../types/constants";
import {userFields} from "../../types/enums/forms/user-info";

const username2 = "test";
const password2 = "password2";
const email2 = "fake@email.com";

jest.setTimeout(30000);

describe("Sign in test", () => {
  it("should NOT sign in with wrong credentials", async () => {
    const res = await e2eApiV1Iarena.signIn({[signInFields.email]: "wrong", [signInFields.password]: "wrong"});
    expect(res.ok).toBeFalsy();
    expect(res.errors!.length).toBeGreaterThan(0);
  });

  it("should sign in and validate a bearer token", async () => {
    const res1 = await e2eApiV1Iarena.signIn({
      [signInFields.email]: e2eDefaultUserEmail,
      [signInFields.password]: e2eDefaultPassword,
    });
    expect(res1.ok).toBeTruthy();
    expect(res1.errors).toBeNull();
    const user = res1.data!;
    expect(user.id).toEqual(e2eDefaultUserId);
    expect(user.token).toBeDefined();
    expect(user.avatar).toBeDefined();
    expect(user.fullName).toBeDefined();
    expect(user[userFields.balance]).toBeGreaterThanOrEqual(0);
    expect(user.rating).toBeGreaterThanOrEqual(0);
    expect(user.ruiCode).toBeDefined();

    const token = res1.data!.token!;
    const res2 = await e2eApiV1Iarena.validateToken(token);
    expect(res2.ok).toBeTruthy();
    expect(res2.data!.user.id).toEqual(e2eDefaultUserId);
    expect(res2.data!.user.avatar).toBeDefined();
    expect(res2.data!.user.fullName).toBeDefined();

    const tokenWithBearerString = `Bearer ${token}`;
    return e2eApiV1Iarena.validateToken(tokenWithBearerString).catch(err => {
      expect(err).toBeDefined();
    });
  });

  it("should sign in with different credentials", async () => {
    const res1 = await e2eApiV1Iarena.signIn({
      [signInFields.email]: e2eUserEmail1,
      [signInFields.password]: e2eUserPassword1,
    });
    expect(res1.ok).toBeTruthy();
    expect(res1.errors).toBeNull();
    const user = res1.data!;
    expect(user.token).toBeDefined();
    expect(user.ruiCode).toBeNull();
  });

  it("should return users info", async () => {
    const res = await e2eApiV1Iarena.usersInfo([
      e2eDefaultUserId,
      e2eUserId1,
      e2eUserId2,
      e2eUserId3,
      e2eUserId4,
      e2eUserId5,
    ]);
    expect(res.ok).toBeTruthy();
    res.data!.forEach(user => {
      expect(user.id).toBeDefined();
      expect(user.fullName).toBeDefined();
      if (user.id === e2eDefaultUserId) {
        expect(user.ruiCode).toBeDefined();
        expect(user.categories).toBeDefined();
      }
    });
  });

  it("should sign up and return a bearer token", async () => {
    const res = await e2eApiV1Iarena.signUp({
      [signUpFields.username]: username2,
      [signInFields.password]: password2,
      [signInFields.email]: email2,
    });
    expect(res.ok).toBeTruthy();
    expect(res.errors).toBeNull();
    expect(res.data!.token).toBeDefined();
  });

  it("should change password", async () => {
    const res = await e2eApiV1Iarena.changePassword({oldPassword: e2eDefaultPassword, newPassword: password2});
    expect(res.ok).toBeTruthy();
    expect(res.errors).toBeNull();
  });

  afterAll(e2eApiV1Iarena.signOut);
});
