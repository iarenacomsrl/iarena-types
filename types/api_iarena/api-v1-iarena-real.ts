import axios, {AxiosInstance, AxiosResponse} from "axios";
import {IAPIV1IArena} from "./api";
import {Headers} from "../enums/enums";
import {
  CreateSubscriptionParams,
  IB2BAnswerQuestionsReq,
  IB2BQuestionsReq,
  IChangePasswordReq,
  ICompaniesReq,
  IFieldsReq,
  IForgotPasswordReq,
  ISendEmailReq,
  ISignInReq,
  ISignUpClientReq,
  ISignUpReq,
  IUserQuestionsReq,
  RetryInvoiceParams,
} from "./requests";
import {
  CreateCustomerResponse,
  IAttachmentRes,
  Ib2bPartnersRes,
  IB2BProductsRes,
  IB2BQuestionFieldsRes,
  IBaseFieldsRes,
  ICategoriesRes,
  ICommonRes,
  ICompaniesRes,
  IGetAutoQuoteRes,
  IOldDealsGetAllRes,
  ISignInRes,
  ISignUpRes,
  IUsersInfoRes,
  IValidateTokenRes,
} from "./responses";
import {sqlId} from "../types";
import {encodeBearerToken} from "../utils";
import {IUser} from "./dtos/user";
import {ICoupon, IInvoice, Subscription} from "./dtos/customer";
import {HttpParams} from "@angular/common/http";


export class ApiV1IarenaReal implements IAPIV1IArena {
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

  validateToken(token: string): Promise<IValidateTokenRes> {
    return this.transport.post("/validate-token", {}, {params: {token}}).then(ApiV1IarenaReal.parseResponse);
  }

  signIn(data: ISignInReq): Promise<ISignInRes> {
    return this.transport.post("/account/sign-in", data).then(ApiV1IarenaReal.parseResponse);
  }

  signUp(data: ISignUpReq): Promise<ISignUpRes> {
    return this.transport.post("/account/sign-up", data).then(ApiV1IarenaReal.parseResponse);
  }

  companies(data: ICompaniesReq = {q: ""}): Promise<ICompaniesRes> {
    return this.transport.post("/account/companies", data).then(ApiV1IarenaReal.parseResponse);
  }

  usersCompanies(): Promise<ICompaniesRes> {
    return this.transport.get("/user/companies").then(ApiV1IarenaReal.parseResponse);
  }

  changePassword(data: IChangePasswordReq): Promise<ICommonRes> {
    return this.transport.post("/account/change-password", data).then(ApiV1IarenaReal.parseResponse);
  }

  forgotPassword(data: IForgotPasswordReq): Promise<ICommonRes> {
    return this.transport.post("/account/forgot-password", data).then(ApiV1IarenaReal.parseResponse);
  }

  signUpClient(data: ISignUpClientReq): Promise<ICommonRes> {
    return this.transport.post("/account/sign-up-client", data).then(ApiV1IarenaReal.parseResponse);
  }

  categories(): Promise<ICategoriesRes> {
    return this.transport
      .get("/filter/interest-areas", {
        params: {
          page: 0,
          size: 208,
        },
      })
      .then(ApiV1IarenaReal.parseResponse);
  }

  // TODO: Mirko, describe, what is it for
  negotiationGenerateDealForm(categoryId: sqlId): Promise<IB2BQuestionFieldsRes> {
    return this.transport
      .get("/negotiation/generate-deal-form", {params: {category_id: categoryId}})
      .then(ApiV1IarenaReal.parseResponse);
  }

  b2bPartners(categoryId: sqlId): Promise<Ib2bPartnersRes> {
    return this.transport.get(`/b2b/${categoryId}/partners`).then(ApiV1IarenaReal.parseResponse);
  }

  b2bAllProducts(categoryId: sqlId): Promise<Ib2bPartnersRes> {
    return this.transport.get(`/b2b/${categoryId}/allProducts`).then(ApiV1IarenaReal.parseResponse);
  }

  b2bGetQuestions(data: IB2BQuestionsReq): Promise<IB2BQuestionFieldsRes> {
    return this.transport
      .get(`/b2b/${data.partnerId}/${data.categoryId}/question-fields`)
      .then(ApiV1IarenaReal.parseResponse);
  }

  b2bAnswerQuestions(partnerId: sqlId, data: IB2BAnswerQuestionsReq): Promise<ICommonRes> {
    return this.transport.post(`/b2b/${partnerId}/answer-questions`, data.sectionItems)
      .then(ApiV1IarenaReal.parseResponse);
  }

  b2bAnswerQuestionsAdapted(partnerId: sqlId, data: IB2BAnswerQuestionsReq): Promise<ICommonRes> {
    return this.transport.post(`/b2b/${partnerId}/answer-questions-adapted`, data.sectionItems)
      .then(ApiV1IarenaReal.parseResponse); // update-sections
  }

  b2bGetProducts(partnerId: sqlId): Promise<IB2BProductsRes> {
    return this.transport.get(`/b2b/${partnerId}/products`).then(ApiV1IarenaReal.parseResponse);
  }

  b2bGetAutoQuote(partnerId: sqlId, quotationId: sqlId): Promise<IGetAutoQuoteRes> {
    return this.transport.get(`/b2b/${partnerId}/${quotationId}/rates`).then(ApiV1IarenaReal.parseResponse);
  }

  // Save the quotation on the partner application by assigning a name, an operation necessary after the generation of a rate
  saveAsDraftQuotation(quotationId: sqlId, title: string) {
    return this.transport.get(`/cover-holder/${quotationId}/${title}/save-as-draft-quotation`).then(ApiV1IarenaReal.parseResponse);
  }

  externalOrderCreate(dealId: sqlId): Promise<ICommonRes> {
    return this.transport.post("/external/order/create", {dealId}).then(ApiV1IarenaReal.parseResponse);
  }

  usersInfo(userIds: sqlId[]): Promise<IUsersInfoRes> {
    return this.transport.post("/users/info", userIds).then(ApiV1IarenaReal.parseResponse);
  }

  updateUserInfo(data: IUser): Promise<IUsersInfoRes> {
    return this.transport.post("/user/update-info", data).then(ApiV1IarenaReal.parseResponse);
  }

  oldDealsGetAll(userId: sqlId): Promise<IOldDealsGetAllRes> {
    return this.transport.get(`/user/${userId}/deals`).then(ApiV1IarenaReal.parseResponse);
  }

  addUpdateQuestions(questions: IFieldsReq): Promise<ICommonRes> {
    return this.transport.post("/user/add-update-questions", questions).then(ApiV1IarenaReal.parseResponse);
  }

  uploadAttachment(formData: any): Promise<IAttachmentRes> {
    return this.transport.post("/attachment", formData);
  }

  deleteQuestions(input: IUserQuestionsReq): Promise<ICommonRes> {
    return this.transport.post("/user/delete-questions", input).then(ApiV1IarenaReal.parseResponse);
  }

  allQuestions(categoryId: sqlId): Promise<IBaseFieldsRes> {
    return this.transport
      .get("/user/all-questions", {params: {id_category: categoryId}})
      .then(ApiV1IarenaReal.parseResponse);
  }

  questions(input: IUserQuestionsReq): Promise<IBaseFieldsRes> {
    return this.transport.post("/user/questions", input).then(ApiV1IarenaReal.parseResponse);
  }

  uploadUserFile(formData: any): Promise<IAttachmentRes> {
    return this.transport.post("/users/files", formData);
  }

  uploadUserAvatar(formData: any): Promise<IAttachmentRes> {
    return this.transport.post("/users/upload-avatar", formData);
  }

  sendEmail(data: ISendEmailReq): Promise<ICommonRes> {
    return this.transport.get("/sendGrid/send-email").then(ApiV1IarenaReal.parseResponse);
  }

  // resend confirmation email
  resendEmail(token: string): Promise<IValidateTokenRes> {
    return this.transport.post("/account/resend-email", {}, {headers: this.transport.defaults.headers[Headers.Authorization] = encodeBearerToken(token)}).then(ApiV1IarenaReal.parseResponse);
  }

  createPaymentIntent(id: string) {
    return this.transport.post(`/stripe/${id}/create-payment-intent`, {})
      .catch(ApiV1IarenaReal.parseResponse)
      .then((r: any) => r.clientSecret);
  }

  createCustomer(): Promise<CreateCustomerResponse> {
    return this.transport.post("/stripe/create-customer", {})
      .catch(ApiV1IarenaReal.parseResponse) as unknown as Promise<CreateCustomerResponse>;
  }

  createSubscription(params: CreateSubscriptionParams): Promise<Subscription> {
    return this.transport.post("/stripe/create-subscription", params)
      .catch(ApiV1IarenaReal.parseResponse) as unknown as Promise<Subscription>;
  }

  validateCoupon(coupon: string): Promise<ICoupon> {
    const params = new HttpParams().set("coupon", coupon);
    return this.transport.post("/stripe/validate-coupon?" + params.toString()).then(ApiV1IarenaReal.parseResponse)
      .catch(ApiV1IarenaReal.parseResponse);

  }

  retryInvoice(params: RetryInvoiceParams): Promise<IInvoice> {
    return this.transport.post("/stripe/retry-invoice", params)
      .catch(ApiV1IarenaReal.parseResponse);
  }
}
