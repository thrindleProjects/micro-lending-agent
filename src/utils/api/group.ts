import { initialValues as CreateGroupValues } from '@/components/lib/CreateGroupModal/validation';

import { ReqConfig, Service } from '@/types';

function groupService({ api }: Service) {
  type CreateGroup = typeof CreateGroupValues;
  const createGroup = async (data: CreateGroup, reqConfig?: ReqConfig) => {
    const result = await api.post('/group', data, { ...reqConfig });
    return result;
  };
  const getAllMembersInaGroup = async (id: string, reqConfig?: ReqConfig) => {
    const result = await api.get(
      `/group/members/${id}`,

      { ...reqConfig }
    );
    return result;
  };

  return Object.freeze({
    createGroup,
    getAllMembersInaGroup,
  });
}

export default groupService;
