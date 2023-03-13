import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { getServerSession } from 'next-auth';

import SingleGroupLayout from '@/components/pages-layout/groups/singleGroup';

import { authOptions } from '@/pages/api/auth/[...nextauth]';

const SingleGroup: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return <SingleGroupLayout />;
};

export default SingleGroup;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session && !session.user.status) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};
