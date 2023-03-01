import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { ReactElement } from 'react';
import { SWRConfig } from 'swr';

import { staticMarkets } from '@/data/data';

import CompleteRegistrationLayout from '@/components/layout/CompleteRegistrationLayout';
import CompleteRegistrationComponent from '@/components/pages-layout/complete-registration/CompleteRegistrationComponent';

import { NextPageWithLayout } from '@/pages/_app';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const CompleteRegistration: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <CompleteRegistrationComponent />
    </SWRConfig>
  );
};

CompleteRegistration.getLayout = function getLayout(page: ReactElement) {
  return <CompleteRegistrationLayout>{page}</CompleteRegistrationLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: { destination: '/login', permanent: false },
    };
  }

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

  return {
    props: {
      fallback: {
        '/api/markets': staticMarkets,
      },
    },
  };
};

export default CompleteRegistration;
