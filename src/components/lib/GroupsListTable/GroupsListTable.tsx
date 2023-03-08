import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import useSWR from 'swr';

import Table from '@/components/lib/Table';
import Pagination from '@/components/shared/pagination';

import { useAppDispatch } from '@/store/store.hooks';

import { IGroupData, setGroupInfo } from '@/slices/groupSlice';
import { groupAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';
import { getGroupsQuery } from '@/utils/getGroupsQuery';

type GroupListTableProps = React.FC;

const GroupsListTable: GroupListTableProps = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { query } = router;

  const { search, page } = query;

  const { data, error, mutate, isValidating } = useSWR('/api/group', fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    shouldRetryOnError: true,
    errorRetryInterval: 30000,
    errorRetryCount: 2,
  });

  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    if (isMounted.current) {
      mutate();
    }
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, [search, page, mutate]);

  if (!data && error && error instanceof AmaliError) {
    return (
      <div className='mt-8'>
        {error.message === 'account is inactive. please contact admin' ? (
          <div className='text-center'>
            <div className='mx-auto aspect-square w-max rounded-full bg-amali-green bg-opacity-10 p-6'>
              <Icon
                icon='ph:hourglass-medium-fill'
                className='mx-auto animate-spin text-4xl text-amali-green'
              />
            </div>
            <p className='my-4 text-base font-bold md:text-[24px]'>
              Account Verification in progress
            </p>
            <p className='text-xs md:text-base '>
              Your account is currently inactive because it's undergoing
              verification. Please check back later once it is approved.
            </p>
          </div>
        ) : (
          error.message
        )}
      </div>
    );
  }

  if (!data || (!data && isValidating)) {
    return (
      <div className='mt-8 w-full'>
        <div className='w-full animate-pulse bg-amali-grey/70 py-6'></div>
        <div className='flex h-40 w-full animate-pulse flex-col divide-y-2 bg-amali-grey/20'>
          <div className='h-1/4 bg-amali-grey/20'></div>
          <div className='h-1/4 bg-amali-grey/20'></div>
          <div className='h-1/4 bg-amali-grey/20'></div>
          <div className='h-1/4 bg-amali-grey/20'></div>
        </div>
      </div>
    );
  }

  const { data: groups } = data.data;

  const handleClick = (group: IGroupData) => {
    dispatch(setGroupInfo(group));
    router.push(`/groups/${group.id}`);
  };

  async function fetcher(url: string) {
    const params: string = getGroupsQuery(query);

    return await groupAPI.getAllAgentsGroups(url, params.toString());
  }

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
      {!groups.length && <div></div>}
      <Pagination count={data.data.lastpage || 1} className='mt-7' />
    </div>
  );
};

export default GroupsListTable;
