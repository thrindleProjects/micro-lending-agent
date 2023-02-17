import { initialValues as LoginFormValues } from '@/components/lib/LoginForm/validation';
import { initialValues as RegisterFormValues } from '@/components/lib/RegisterForm/validation';

import { ReqConfig, Service } from '@/types';

const prefix = '/user';

function authService({ api }: Service) {
  type RegisterForm = typeof RegisterFormValues;
  const register = async (data: RegisterForm, reqConfig?: ReqConfig) => {
    const result = await api.post(prefix, data, { ...reqConfig });
    return result;
  };
  type LoginForm = typeof LoginFormValues;
  const login = async (data: LoginForm, reqConfig?: ReqConfig) => {
    const result = await api.post(`${prefix}/signin`, data, { ...reqConfig });
    return result;
  };

  return Object.freeze({
    register,
    login,
  });
}

export default authService;
