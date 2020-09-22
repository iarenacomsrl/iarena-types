import {IAPIV1IArena} from "./api";
import {commonRes} from "../mocks/common-res";
import {
  CreateSubscriptionParams,
  IB2BAnswerQuestionsReq,
  IB2BQuestionsReq,
  IChangePasswordReq,
  ICompaniesReq,
  IFieldsReq,
  IForgotPasswordReq,
  ISendEmailReq,
  ISignUpClientReq,
  ISignUpReq,
  IUserQuestionsReq,
  IUsersPhotoUploadReq, RetryInvoiceParams,
} from "./requests";
import {
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
import {categoriesRes} from "../mocks/categories-res";
import {negotiationGenerateDealForm} from "../mocks/negotiation-generate-deal-form-res";
import {signInRes} from "../mocks/sign-in-res";
import {coverHolderProductsRes} from "../mocks/cover-holder-products-res";
import {companiesRes} from "../mocks/companies-res";
import {sqlId} from "../types";
import {validateTokenRes} from "../mocks/validate-token-res";
import {usersInfoRes} from "../mocks/users-info-res";
import {baseFieldsRes} from "../mocks/base-fields-res";
import {dealsGetAllRes} from "../mocks/deals-get-all-res";
import {b2bPartnersRes} from "../mocks/b2b-partners-res";
import {IUser} from "./dtos/user";
import {IInvoice} from "./dtos/customer";

const API_MOCK_DELAY = 600;

export class ApiV1IarenaMock implements IAPIV1IArena {
  signOut() {
  }

  setAuth(token?: string) {
  }

  async oldDealsGetAll(userId: sqlId): Promise<IOldDealsGetAllRes> {
    return this.delay(dealsGetAllRes);
  }

  async validateToken(token: string): Promise<IValidateTokenRes> {
    return this.delay(validateTokenRes(token));
  }

  async signIn(params: ISignUpReq): Promise<ISignInRes> {
    return this.delay(signInRes);
  }

  async signUp(params: ISignUpReq): Promise<ISignUpRes> {
    return this.delay(signInRes);
  }

  async signUpClient(params: ISignUpClientReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async categories(): Promise<ICategoriesRes> {
    return this.delay(categoriesRes);
  }

  async changePassword(params: IChangePasswordReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async forgotPassword(params: IForgotPasswordReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async companies(params: ICompaniesReq): Promise<ICompaniesRes> {
    return this.delay(companiesRes);
  }

  async usersCompanies(): Promise<ICompaniesRes> {
    return this.delay(companiesRes);
  }

  async b2bGetQuestions(data: IB2BQuestionsReq): Promise<IB2BQuestionFieldsRes> {
    return this.delay(negotiationGenerateDealForm);
  }

  async negotiationGenerateDealForm(categoryId: number): Promise<IB2BQuestionFieldsRes> {
    return this.delay(negotiationGenerateDealForm);
  }

  async b2bAnswerQuestions(partnerId: sqlId, data: IB2BAnswerQuestionsReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async b2bGetProducts(): Promise<IB2BProductsRes> {
    return this.delay(coverHolderProductsRes);
  }

  async b2bGetAutoQuote(partnerId: sqlId, quotationId: sqlId): Promise<IGetAutoQuoteRes> {
    return this.delay(commonRes);
  }

  async externalOrderCreate(dealId: sqlId): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async usersInfo(userIds: sqlId[]): Promise<IUsersInfoRes> {
    return this.delay(usersInfoRes);
  }

  async addUpdateQuestions(questions: IFieldsReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async uploadAttachment(formData: any): Promise<IAttachmentRes> {
    return this.delay(commonRes);
  }

  async allQuestions(id_category: number): Promise<IBaseFieldsRes> {
    return this.delay(baseFieldsRes);
  }

  async deleteQuestions(input: IUserQuestionsReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async questions(input: IUserQuestionsReq): Promise<IBaseFieldsRes> {
    return this.delay(baseFieldsRes);
  }

  async uploadUserFile(data: IUsersPhotoUploadReq): Promise<IAttachmentRes> {
    return this.delay(commonRes);
  }

  async uploadUserAvatar(data: IUsersPhotoUploadReq): Promise<IAttachmentRes> {
    return this.delay(commonRes);
  }

  async updateUserInfo(data: IUser): Promise<IUsersInfoRes> {
    return this.delay(usersInfoRes);
  }

  async b2bPartners(categoryId: sqlId): Promise<Ib2bPartnersRes> {
    return this.delay(b2bPartnersRes);
  }

  async sendEmail(data: ISendEmailReq): Promise<ICommonRes> {
    return this.delay(commonRes);
  }

  async b2bAllProducts(categoryId: sqlId): Promise<Ib2bPartnersRes> {
    return this.delay(b2bPartnersRes);
  }

  private delay<T>(data: any): Promise<T> {
    return new Promise(res => setTimeout(() => res(data), API_MOCK_DELAY));
  }

  async createPaymentIntent(id: string) {
    return Promise.resolve();
  }

  createCustomer(): Promise<any> {
    return Promise.resolve(null);
  }

  createSubscription(params: CreateSubscriptionParams): Promise<any> {
    return Promise.resolve(null);
  }

  validateCoupon(coupon: string): Promise<any> {
    return Promise.resolve(null);
  }

  retryInvoice(params: RetryInvoiceParams): Promise<IInvoice> {
    return Promise.resolve(null);
  }

  async resendEmail(token: string): Promise<IValidateTokenRes> {
    return this.delay(validateTokenRes(token));
  }
}
