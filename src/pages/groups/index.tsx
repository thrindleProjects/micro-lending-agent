import { GetServerSideProps } from 'next';
import React from 'react';

import GroupsLayout from '@/components/pages-layout/groups/groupsLayout/GroupsLayout';

const Groups = () => {
  return <GroupsLayout />;
};

export default Groups;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
