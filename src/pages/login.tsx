import { ReactElement } from 'react';

import LoginLayout from '@/components/pages-layout/login';

import { NextPageWithLayout } from '@/pages/_app';

const Login: NextPageWithLayout = () => {
  return <LoginLayout />;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
export default Login;
