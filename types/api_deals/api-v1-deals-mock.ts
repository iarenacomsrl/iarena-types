import {IAPIV1Deals} from "./api";
import {
  ICommonRes,
  IDealRes,
  IDealsAggregateByCategoriesRes,
  IDealsAggregateByUsersRes,
  IDealsRes, ILabelsRes,
  INotificationsRes,
  IQuoteRes,
  IQuotesRes,
  IUserDefinedFieldRes,
  IUserDefinedFieldsRes,
} from "./responses";
import {chatsGetAllRes} from "../mocks/chats-get-all-res";
import {dealsCreateRes} from "../mocks/deals-create-res";
import {quotesGetAllRes} from "../mocks/quotes-get-all-res";
import {quoteCreateRes} from "../mocks/quote-create-res";
import {dealsGetAllRes} from "../mocks/deals-get-all-res";
import {
  IChatsCreateReq,
  IDealsDeleteReq,
  IFieldsReq,
  IQuotesGetAllReq,
  IUserDefinedFieldsCreateReq, IUserDefinedFieldUpdateReq,
  IUsersGetAllReq,
} from "./requests";
import {chatsCreateRes} from "../mocks/chats-create-res";
import {dealsCountByCategoriesRes} from "../mocks/deals-count-by-categories-res";
import {dealsGetOneRes} from "../mocks/deals-get-one-res";
import {commonRes} from "../mocks/common-res";
import {IDealData} from "./dtos/deal";
import {IQuoteData} from "./dtos/quote";
import {sqlId} from "../types";
import {notificationsGetAllRes} from "../mocks/notifications-get-all-res";
import {ILabelFieldInstance, IUserDefinedFieldInstance} from "./dtos/user-defined-field";

const API_MOCK_DELAY = 600;

export class ApiV1DealsMock implements IAPIV1Deals {
  signOut() {
  }

  setAuth(token?: string) {
  }

  async chatsGetAll(): Promise<any> {
    return this.delay(chatsGetAllRes);
  }

  async chatsCreate(data: IChatsCreateReq): Promise<any> {
    return this.delay(chatsCreateRes);
  }

  async dealsCreate(data: IDealData): Promise<IDealRes> {
    return this.delay(dealsCreateRes);
  }

  async dealsDelete(data: IDealsDeleteReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async dealsGetAll(): Promise<IDealsRes> {
    return this.delay(dealsGetAllRes);
  }

  async dealsGetOne(): Promise<IDealRes> {
    return this.delay(dealsGetOneRes);
  }

  async dealsAggregateByCategories(): Promise<IDealsAggregateByCategoriesRes> {
    return this.delay(dealsCountByCategoriesRes);
  }

  async dealsAggregateByUsers(data?: IUsersGetAllReq): Promise<IDealsAggregateByUsersRes> {
    return this.delay(undefined);
  }

  async createUserDefinedFields(data: IUserDefinedFieldsCreateReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async updateUserDefinedFields(fields: IUserDefinedFieldInstance[]): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async updateUserDefinedField(data: IUserDefinedFieldUpdateReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async searchUserDefinedFields(data?: IFieldsReq): Promise<IUserDefinedFieldsRes> {
    return this.delay(commonRes);
  }

  async labelsDeleteOne(id: number): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async labelsEditOne(label: ILabelFieldInstance): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async labelsGetAll(): Promise<ILabelsRes> {
    return this.delay(commonRes);
  }

  async getUserDefinedFields(data?: IFieldsReq): Promise<IUserDefinedFieldsRes> {
    return this.delay(commonRes);
  }

  async getUserDefinedField(fieldId: number): Promise<IUserDefinedFieldRes> {
    return this.delay(commonRes);
  }

  async quotesCreate(data: IQuoteData): Promise<IQuoteRes> {
    return this.delay(quoteCreateRes);
  }

  async quotesAccept(quoteId: sqlId): Promise<IQuoteRes> {
    return this.delay(undefined);
  }

  async quotesCancel(quoteId: sqlId): Promise<IQuoteRes> {
    return this.delay(undefined);
  }

  async quotesDecline(quoteId: sqlId): Promise<IQuoteRes> {
    return this.delay(undefined);
  }

  async quotesGetAll(data: IQuotesGetAllReq): Promise<IQuotesRes> {
    return this.delay(quotesGetAllRes);
  }

  async notificationsGetAll(): Promise<INotificationsRes> {
    return this.delay(notificationsGetAllRes);
  }

  async notificationsRead(): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  private delay<T>(data: any): Promise<T> {
    return new Promise(res => setTimeout(() => res(data), API_MOCK_DELAY));
  }
}
