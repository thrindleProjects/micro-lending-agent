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
