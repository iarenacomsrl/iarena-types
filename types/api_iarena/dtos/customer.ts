
export interface Customer {
  id?: string
  object?: string
  address?: Address
  balance?: number
  created?: Date
  currency?: string
  default_source?: ExpandableField<IPaymentSource>
  default_source_type?: string
  deleted?: boolean
  delinquent?: boolean
  description?: string
  discount?: Discount
  email?: string
  invoice_prefix?: string
  invoice_settings?: CustomerInvoiceSettings
  livemode?: boolean
  metadata?: any
  name?: string
  next_invoice_sequence?: number
  phone?: string
  preferred_locales?: Array<string>
  shipping?: any;
  sources?: StripeList<IPaymentSource>
  subscriptions?: StripeList<Subscription>
  tax_exempt?: string
  tax_ids?: StripeList<TaxId>
}

export interface Address {
  city?: string
  country?: string
  line1?: string
  line2?: string
  postal_code?: string
  state?: string
}

export interface ExpandableField<T> {
  id?: string
  expandedObject?: T
}

export interface StripeResponse {
  statusCode?: number
  headers?: any;
  content?: string
  date?: Date
  idempotencyKey?: string
  requestId?: string
}

export interface IPaymentSource {
  stripeResponse?: StripeResponse
  id?: string
  object?: string
}

export interface Discount {
  id?: string
  object?: string
  coupon?: any;
  customer?: ExpandableField<Customer>
  deleted?: boolean
  end?: Date
  invoice?: string
  invoice_item?: string
  promotion_code?: ExpandableField<any>
  start?: Date
  subscription?: ExpandableField<any>
}

export interface CustomerInvoiceSettings {
  custom_fields?: Array<CustomerInvoiceSettingsCustomField>
  default_payment_method?: ExpandableField<PaymentMethod>
  footer?: string
}

export interface CustomerInvoiceSettingsCustomField {
  name: string
  value: string
}

export interface PaymentMethod {
  id?: string
  object?: string
  alipay?: any;
  au_becs_debit?: any;
  bacs_debit?: any;
  bancontact?: any;
  billing_details?: PaymentMethodBillingDetails
  card?: PaymentMethodCard
  card_present?: any;
  created?: Date
  customer?: ExpandableField<Customer>
  eps?: any;
  fpx?: any;
  giropay?: any;
  ideal?: any;
  interac_present?: any;
  livemode?: boolean
  metadata?: any
  p24?: any;
  sepa_debit?: any;
  type?: string
}

export interface PaymentMethodBillingDetails {
  address: Address;
  email: string
  name: string
  phone: string
}

export interface 	PaymentMethodCard  {
  brand? : string
  checks? : any;
  country? : string
  description? : string
  exp_month? : number
  exp_year? : number
  fingerprint? : string
  funding? : string
  iin? : string
  issuer? : string
  last4? : string
  networks? : any;
  three_d_secure_usage? : any;
  wallet? : any;
}

export interface  StripeList<T> {
  object? : string
  data? : Array<T>;
  has_more? : boolean
  url? : string
}

export interface  Subscription {
  id? : string
  object? : string
  application_fee_percent? : number
  billing_cycle_anchor? : Date
  billing_thresholds? : SubscriptionBillingThresholds
  cancel_at? : Date
  cancel_at_period_end? : boolean
  canceled_at? : Date
  collection_method? : string
  created? : Date
  current_period_end? : Date
  current_period_start? : Date
  customer? : ExpandableField<Customer>
  days_until_due? : number
  default_payment_method? : ExpandableField<PaymentMethod>
  default_source? : ExpandableField<IPaymentSource>
  default_tax_rates? : Array<any>
  discount? : Discount
  ended_at? : Date
  items? : StripeList<SubscriptionItem>
  latest_invoice? : ExpandableField<any>
  livemode? : boolean
  metadata? : any
  next_pending_invoice_item_invoice? : Date
  pause_collection? : any
  pending_invoice_item_interval? : any
  pending_setup_intent? : ExpandableField<any>
  pending_update? : any
  schedule? : ExpandableField<any>
  start_date? : Date
  status? : string
  transfer_data? : any
  trial_end? : Date
  trial_start? : Date
}

export interface SubscriptionBillingThresholds  {
  amount_gte? : number
  reset_billing_cycle_anchor? : boolean
}

export interface  SubscriptionItem {
  id? : string
  object? : string
  billing_thresholds? : any
  created? : Date
  deleted? : boolean
  metadata? : any
  plan? : any
  price? : any
  quantity? : number
  subscription? : string
  tax_rates? : Array<any>
}

export interface TaxId  {
  id? : string
  object? : string
  country? : string
  created? : Date
  customer? : ExpandableField<Customer>
  deleted? : boolean
  livemode? : boolean
  type? : string
  value? : string
  verification? : any;
}

/**
 * A coupon contains information about a percent-off or amount-off discount you might want to apply to a customer.
 * Coupons only apply to invoices; they do not apply to one-off charges.
 */
export interface ICoupon extends IResourceObject {
  /**
   * Value is 'coupon'
   */
  object: 'coupon';

  /**
   * Amount (in the currency specified) that will be taken off the subtotal of any invoices for this customer.
   */
  amount_off: number;

  created: number;

  /**
   * If amount_off has been set, the currency of the amount to take off.
   */
  currency: string;

  /**
   * One of "forever", "once", and "repeating". Describes how long a customer who applies this coupon will get the discount.
   */
  duration: 'forever' | 'once' | 'repeating';

  /**
   * If duration is repeating, the number of months the coupon applies. Null if coupon duration is forever or once.
   */
  duration_in_months: number;

  livemode: boolean;

  /**
   * Maximum number of times this coupon can be redeemed, in total, before it is no longer valid.
   */
  max_redemptions: number;

  metadata: IMetadata;

  /**
   * Name of the coupon displayed to customers on for instance invoices or receipts.
   */
  name: string;

  /**
   * Percent that will be taken off the subtotal of any invoices for this customer for the duration
   * of the coupon. For example, a coupon with percent_off of 50 will make a $100 invoice $50 instead.
   */
  percent_off: number;

  /**
   * Date after which the coupon can no longer be redeemed
   */
  redeem_by: number;

  /**
   * Number of times this coupon has been applied to a customer.
   */
  times_redeemed: number;

  /**
   * Taking account of the above properties, whether this coupon can still be applied to a customer
   */
  valid: boolean;
}

interface IObject {
  object: string;
}

interface IResourceObject extends IObject {
  id: string;
}

/**
 * A set of key/value pairs that you can attach to an object. It can be useful for storing
 * additional information about the object in a structured format.
 */
interface IMetadata {
  [x: string]: string;
}

export type IInvoice = any;
