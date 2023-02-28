import { AxiosInstance, AxiosRequestConfig } from 'axios';

export type InputPasswordType = 'password';
export type InputTextType = 'text';
export type InputEmailType = 'email';
export type InputDateType = 'date';
export type InputFileType = 'file';
export type InputSelectType = 'select';

export type Market = {
  _id: string;
  market: string;
};

export type Service = {
  api: AxiosInstance;
};
export type ReqConfig = AxiosRequestConfig;

export interface ValidateBvnValues {
  otp: string;
  phone: string | undefined;
}

export interface RegisterStepOneValues {
  title: string;
  idType: string;
  nationality: string;
  userId: string | undefined;
}

export interface RegisterStepTwoValues {
  mobileNumber: string;
  whatsappNumber: string;
  homeAddress: string;
  landmark: string;
  state: string;
  lga: string;
  lengthOfStay: string;
  userId: string | undefined;
  title: string | undefined;
  idType: string | undefined;
  nationality: string | undefined;
}

export interface RegisterBusinessValues {
  name: string;
  service: string;
  address: string;
  landmark: string;
  state: string;
  lga: string;
  lengthOfStay: string;
  type: string;
  userId: string | undefined;
}

export interface RegisterBankValues {
  bank: string | undefined;
  bankCode: string | undefined;
  accountNumber: string;
  userId: string | undefined;
}
