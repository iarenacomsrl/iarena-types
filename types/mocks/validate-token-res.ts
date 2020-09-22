import {commonRes} from "./common-res";
import {IValidateTokenRes} from "../api_iarena/responses";
import {e2eDefaultUserId} from "../constants";
import {UserRoles} from "../api_iarena/dtos/user";

export function validateTokenRes(tokenLikeId: string): IValidateTokenRes {
  const userId = parseInt(tokenLikeId, 10);
  return {
    data: {
      user: {
        id: isNaN(userId) ? e2eDefaultUserId : userId,
        rating: 0,
        balance: 12,
        ruiCode: "E786613671",
        fullName: "John Doe",
        email: "test@mail.ru",
        phone: null,
        location: null,
        companies: null,
        categories: [],
        role: UserRoles.Guest,
        email_verified: true
      },
    },
    ...commonRes,
  };
}
