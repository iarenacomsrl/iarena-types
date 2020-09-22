import {commonRes} from "./common-res";
import {ISignInRes} from "../api_iarena/responses";
import {e2eUserEmail1, e2eUserId1} from "../constants";
import {UserRoles} from "../api_iarena/dtos/user";

export const signInRes: ISignInRes = {
  data: {
    id: e2eUserId1,
    rating: 0,
    balance: 12,
    email: "test@mail.ru",
    location: "Milano",
    phone: "89219749271",
    fullName: e2eUserEmail1,
    avatar: "https://cdnarena.blob.core.windows.net/avatar/-524641113.png",
    categories: [],
    ruiCode: "E786613671",
    companies: null,
    token: "JWT string",
    role: UserRoles.Guest,
    email_verified: true
  },
  ...commonRes,
};
