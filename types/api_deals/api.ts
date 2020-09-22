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
import {AxiosInstance} from "axios";
import {
  IChatsCreateReq,
  IDealsDeleteReq,
  IDealsGetAllReq,
  IDealsGetOneReq,
  IFieldsReq,
  INotificationsReadReq,
  IQuotesGetAllReq,
  IUserDefinedFieldsCreateReq, IUserDefinedFieldUpdateReq,
  IUsersGetAllReq,
} from "./requests";
import {IDealData} from "./dtos/deal";
import {IQuoteData} from "./dtos/quote";
import {sqlId} from "../types";
import {ILabelFieldInstance, IUserDefinedFieldInstance} from "./dtos/user-defined-field";

export interface IAPIV1Deals {
  transport?: AxiosInstance;

  signOut(): void;

  setAuth(token?: string): void;

  chatsGetAll(): Promise<any>;

  chatsCreate(data: IChatsCreateReq): Promise<any>;

  dealsCreate(data: IDealData): Promise<IDealsCreateRes>;

  dealsDelete(data: IDealsDeleteReq): Promise<ICommonRes>;

  dealsGetOne(data: IDealsGetOneReq): Promise<IDealRes>;

  dealsGetAll(data?: IDealsGetAllReq): Promise<IDealsRes>;

  dealsAggregateByCategories(): Promise<IDealsAggregateByCategoriesRes>;

  dealsAggregateByUsers(data?: IUsersGetAllReq): Promise<IDealsAggregateByUsersRes>;

  createUserDefinedFields(data: IUserDefinedFieldsCreateReq): Promise<IDealsAddUserFields>;

  updateUserDefinedFields(fields: IUserDefinedFieldInstance[]): Promise<ICommonRes>;

  updateUserDefinedField(data: IUserDefinedFieldUpdateReq): Promise<ICommonRes>;

  searchUserDefinedFields(data?: IFieldsReq): Promise<IUserDefinedFieldsRes>;

  labelsDeleteOne(id: number): Promise<ICommonRes>;

  labelsEditOne(label: ILabelFieldInstance): Promise<ICommonRes>;

  labelsGetAll(): Promise<ILabelsRes>;

  getUserDefinedFields(data?: IFieldsReq): Promise<IUserDefinedFieldsRes>;

  getUserDefinedField(userDefinedFieldId: number): Promise<IUserDefinedFieldRes>;

  quotesCreate(data: IQuoteData): Promise<IQuoteRes>;

  quotesAccept(quoteId: sqlId): Promise<IQuoteRes>;

  quotesCancel(quoteId: sqlId): Promise<IQuoteRes>;

  quotesDecline(quoteId: sqlId): Promise<IQuoteRes>;

  quotesGetAll(data: IQuotesGetAllReq): Promise<IQuotesRes>;

  notificationsGetAll(): Promise<INotificationsRes>;

  notificationsRead(data?: INotificationsReadReq): Promise<ICommonRes>;
}

// Basic endpoints
export const API = "/api";
export const API_V1 = `${API}/v1`;
export const API_V2 = `${API}/v2`;
export const SWAGGER = "swagger";
export const SYSTEM = "system";

// User defined fields
export const USER_DEFINED_FIELDS = "user-defined-fields";
export const USER_DEFINED_FIELDS_SEARCH = "search";
export const USER_DEFINED_FIELDS_LABELS = "labels";

// Featured fields
export const FEATURED_FIELDS = "featured-fields";

// B2B fields
export const B2B_FIELDS = "b2b-fields";

// Deals
export const DEALS = "deals";
export const DEALS_AGGREGATE_BY_CATEGORIES = "aggregate-by-categories";
export const DEALS_AGGREGATE_BY_USERS = "aggregate-by-users";
export const DEALS_UPDATE_USER_FIELDS = "update-user-fields";

// Quotes
export const QUOTES = "quotes";
export const QUOTES_ACCEPT = "accept";
export const QUOTES_CANCEL = "cancel";
export const QUOTES_DECLINE = "decline";

// Notifications
export const NOTIFICATIONS = "notifications";
export const NOTIFICATIONS_READ = "read";

// wallet
export const WALLET = "wallet";
export const WALLET_CHARGE = "charge";
export const WALLET_BALANCE = "balance";
export const API_URL = "https://iarena.azurewebsites.net/";

export const CHATS = "chats";
export const USERS = "USERS";
