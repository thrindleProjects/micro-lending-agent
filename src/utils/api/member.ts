import { initialValues as verifyBVNValues } from '@/components/lib/CheckBVNModal/validation';

import { ReqConfig, Service } from '@/types';

function memberService({ api }: Service) {
  type VerifyBVN = typeof verifyBVNValues;
  const verifyBVN = async (data: VerifyBVN, reqConfig?: ReqConfig) => {
    const result = await api.post('/bvn/verify', data, { ...reqConfig });
    return result;
  };

  const addMember = async (data: FormData, reqConfig?: ReqConfig) => {
    const result = await api.post('/group/member', data, { ...reqConfig });
    return result;
  };

  return Object.freeze({
    verifyBVN,
    addMember,
  });
}

export default memberService;
