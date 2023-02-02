import { Icon } from '@iconify/react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CiBank } from 'react-icons/ci';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import MainContentLayout from '@/components/shared/MainContentLayout';
import NotificationBell from '@/components/shared/NotificationBell';

const HomePageLayout = () => {
  return (
    <MainContentLayout>
      <section className='flex items-center justify-between gap-4'>
        <h1 className='text-base font-semibold sm:text-lg md:text-xl lg:text-2xl'>
          Welcome Agent 👋🏾
        </h1>
        <div className='hidden lg:flex lg:items-center lg:gap-3'>
          <Button
            type='button'
            variant='primary'
            size='base'
            leftIcon={AiOutlinePlus}
            className='inline-flex'
          >
            <span className='font-semibold'>Create New Group</span>
          </Button>
          <Button
            variant='outline'
            size='base'
            className='inline-flex'
            type='button'
            leftIcon={CiBank}
          >
            <span className='font-semibold'>Apply for loan</span>
          </Button>
        </div>
        <div className='block lg:hidden'>
          <NotificationBell />
        </div>
      </section>
      <ActionButton
        actions={[
          <button key={0} className='flex w-max flex-col items-center gap-1'>
            <Icon icon='ph:bank-thin' className='text-xl' />
            <span className='text-sm'>Apply for loan</span>
          </button>,
          <button key={1} className='flex w-max flex-col items-center gap-1'>
            <Icon icon='ph:users-three-light' className='text-xl' />
            <span className='text-sm'>Create Group</span>
          </button>,
        ]}
      />
    </MainContentLayout>
  );
};

export default HomePageLayout;
