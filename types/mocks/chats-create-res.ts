import {commonRes} from "./common-res";
import {chatFields} from "../enums/forms/chat";

export const chatsCreateRes = {
  data: {
    [chatFields.members]: [1, 2],
    [chatFields.title]: "title",
    [chatFields.creatorUserId]: 1,
    [chatFields.messages]: [],
  },
  ...commonRes,
};
