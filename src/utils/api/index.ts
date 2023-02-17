import axios, { InternalAxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';

import logger from '@/lib/logger';

import authService from '@/utils/api/auth';
import groupService from '@/utils/api/group';
import memberService from '@/utils/api/member';
import AmaliError from '@/utils/customError';

export const BASE_URL =
  'http://amalimicrolending-env.eba-jwwgmx4e.eu-west-1.elasticbeanstalk.com/api/v1';
const isBrowser = typeof window !== 'undefined';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    if (process.env.NODE_ENV === 'development') {
      logger(error.response.data, 'Error in axios interceptor');
    }

    const { response, config } = error;
    let message = 'An unexpected error occurred';
    const { url }: { url: string } = config;

    if (response && !['/login', '/register'].includes(url)) {
      if (response.data) {
        message = response.data.data.error;

        // if (response.data.data.status) {
        // }
        throw new AmaliError(message, response.data.message);
      }
      return Promise.reject(message);
    }
  }
);

const addTokenToRequest = async (request: InternalAxiosRequestConfig) => {
  if (!isBrowser || request.headers.Authorization) return request;

  const session = await getSession();

  if (session) {
    const token = session.token ?? '';
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  }
  logger(session, 'NO SESSION');
  return request;
};

api.interceptors.request.use(addTokenToRequest);

export const authAPI = authService({ api });
export const groupAPI = groupService({ api });
export const memberAPI = memberService({ api });
