import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { groupsList } from '@/data/data';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import CreateGroupModal from '@/components/lib/CreateGroupModal';
import Table from '@/components/lib/Table';
import InputSearch from '@/components/shared/InputSearch';
import MainContentLayout from '@/components/shared/MainContentLayout';

const GroupsLayout = () => {
  const [groups] = useState<typeof groupsList>(groupsList);
  const [isOpen] = useState<boolean>(false);
  const router = useRouter();
  // console.log({ routeModal });

  const handleModal = () => {
    if (router.query.m && router.query.m === 'open') {
      router.replace(
        { pathname: router.pathname },
        { pathname: router.pathname, query: { m: '' } },
        { shallow: true }
      );
      return;
    }

    if (!router.query.m) {
      router.replace(
        { pathname: router.pathname },
        { pathname: router.pathname, query: { m: undefined } },
        { shallow: true }
      );
    }
    router.replace(
      router.pathname,
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          m: router.query.m === 'open' ? 'close' : 'open',
        },
      },
      {
        shallow: true,
      }
    );
  };

  // useEffect(() => {}, [routeModal]);

  return (
    <>
      <MainContentLayout>
        <h4 className='block text-xl font-semibold sm:text-2xl lg:hidden '>
          Groups
        </h4>
        <div className='mt-6 flex w-full justify-between lg:mt-0'>
          <div className='w-full lg:w-2/4 xl:w-2/5'>
            <InputSearch placeholder='Type Group Name' />
          </div>
          <Button
            type='button'
            variant='primary'
            size='base'
            leftIcon={AiOutlinePlus}
            className='hidden lg:inline-flex'
            onClick={handleModal}
          >
            <span className='font-semibold'>Create New Group</span>
          </Button>
        </div>

        <div className='w-full overflow-x-auto'>
          <Table className='mt-8'>
            <thead className='py-2'>
              <tr>
                <td>Group Name</td>
                <td className='hidden md:table-cell'>Group ID</td>
                <td className='hidden lg:table-cell'>Members</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => {
                const isActiveGroup = group.members < 3;
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
                        {isActiveGroup ? 'Inactive' : 'Active'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </MainContentLayout>
      <ActionButton
        actions={[
          <button key={0} className='flex w-max flex-col items-center gap-1'>
            <Icon icon='ph:bank-thin' className='text-xl' />
            <span className='text-sm'>Apply for loan</span>
          </button>,
          <button
            key={1}
            className='flex w-max flex-col items-center gap-1'
            onClick={handleModal}
          >
            <Icon icon='ph:users-three-light' className='text-xl' />
            <span className='text-sm'>Create Group</span>
          </button>,
        ]}
      />
      <CreateGroupModal isOpen={isOpen} handleModal={handleModal} />
    </>
  );
};

export default GroupsLayout;
