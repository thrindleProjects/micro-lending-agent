import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, [router]);

  return <></>;
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      source: '/',
      destination: '/home',
      permanent: true,
    },
  };
};
