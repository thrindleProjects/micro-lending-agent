import { GetServerSideProps, NextPage } from 'next';

const HomePage: NextPage = () => {
  return <></>;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/home',
      permanent: true,
    },
  };
};
