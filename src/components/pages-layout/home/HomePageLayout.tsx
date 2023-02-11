import { Icon } from '@iconify/react';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { CiBank } from 'react-icons/ci';
import { GrDownload } from 'react-icons/gr';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import CreateGroupModal from '@/components/lib/CreateGroupModal';
import LoanModal from '@/components/lib/loanModal/LoanModal';
import InputSearch from '@/components/shared/InputSearch';
import MainContentLayout from '@/components/shared/MainContentLayout';
import Container from '@/components/shared/modal/Modal';
import NotificationBell from '@/components/shared/NotificationBell';

/**
 * @returns Home page layout
 */
const HomePageLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showLoan, setShowLoan] = useState(false);

  const handleModal = () => {
    setIsOpen((old) => !old);
  };
  return (
    <>
      <MainContentLayout>
        <section className='flex items-center justify-between gap-4'>
          <h1 className='shrink-0 text-base font-semibold sm:text-lg md:text-xl lg:text-2xl'>
            Welcome Agent 👋🏾
          </h1>

          <div className='hidden justify-end lg:flex lg:flex-wrap lg:items-center lg:gap-3'>
            <Button
              type='button'
              variant='primary'
              size='base'
              leftIcon={AiOutlinePlus}
              className='inline-flex'
              onClick={handleModal}
            >
              <span className='font-semibold'>Create New Group</span>
            </Button>

            <Button
              variant='outline'
              size='base'
              className='inline-flex'
              type='button'
              leftIcon={CiBank}
              onClick={() => setShowLoan(true)}
            >
              <span className='font-semibold'>Apply for loan</span>
            </Button>

            <Button
              variant='outline'
              size='base'
              className='inline-flex'
              leftIcon={GrDownload}
            >
              <span className='font-semibold'> Download Registration Form</span>
            </Button>
          </div>

          <div className='block lg:hidden'>
            <NotificationBell />
          </div>
        </section>
        <div className='mt-8'>
          <InputSearch placeholder='Search group name' />
        </div>
        <CreateGroupModal isOpen={isOpen} handleModal={handleModal} />
        {showLoan && (
          <Container className='h-full w-full md:h-auto  md:w-[598px]'>
            <LoanModal setLoanModal={setShowLoan} />
          </Container>
        )}
      </MainContentLayout>
      <ActionButton
        actions={[
          <button
            onClick={() => setShowLoan(true)}
            key={0}
            className='flex w-max flex-col items-center gap-1'
          >
            <Icon icon='ph:bank-thin' className='text-xl' />
            <span className='text-sm'>Apply for loan</span>
          </button>,
          <button
            onClick={handleModal}
            key={1}
            className='flex w-max flex-col items-center gap-1'
          >
            <Icon icon='ph:users-three-light' className='text-xl' />
            <span className='text-sm'>Create Group</span>
          </button>,
        ]}
      />
    </>
  );
};

export default HomePageLayout;
