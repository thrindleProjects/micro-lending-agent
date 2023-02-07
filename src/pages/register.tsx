import { ReactElement } from 'react';

import RegisterLayout from '@/components/pages-layout/register';

import { NextPageWithLayout } from './_app';

const Register: NextPageWithLayout = () => {
  return (
    <>
      <RegisterLayout />
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Register;
