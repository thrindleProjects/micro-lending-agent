import { useRouter } from 'next/router';

import Table from '@/components/lib/Table';

type GroupListTableProps = React.FC<{
  groups: {
    _id: number;
    name: string;
    group_id: string;
    members: number;
  }[];
}>;

const GroupsListTable: GroupListTableProps = ({ groups }) => {
  const router = useRouter();

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
        <tbody>
          {groups.map((group) => {
            const isActiveGroup = group.members === 3;
            return (
              <tr
                key={group._id}
                onClick={() => router.push(`/groups/${group._id}`)}
              >
                <td>{group.name}</td>
                <td className='hidden md:table-cell'>{group.group_id}</td>
                <td className='hidden lg:table-cell'>{group.members}</td>
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
      </Table>
    </div>
  );
};

export default GroupsListTable;
