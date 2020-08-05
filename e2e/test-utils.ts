import {Headers} from "../types/enums/enums";
import {ApiV1DealsReal} from "../types/api_deals/api-v1-deals-real";
import {ApiV1IarenaReal} from "../types/api_iarena/api-v1-iarena-real";
import {
  e2eApiV1ArenaUrl,
  e2eApiV1DealsUrl,
  e2eDefaultPassword,
  e2eDefaultUserEmail,
  e2eTestEnvPassword,
} from "../types/constants";
import {signInFields} from "../types/enums/forms/sign-in";
// @ts-ignore
import curlirize from "axios-curlirize";

export async function signInAndFillToken() {
  const res = await e2eApiV1Iarena.signIn({
    [signInFields.email]: e2eDefaultUserEmail,
    [signInFields.password]: e2eDefaultPassword,
  });
  e2eApiV1Iarena.setAuth(res.data!.token);
  return res;
}

export const e2eApiV1Iarena = new ApiV1IarenaReal(e2eApiV1ArenaUrl, {
  [Headers.TestEnv]: true,
  [Headers.TestEnvPassword]: e2eTestEnvPassword,
});

export const e2eApiV1DealsReal = new ApiV1DealsReal(e2eApiV1DealsUrl, {
  [Headers.TestEnv]: true,
  [Headers.TestEnvPassword]: e2eTestEnvPassword,
});

// Outputting cURL in console
curlirize(e2eApiV1Iarena.transport);
