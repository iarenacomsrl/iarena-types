import {commonRes} from "./common-res";
import {INotificationsRes} from "../api_deals/responses";
import {NotificationTypes} from "../api_deals/dtos/notification";
import {dealsGetAllRes} from "./deals-get-all-res";

export const notificationsGetAllRes: INotificationsRes = {
  data: [{
    date: new Date(),
    notifications: [
      {
        id: 1,
        userId: 1,
        title: "Notification basic",
        type: NotificationTypes.Basic,
        isRead: false,
        createdAt: new Date(),
      },
      {
        id: 2,
        userId: 2,
        title: "Quote status has changed",
        type: NotificationTypes.QuoteStatusChange,
        isRead: true,
        dealId: dealsGetAllRes.data![0].id,
        createdAt: new Date(),
      },
      {
        id: 3,
        userId: 3,
        title: "You got a new quote",
        type: NotificationTypes.NewQuote,
        isRead: false,
        dealId: dealsGetAllRes.data![2].id,
        createdAt: new Date(),
      },
    ],
  }],
  count: 4,
  ...commonRes,
};
