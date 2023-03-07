import { NextPage } from 'next';

import GroupsLayout from '@/components/pages-layout/groups/groupsLayout/GroupsLayout';

const Groups: NextPage = () => {
  return <GroupsLayout />;
};

export default Groups;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { query } = context;

//   const params: string = getGroupsQuery(query);

//   const session = await getServerSession(context.req, context.res, authOptions);

//   const groups = await groupAPI.getAllAgentsGroups(undefined, params, {
//     headers: {
//       Authorization: `Bearer ${session?.token}`,
//     },
//   });

//   if (!groups) {
//     return {
//       props: {
//         fallback: {
//           '/api/group': null,
//         },
//       },
//     };
//   }

//   return {
//     props: {
//       fallback: {
//         '/api/group': groups,
//       },
//     },
//   };
// };
