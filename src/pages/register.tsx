import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { ReactElement } from 'react';

import RegisterLayout from '@/components/pages-layout/register';

import { authOptions } from '@/pages/api/auth/[...nextauth]';

import { NextPageWithLayout } from './_app';

import { Market } from '@/types';

type RegisterPage = NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
>;

const Register: RegisterPage = ({ markets }) => {
  return (
    <>
      <RegisterLayout markets={markets} />
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Register;

const staticMarkets: Market[] = [
  {
    market: 'Unnamed Market',
    _id: '0008a3ce-dc01-40c2-85f4-54bfdd6eb919',
  },
];

export const getServerSideProps: GetServerSideProps<{
  markets: typeof staticMarkets;
}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: { destination: '/', permanent: false },
    };
  }

  return {
    props: {
      markets: staticMarkets,
    },
    revalidate: 60,
  };
};
