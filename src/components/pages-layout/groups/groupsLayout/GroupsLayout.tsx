import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import useGroupLoanModals from '@/hooks/useGroupLoanModals';

import { groupsList } from '@/data/data';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import GroupsListTable from '@/components/lib/GroupsListTable';
import ActionButtonItem from '@/components/shared/ActionButtonItem';
import InputSearch from '@/components/shared/InputSearch';
import MainContentLayout from '@/components/shared/MainContentLayout';

const GroupsLayout = () => {
  const [groups] = useState<typeof groupsList>(groupsList);
  const [stage, handleModal, handleClose, handleNext, handlePrevious] =
    useGroupLoanModals(['create-group', 'check-bvn', 'add-member']);
  const GroupLoanModals = dynamic(
    () => import('@/components/shared/GroupLoanModals')
  );

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
            onClick={() => handleModal('create-group')}
          >
            <span className='font-semibold'>Create New Group</span>
          </Button>
        </div>

        <GroupsListTable groups={groups} />
      </MainContentLayout>
      <ActionButton
        actions={[
          <ActionButtonItem
            icon='ph:bank-thin'
            text='Apply for loan'
            key={0}
            onClick={() => handleModal('check-bvn')}
          />,
          <ActionButtonItem
            icon='ph:users-three-light'
            text='Create Group'
            key={1}
            onClick={() => handleModal('create-group')}
          />,
        ]}
      />
      {stage && (
        <GroupLoanModals
          stage={stage}
          handleModal={handleModal}
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      )}
    </>
  );
};

export default GroupsLayout;
