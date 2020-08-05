/**
 * Test users
 */
import {IUser, UserRoles} from "./api_iarena/dtos/user";

export const e2eUserId1 = 1473;
export const e2eUserEmail1 = "test1@test.ru";
export const e2eUserPassword1 = "test";
export const e2eUserId2 = 1849;
export const e2eUserEmail2 = "test2@test.ru";
export const e2eUserPassword2 = "test";
export const e2eUserId3 = 1847;
export const e2eUserEmail3 = "test3@test.ru";
export const e2eUserPassword3 = "test";

/**
 * Mirko test user
 */
export const e2eDefaultUserId = 1241;
export const e2eDefaultUserEmail = "developeriarena@gmail.com";
export const e2eDefaultPassword = "123456789";

/**
 * New user for tests
 */
export const e2eNewUserId = 9999;
export const e2eNewUserEmail = "random@gmail.com";
export const e2eNewPassword = "123456789";
export const e2eWrongMail = "Undefined";

/**
 * Michail test user
 */
export const e2eUserId4 = 2144;
export const e2eUserEmail4 = "overbeat@mail.ru";
export const e2eUserPassword4 = "12345678";

/**
 * Julia test user
 */
export const e2eUserId5 = 2161;
export const e2eUserEmail5 = "lolpnon@mail.ru";
export const e2eUserPassword5 = "123456789";

/**
 * Valeriy test user
 */
export const e2eUserId6 = 2161;
export const e2eUserEmail6 = "valeriy.strechen@icloud.com";
export const e2eUserPassword6 = "Altcomlog23";

/**
 * Env test password to prevent actual data manipulation and do "fake" ones instead
 */
export const e2eTestEnvPassword = `%9GJB]qC=Z/u5&`;

/**
 * APIs endpoints
 */
export const e2eApiV1ArenaUrl = "https://iarena.azurewebsites.net/api/v1";
export const e2eApiV1DealsUrl = "https://iarena-orders-service.azurewebsites.net";
// export const e2eApiV1DealsUrl = "http://localhost:3000";

/**
 * Empty deal owner
 */
export const emptyOwner: IUser = {
  id: 1,
  balance: 0,
  rating: 0,
  email: "test@mail.ru",
  phone: null,
  location: null,
  ruiCode: null,
  companies: null,
  categories: [],
  role: UserRoles.Guest,
};

export const RC_AUTO_CATEGORY_ID = 112;
