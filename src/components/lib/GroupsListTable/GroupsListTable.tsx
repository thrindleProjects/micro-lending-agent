import { useRouter } from 'next/router';
import useSWR from 'swr';

import Table from '@/components/lib/Table';

import { useAppDispatch } from '@/store/store.hooks';

import { IGroupData, setGroupInfo } from '@/slices/groupSlice';
import { groupAPI } from '@/utils/api';

type GroupListTableProps = React.FC;

const GroupsListTable: GroupListTableProps = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { data, error } = useSWR('/api/group', groupAPI.getAllAgentsGroups);
  setGroupInfo;

  if (error) {
    return <div>An error occured</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { data: groups } = data.data;

  const handleClick = (group: IGroupData) => {
    dispatch(setGroupInfo(group));
    router.push(`/groups/${group.id}`);
  };

  return (
    <div className='w-full overflow-x-auto'>
      <Table className='mt-8'>
        <thead className='py-2'>
          <tr>
            <th>Group Name</th>
            <th className='hidden md:table-cell'>Group ID</th>
            <th className='hidden lg:table-cell'>Members</th>
            <th>Status</th>
          </tr>
        </thead>
        {!!groups.length && (
          <tbody>
            {groups.map((group) => {
              const isActiveGroup = group.totalMembers === 3;
              return (
                <tr key={group.id} onClick={() => handleClick(group)}>
                  <td>{group.name}</td>
                  <td className='hidden md:table-cell'>{group.groupID}</td>
                  <td className='hidden lg:table-cell'>{group.totalMembers}</td>
                  <td>
                    <span
                      className={`${
                        isActiveGroup
                          ? 'text-amali-green'
                          : 'text-amali-notif-red'
                      }`}
                    >
                      {isActiveGroup ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </Table>
      {!groups.length && <div>Create group button here</div>}
    </div>
  );
};

export default GroupsListTable;
