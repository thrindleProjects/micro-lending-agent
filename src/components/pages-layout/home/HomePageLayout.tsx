import { Icon } from '@iconify/react';
import dynamic from 'next/dynamic';
import { AiOutlinePlus } from 'react-icons/ai';

import useGroupLoanModals from '@/hooks/useGroupLoanModals';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import InputSearch from '@/components/shared/InputSearch';
import MainContentLayout from '@/components/shared/MainContentLayout';
import NotificationBell from '@/components/shared/NotificationBell';
/**
 * @returns Home page layout
 */
const HomePageLayout = () => {
  const [stage, handleModal, handleClose, handleNext, handlePrevious] =
    useGroupLoanModals(['create-group', 'check-bvn', 'add-member']);
  const [
    applyLoanStage,
    handleApplyModal,
    handleApplyClose,
    handleApplyNext,
    handleApplyPrevious,
  ] = useGroupLoanModals(['check-bvn', 'upload-loan-image', 'loan-success']);

  // const [errorModal, setErrorModal] = useState(false)

  const GroupLoanModals = dynamic(
    () => import('@/components/shared/GroupLoanModals')
  );

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
              onClick={() => handleModal('create-group')}
            >
              <span className='font-semibold'>Create New Group</span>
            </Button>

            <Button
              variant='outline'
              size='base'
              className='inline-flex'
              type='button'
              onClick={() => handleApplyModal('check-bvn')}
            >
              <span className='font-semibold'>Apply for loan</span>
            </Button>

            <Button variant='outline' size='base' className='inline-flex'>
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
      </MainContentLayout>
      {stage && (
        <GroupLoanModals
          handleModal={handleModal}
          stage={stage}
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      )}
      {applyLoanStage && (
        <GroupLoanModals
          handleModal={handleApplyModal}
          stage={applyLoanStage}
          handleClose={handleApplyClose}
          handleNext={handleApplyNext}
          handlePrevious={handleApplyPrevious}
        />
      )}
      <ActionButton
        actions={[
          <button
            onClick={() => handleApplyModal('check-bvn')}
            key={0}
            className='flex w-max flex-col items-center gap-1'
          >
            <Icon icon='ph:bank-thin' className='text-xl' />
            <span className='text-sm'>Apply for loan</span>
          </button>,
          <button
            onClick={() => handleModal('create-group')}
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
