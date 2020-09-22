import {commonRes} from "./common-res";
import {IUsersInfoRes} from "../api_iarena/responses";
import {
  e2eDefaultUserEmail,
  e2eDefaultUserId,
  e2eUserEmail1,
  e2eUserEmail2,
  e2eUserEmail3,
  e2eUserId1,
  e2eUserId2,
  e2eUserId3,
} from "../constants";
import {UserRoles} from "../api_iarena/dtos/user";

export const usersInfoRes: IUsersInfoRes = {
  count: 4,
  data: [
    {
      id: e2eUserId1,
      fullName: e2eUserEmail1,
      categories: [],
      ruiCode: null,
      email: "test@mail.ru",
      phone: "345 5534567",
      location: "Milano",
      rating: 2,
      companies: null,
      balance: 0,
      role: UserRoles.Guest,
      email_verified: true
    },
    {
      id: e2eUserId2,
      fullName: e2eUserEmail2,
      categories: [],
      rating: 4,
      balance: 55,
      ruiCode: "E786613671",
      email: "test@mail.ru",
      phone: "345 5534567",
      companies: null,
      location: "Milano",
      role: UserRoles.Guest,
      email_verified: true
    },
    {
      id: e2eUserId3,
      fullName: e2eUserEmail3,
      categories: [],
      rating: 5,
      balance: 10,
      ruiCode: "E786613671",
      email: "test@mail.ru",
      phone: "345 5534567",
      companies: null,
      location: "Milano",
      role: UserRoles.Guest,
      email_verified: true
    },
    {
      id: e2eDefaultUserId,
      fullName: e2eDefaultUserEmail,
      categories: [],
      rating: 4,
      balance: 1000,
      ruiCode: "E786893671",
      email: "test@mail.ru",
      phone: "345 5534567",
      location: "Milano",
      companies: null,
      role: UserRoles.Admin,
      email_verified: true
    },
  ],
  ...commonRes,
};
