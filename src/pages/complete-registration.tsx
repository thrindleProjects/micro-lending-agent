import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import { ReactElement } from 'react';

import CompleteRegistrationLayout from '@/components/layout/CompleteRegistrationLayout';

import { NextPageWithLayout } from '@/pages/_app';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const CompleteRegistration: NextPageWithLayout = () => {
  return (
    <div>
      <button onClick={() => signOut()}>sign out</button>
    </div>
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
    props: {},
  };
};

export default CompleteRegistration;
