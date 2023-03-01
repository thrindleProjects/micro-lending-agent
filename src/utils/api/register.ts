import { initialValues as registerValues } from '@/components/lib/RegisterForm/validation';

import {
  RegisterBankValues,
  RegisterBusinessValues,
  RegisterStepTwoValues,
  ReqConfig,
  Service,
  ValidateBvnValues,
} from '@/types';

function registerService({ api }: Service) {
  type RegisterValues = typeof registerValues;

  const register = async (data: RegisterValues, reqConfig?: ReqConfig) => {
    const result = await api.post('/user', data, { ...reqConfig });
    return result;
  };

  const validateBvn = async (
    data: ValidateBvnValues,
    reqConfig?: ReqConfig
  ) => {
    const result = await api.post('/user/bvn/validate', data, {
      ...reqConfig,
    });
    return result;
  };

  const registerInfo = async (
    data: RegisterStepTwoValues,
    reqConfig?: ReqConfig
  ) => {
    const result = await api.put('/user/info', data, {
      ...reqConfig,
    });
    return result;
  };

  const registerBusiness = async (
    data: RegisterBusinessValues,
    reqConfig?: ReqConfig
  ) => {
    const result = await api.post('/user/business', data, {
      ...reqConfig,
    });
    return result;
  };

  const registerBank = async (
    data: RegisterBankValues,
    reqConfig?: ReqConfig
  ) => {
    const result = await api.post('/user/bank', data, {
      ...reqConfig,
    });
    return result;
  };

  const registerUploads = async (data: FormData, reqConfig?: ReqConfig) => {
    const result = await api.put('/user/uploads', data, {
      ...reqConfig,
    });
    return result;
  };

  return Object.freeze({
    register,
    validateBvn,
    registerBusiness,
    registerInfo,
    registerBank,
    registerUploads,
  });
}

export default registerService;
