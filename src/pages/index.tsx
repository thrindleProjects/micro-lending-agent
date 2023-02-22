import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage = () => {
  return <></>;
};

export default HomePage;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    redirect: {
      destination: '/home',
      permanent: true,
    },
  };
};
