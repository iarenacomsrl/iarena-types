import {
  IB2BQuestionsReq,
  IChangePasswordReq,
  ICompaniesReq,
  IB2BAnswerQuestionsReq,
  IFieldsReq,
  IForgotPasswordReq,
  ISendEmailReq,
  ISignInReq,
  ISignUpClientReq,
  ISignUpReq,
  IUserQuestionsReq,
  IUsersPhotoUploadReq,
} from "./requests";
import {
  Ib2bPartnersRes,
  IBaseFieldsRes,
  ICategoriesRes,
  ICommonRes,
  ICompaniesRes,
  IB2BProductsRes,
  IB2BQuestionFieldsRes,
  IOldDealsGetAllRes,
  ISignInRes,
  ISignUpRes,
  IUsersInfoRes,
  IValidateTokenRes, IGetAutoQuoteRes, IAttachmentRes,
} from "./responses";
import {AxiosInstance} from "axios";
import {sqlId} from "../types";
import {IUser} from "./dtos/user";

export interface IAPIV1IArena {
  transport?: AxiosInstance;

  signOut(): any;

  setAuth(token?: string): any;

  uploadUserFile(formData: any): Promise<IAttachmentRes>;

  uploadUserAvatar(formData: any): Promise<IAttachmentRes>;

  /**
   * Getting question form fields from specific partner
   */
  b2bGetQuestions(data: IB2BQuestionsReq): Promise<IB2BQuestionFieldsRes>;

  negotiationGenerateDealForm(categoryId: sqlId): Promise<IB2BQuestionFieldsRes>;

  /**
   * Getting list of partners by category
   */
  b2bPartners(categoryId: sqlId): Promise<Ib2bPartnersRes>;

  b2bAllProducts(categoryId: sqlId): Promise<Ib2bPartnersRes>;

  /**
   * Set answers to cover-holder questions
   */
  b2bAnswerQuestions(partnerId: sqlId, data: IB2BAnswerQuestionsReq): Promise<ICommonRes>;

  b2bGetProducts(partnerId: sqlId): Promise<IB2BProductsRes>; // TODO: Add array support

  b2bGetAutoQuote(partnerId: sqlId, quotationId: sqlId): Promise<IGetAutoQuoteRes>;

  /**
   * Getting deals, stored in old DB
   */
  oldDealsGetAll(userId: sqlId): Promise<IOldDealsGetAllRes>;

  externalOrderCreate(dealId: sqlId): Promise<ICommonRes>;

  categories(): Promise<ICategoriesRes>;

  forgotPassword(data: IForgotPasswordReq): Promise<ICommonRes>;

  changePassword(data: IChangePasswordReq): Promise<ICommonRes>;

  updateUserInfo(data: IUser): Promise<IUsersInfoRes>;

  companies(data?: ICompaniesReq): Promise<ICompaniesRes>;

  signIn(data: ISignInReq): Promise<ISignInRes>;

  signUp(data: ISignUpReq): Promise<ISignUpRes>;

  signUpClient(data: ISignUpClientReq): Promise<ICommonRes>;

  validateToken(token: string): Promise<IValidateTokenRes>;

  /**
   * Add or Update a list of questions depending of a specific category of risk, status and version.
   */
  addUpdateQuestions(questions: IFieldsReq): Promise<ICommonRes>;

  /**
   * Upload attachment with form-data encoding
   */
  uploadAttachment(formData: any): Promise<IAttachmentRes>;

  /**
   * Delete a list of questions depending of the category , status and version.
   */
  deleteQuestions(input: IUserQuestionsReq): Promise<ICommonRes>;

  /**
   * Return all the users's lists of questions related at a category.
   */
  allQuestions(id_category: sqlId): Promise<IBaseFieldsRes>;

  /**
   * Return the users's list of questions related at a category ,status and version.
   */
  questions(input: IUserQuestionsReq): Promise<IBaseFieldsRes>;

  /**
   * Return the users's companies
   */
  usersCompanies(): Promise<ICompaniesRes>;

  /**
   * Return information about users
   */
  usersInfo(userIds: sqlId[]): Promise<IUsersInfoRes>;

  /**
   * Sending email to the user
   */
  sendEmail(data: ISendEmailReq): Promise<ICommonRes>;
}
