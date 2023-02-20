import { initialValues as CreateGroupValues } from '@/components/lib/CreateGroupModal/validation';

import { ReqConfig, Service } from '@/types';

const prefix = '/group';

function groupService({ api }: Service) {
  type CreateGroup = typeof CreateGroupValues;
  const createGroup = async (data: CreateGroup, reqConfig?: ReqConfig) => {
    const result = await api.post(prefix, data, { ...reqConfig });
    return result;
  };
  const getAllMembersInaGroup = async (
    id: string,
    query?: string,
    reqConfig?: ReqConfig
  ) => {
    const result: {
      data: { name: string }[];
      message: string;
      status: string;
    } = await api.get(
      `${prefix}/members/${id}`,

      { ...reqConfig }
    );
    return result;
  };

  const getAllAgentsGroups = async (query?: string, reqConfig?: ReqConfig) => {
    const result: {
      status: string;
      message: string;
      data: {
        groupID: string;
        id: string;
        name: string;
        status: string;
        totalMembers: number;
        userId: string;
      }[];
    } = await api.get(prefix, { ...reqConfig });
    return result;
  };

  const getAnAgentGroup = async (
    id: string,
    query?: string,
    reqConfig?: ReqConfig
  ) => {
    const result: {
      status: string;
      message: string;
      data: {
        id: string;
        userId: string;
        groupID: string;
        name: string;
        status: string;
        totalMembers: number;
      };
    } = await api.get(`${prefix}/${id}`, { ...reqConfig });
    return result;
  };

  return Object.freeze({
    createGroup,
    getAllMembersInaGroup,
    getAllAgentsGroups,
    getAnAgentGroup,
  });
}

export default groupService;
