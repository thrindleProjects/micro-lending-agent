import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { ReactElement } from 'react';

import { staticMarkets } from '@/data/data';

import RegisterLayout from '@/components/pages-layout/register';

import { authOptions } from '@/pages/api/auth/[...nextauth]';

import { NextPageWithLayout } from './_app';

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

export const getServerSideProps: GetServerSideProps<{
  markets: typeof staticMarkets;
}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: { destination: '/home', permanent: false },
      props: {},
    };
  }

  return {
    props: {
      markets: staticMarkets,
      revalidate: 60,
    },
  };
};
