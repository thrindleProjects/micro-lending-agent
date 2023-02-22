import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { getServerSession } from 'next-auth';
import { SWRConfig } from 'swr';

import SingleGroupLayout from '@/components/pages-layout/groups/singleGroup';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { groupAPI } from '@/utils/api';

import { ReqConfig } from '@/types';

const SingleGroup: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <SingleGroupLayout />;
    </SWRConfig>
  );
};

export default SingleGroup;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const session = await getServerSession(context.req, context.res, authOptions);
  const id = params ? params.id : '';

  const config: ReqConfig = {
    headers: {
      Authorization: `Bearer ${session?.token}`,
    },
  };

  const group = await groupAPI.getAnAgentGroup(`${id}`, undefined, config);

  const members = await groupAPI.getAllMembersInaGroup(
    `${id}`,
    undefined,
    config
  );

  return {
    props: {
      fallback: {
        [`/api/group/${id}`]: group,
        [`/api/group/members/${id}`]: members,
      },
    },
  };
};
