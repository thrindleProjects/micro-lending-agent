import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ReactElement } from 'react';

import RegisterLayout from '@/components/pages-layout/register';

import { NextPageWithLayout } from './_app';

import { Market } from '@/types';

type RegisterPage = NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
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

export const getStaticProps: GetStaticProps<{
  markets: typeof staticMarkets;
}> = () => {
  return {
    props: {
      markets: staticMarkets,
    },
    revalidate: 60,
  };
};
