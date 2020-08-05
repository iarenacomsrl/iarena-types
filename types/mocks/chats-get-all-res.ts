import {commonRes} from "./common-res";
import {messageFields} from "../enums/forms/message";
import {MessageStatuses} from "../api_deals/dtos/chat";
import {chatFields} from "../enums/forms/chat";

export const chatsGetAllRes = {
  count: 10,
  data: [
    {
      [chatFields.title]: "Chat title",
      [chatFields.members]: [1, 2],
      [chatFields.creatorUserId]: 1,
      [chatFields.messages]: [
        {
          [messageFields.text]:
            "Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",
          [messageFields.status]: MessageStatuses.New,
          [messageFields.fromUserId]: 1,
        },
        {
          [messageFields.text]:
            "Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",
          [messageFields.status]: MessageStatuses.New,
          [messageFields.fromUserId]: 1,
        },
        {
          [messageFields.text]: "Hello, how are you?",
          [messageFields.status]: MessageStatuses.New,
          [messageFields.fromUserId]: 1,
        },
        {
          [messageFields.text]: "Hey looks at that pic I just found!",
          [messageFields.status]: MessageStatuses.New,
          [messageFields.fromUserId]: 2,
        },
        {
          [messageFields.text]: "What do you mean by that?",
          [messageFields.status]: MessageStatuses.New,
          [messageFields.fromUserId]: 2,
        },
        {
          [messageFields.text]: "Attached is an archive I mentioned",
          [messageFields.status]: MessageStatuses.New,
          [messageFields.fromUserId]: 2,
        },
      ],
    },
  ],
  ...commonRes,
};
