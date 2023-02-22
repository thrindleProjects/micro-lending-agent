import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { getServerSession } from 'next-auth';
import { SWRConfig } from 'swr';

import GroupsLayout from '@/components/pages-layout/groups/groupsLayout/GroupsLayout';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { groupAPI } from '@/utils/api';

const Groups: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <GroupsLayout />
    </SWRConfig>
  );
};

export default Groups;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  const groups = await groupAPI.getAllAgentsGroups(undefined, {
    headers: {
      Authorization: `Bearer ${session?.token}`,
    },
  });

  if (!groups) {
    return {
      props: {
        fallback: {
          '/api/group': null,
        },
      },
    };
  }

  return {
    props: {
      fallback: {
        '/api/group': groups,
      },
    },
  };
};
