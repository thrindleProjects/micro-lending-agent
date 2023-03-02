import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { ReactElement } from 'react';

import LoginLayout from '@/components/pages-layout/login';

import { NextPageWithLayout } from '@/pages/_app';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const Login: NextPageWithLayout = () => {
  return <LoginLayout />;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (
    session &&
    session.user.completedBank &&
    session.user.completedBusiness &&
    session.user.completedContact &&
    session.user.completedUploads
  ) {
    return {
      redirect: { destination: '/home', permanent: false },
    };
  }

  if (
    session &&
    !(
      session.user.completedBank &&
      session.user.completedBusiness &&
      session.user.completedContact &&
      session.user.completedUploads
    )
  ) {
    return {
      redirect: {
        destination: '/complete-registration',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
