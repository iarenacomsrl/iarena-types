import axios, {AxiosInstance, AxiosResponse} from "axios";
import {
  API_V1,
  CHATS,
  DEALS,
  DEALS_AGGREGATE_BY_CATEGORIES,
  DEALS_AGGREGATE_BY_USERS,
  IAPIV1Deals,
  NOTIFICATIONS,
  NOTIFICATIONS_READ,
  QUOTES,
  QUOTES_ACCEPT,
  QUOTES_CANCEL,
  QUOTES_DECLINE,
  SYSTEM,
  USER_DEFINED_FIELDS, USER_DEFINED_FIELDS_LABELS, USER_DEFINED_FIELDS_SEARCH,
} from "./api";
import {Headers} from "../enums/enums";
import {
  IChatsCreateReq,
  IDealsDeleteReq,
  IDealsGetAllReq,
  IDealsGetOneReq,
  IFieldsReq,
  INotificationsReadReq,
  IQuotesGetAllReq,
  IUserDefinedFieldsCreateReq,
  IUserDefinedFieldUpdateReq,
  IUsersGetAllReq,
} from "./requests";
import {
  ICommonRes,
  IDealRes,
  IDealsAddUserFields,
  IDealsAggregateByCategoriesRes,
  IDealsAggregateByUsersRes,
  IDealsCreateRes,
  IDealsRes, ILabelsRes,
  INotificationsRes,
  IQuoteRes,
  IQuotesRes,
  IUserDefinedFieldRes,
  IUserDefinedFieldsRes,
} from "./responses";
import {encodeBearerToken} from "../utils";
import {IDealData} from "./dtos/deal";
import {IQuoteData} from "./dtos/quote";
import {sqlId} from "../types";
import {ILabelFieldInstance, IUserDefinedFieldInstance} from "./dtos/user-defined-field";

export class ApiV1DealsReal implements IAPIV1Deals {
  transport: AxiosInstance;

  constructor(baseURL: string, headers: {} = {}) {
    this.transport = axios.create({baseURL, headers});
  }

  private static parseResponse(res: AxiosResponse) {
    return res.data;
  }

  signOut() {
    this.setAuth();
  }

  setAuth(token?: string) {
    if (!token) {
      delete this.transport.defaults.headers[Headers.Authorization];
      return;
    }
    this.transport.defaults.headers[Headers.Authorization] = encodeBearerToken(token);
  }

  status(): Promise<any> {
    return this.transport.get(SYSTEM).then(ApiV1DealsReal.parseResponse);
  }

  chatsGetAll(): Promise<any> {
    return this.transport.get(`${API_V1}/${CHATS}`).then(ApiV1DealsReal.parseResponse);
  }

  chatsCreate(data: IChatsCreateReq): Promise<any> {
    return this.transport.post(`${API_V1}/${CHATS}`, data).then(ApiV1DealsReal.parseResponse);
  }

  dealsCreate(data: IDealData): Promise<IDealsCreateRes> {
    return this.transport.post(`${API_V1}/${DEALS}`, data).then(ApiV1DealsReal.parseResponse);
  }

  dealsDelete(params: IDealsDeleteReq): Promise<ICommonRes> {
    return this.transport.delete(`${API_V1}/${DEALS}/${params.dealId}`).then(ApiV1DealsReal.parseResponse);
  }

  dealsGetAll(params: IDealsGetAllReq = {}): Promise<IDealsRes> {
    return this.transport.get(`${API_V1}/${DEALS}`, {params}).then(ApiV1DealsReal.parseResponse);
  }

  dealsGetOne(params: IDealsGetOneReq): Promise<IDealRes> {
    return this.transport.get(`${API_V1}/${DEALS}/${params.dealId}`, {params})
      .then(ApiV1DealsReal.parseResponse);
  }

  dealsAggregateByCategories(): Promise<IDealsAggregateByCategoriesRes> {
    return this.transport.get(`${API_V1}/${DEALS}/${DEALS_AGGREGATE_BY_CATEGORIES}`)
      .then(ApiV1DealsReal.parseResponse);
  }

  dealsAggregateByUsers(data?: IUsersGetAllReq): Promise<IDealsAggregateByUsersRes> {
    return this.transport.get(`${API_V1}/${DEALS}/${DEALS_AGGREGATE_BY_USERS}`).then(ApiV1DealsReal.parseResponse);
  }

  createUserDefinedFields(data: IUserDefinedFieldsCreateReq): Promise<IDealsAddUserFields> {
    return this.transport.post(`${API_V1}/${USER_DEFINED_FIELDS}`, data).then(ApiV1DealsReal.parseResponse);
  }

  updateUserDefinedFields(fields: IUserDefinedFieldInstance[]): Promise<ICommonRes> {
    return this.transport.put(`${API_V1}/${USER_DEFINED_FIELDS}`, fields).then(ApiV1DealsReal.parseResponse);
  }

  updateUserDefinedField(data: IUserDefinedFieldUpdateReq): Promise<ICommonRes> {
    return this.transport.put(`${API_V1}/${USER_DEFINED_FIELDS}/${data.field.id}`, data)
      .then(ApiV1DealsReal.parseResponse);
  }

  searchUserDefinedFields(params?: IFieldsReq): Promise<IUserDefinedFieldsRes> {
    return this.transport.get(`${API_V1}/${USER_DEFINED_FIELDS}/${USER_DEFINED_FIELDS_SEARCH}`, {params})
      .then(ApiV1DealsReal.parseResponse);
  }

  labelsDeleteOne(id: number): Promise<ICommonRes> {
    return this.transport.delete(`${API_V1}/${USER_DEFINED_FIELDS}/${USER_DEFINED_FIELDS_LABELS}/${id}`)
      .then(ApiV1DealsReal.parseResponse);
  }

  labelsEditOne(label: ILabelFieldInstance): Promise<ICommonRes> {
    return this.transport.put(`${API_V1}/${USER_DEFINED_FIELDS}/${USER_DEFINED_FIELDS_LABELS}`, label)
      .then(ApiV1DealsReal.parseResponse);
  }

  labelsGetAll(): Promise<ILabelsRes> {
    return this.transport.get(`${API_V1}/${USER_DEFINED_FIELDS}/${USER_DEFINED_FIELDS_LABELS}`)
      .then(ApiV1DealsReal.parseResponse);
  }

  getUserDefinedFields(params?: IFieldsReq): Promise<IUserDefinedFieldsRes> {
    return this.transport.get(`${API_V1}/${USER_DEFINED_FIELDS}`, {params})
      .then(ApiV1DealsReal.parseResponse);
  }

  getUserDefinedField(userDefinedFieldId: number): Promise<IUserDefinedFieldRes> {
    return this.transport.get(`${API_V1}/${USER_DEFINED_FIELDS}/${userDefinedFieldId}`)
      .then(ApiV1DealsReal.parseResponse);
  }

  quotesCreate(data: IQuoteData): Promise<IQuoteRes> {
    return this.transport.post(`${API_V1}/${QUOTES}`, data).then(ApiV1DealsReal.parseResponse);
  }

  quotesAccept(quoteId: sqlId): Promise<IQuoteRes> {
    return this.transport.put(`${API_V1}/${QUOTES}/${quoteId}/${QUOTES_ACCEPT}`).then(ApiV1DealsReal.parseResponse);
  }

  quotesCancel(quoteId: sqlId): Promise<IQuoteRes> {
    return this.transport.put(`${API_V1}/${QUOTES}/${quoteId}/${QUOTES_CANCEL}`).then(ApiV1DealsReal.parseResponse);
  }

  quotesDecline(quoteId: sqlId): Promise<IQuoteRes> {
    return this.transport.put(`${API_V1}/${QUOTES}/${quoteId}/${QUOTES_DECLINE}`).then(ApiV1DealsReal.parseResponse);
  }

  quotesGetAll(params: IQuotesGetAllReq): Promise<IQuotesRes> {
    return this.transport.get(`${API_V1}/${QUOTES}`, {params}).then(ApiV1DealsReal.parseResponse);
  }

  notificationsGetAll(): Promise<INotificationsRes> {
    return this.transport.get(`${API_V1}/${NOTIFICATIONS}`).then(ApiV1DealsReal.parseResponse);
  }

  notificationsRead(data: INotificationsReadReq = {}): Promise<ICommonRes> {
    return this.transport.put(`${API_V1}/${NOTIFICATIONS}/${NOTIFICATIONS_READ}`, data)
      .then(ApiV1DealsReal.parseResponse);
  }
}
