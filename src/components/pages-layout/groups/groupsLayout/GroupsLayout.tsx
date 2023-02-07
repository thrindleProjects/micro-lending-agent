import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { groupsList } from '@/data/data';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import CreateGroupModal from '@/components/lib/CreateGroupModal';
import Table from '@/components/lib/Table';
import ActionButtonItem from '@/components/shared/ActionButtonItem';
import InputSearch from '@/components/shared/InputSearch';
import MainContentLayout from '@/components/shared/MainContentLayout';

const GroupsLayout = () => {
  const [groups] = useState<typeof groupsList>(groupsList);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleModal = () => {
    setIsOpen((old) => !old);
  };
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
      </MainContentLayout>
      <ActionButton
        actions={[
          <ActionButtonItem
            icon='ph:bank-thin'
            text='Apply for loan'
            key={0}
          />,
          <ActionButtonItem
            icon='ph:users-three-light'
            text='Create Group'
            key={1}
            onClick={handleModal}
          />,
        ]}
      />
      <CreateGroupModal isOpen={isOpen} handleModal={handleModal} />
    </>
  );
};

export default GroupsLayout;
