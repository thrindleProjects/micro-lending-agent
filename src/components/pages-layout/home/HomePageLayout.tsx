import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineDownload, AiOutlinePlus } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';

import logger from '@/lib/logger';
import { useMediaQuery } from '@/hooks';
import useGroupLoanModals from '@/hooks/useGroupLoanModals';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import { CompleteRegBanner } from '@/components/lib/CompleteRegBanner';
import InputSearch from '@/components/shared/InputSearch';
import MainContentLayout from '@/components/shared/MainContentLayout';
import NotificationBell from '@/components/shared/NotificationBell';

/**
 * @returns Home page layout
 */
const HomePageLayout = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const { data } = useSession();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 1023px)');
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

  const getUserDetails = useCallback(async () => {
    if (data && data.user) {
      if (data.user.status) {
        setShowBanner(false);
        return;
      }
      try {
        if (
          !(
            data.user.completedBank &&
            data.user.completedBusiness &&
            data.user.completedContact &&
            data.user.completedUploads
          )
        ) {
          setTimeout(() => {
            setShowBanner(true);
          }, 1000);
        } else {
          setShowBanner(false);
        }
      } catch (error) {
        // logic here
        logger(error);
      }
    }
  }, [data]);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  return (
    <>
      <MainContentLayout>
        <section className='flex flex-row flex-wrap justify-between lg:justify-start'>
          {isMobile && (
            <h1 className='shrink-0 text-base font-semibold sm:text-lg md:text-xl lg:text-2xl'>
              Welcome Agent 👋🏾
            </h1>
          )}

          {isDesktop && !showBanner && (
            <h1 className='shrink-0 text-base font-semibold sm:text-lg md:text-xl lg:text-2xl'>
              Welcome Agent 👋🏾
            </h1>
          )}

          {isDesktop && showBanner && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
            >
              <CompleteRegBanner className='w-full rounded-lg p-8 text-white'>
                <h1 className='shrink-0 text-base font-bold sm:text-lg md:text-xl lg:text-2xl'>
                  Welcome Agent 👋🏾
                </h1>
                <p className='mt-4 w-1/2 text-lg font-semibold'>
                  To begin using your account to register users and apply for
                  loans please complete your account registration by providing
                  us with information about yourself
                </p>
                <Link
                  href='/complete-registration'
                  className='mt-6 block w-max max-w-full break-words rounded-lg border border-transparent bg-white py-2 px-8 text-lg text-amali-green transition-all hover:border-white hover:bg-amali-green hover:text-white focus:border-white focus:bg-amali-green focus:text-white'
                >
                  Complete Registration
                </Link>
              </CompleteRegBanner>
            </motion.div>
          )}
          <div className='mt-6 hidden flex-wrap lg:flex lg:items-center lg:gap-3 xl:w-full'>
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
              leftIcon={TfiWrite}
            >
              <span className='font-semibold'>Apply for loan</span>
            </Button>
            <a
              href='/assets/file/reg.pdf'
              download='AMALI REGISTRATION FORM.pdf'
            >
              <Button
                variant='outline'
                size='base'
                leftIcon={AiOutlineDownload}
                className='inline-flex'
              >
                <span className='font-semibold'>
                  Download Registration Form
                </span>
              </Button>
            </a>
            <a
              href='/assets/file/loan.pdf'
              download='AMALI LOAN APPLICATION FORM.pdf'
            >
              <Button
                variant='outline'
                size='base'
                leftIcon={AiOutlineDownload}
                className='inline-flex'
              >
                <span className='font-semibold'>
                  Download Loan Application Form
                </span>
              </Button>
            </a>
          </div>

          <div className='block lg:hidden'>
            <NotificationBell />
          </div>
        </section>

        <div className='mt-6 w-full'>
          <InputSearch placeholder='Search group name' />
          <AnimatePresence>
            {showBanner && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: 'auto',
                  opacity: 1,
                }}
                exit={{
                  height: '0',
                  opacity: 0,
                }}
              >
                <CompleteRegBanner className='mt-6 w-full rounded-lg p-4 text-white lg:hidden'>
                  <h3 className='text-base font-semibold'>Account Setup</h3>
                  <p className='mt-1 text-xs font-light md:w-3/5'>
                    To begin using your account to register users and apply for
                    loans please complete your account registration by providing
                    us with information about yourself
                  </p>
                  <Link
                    href='/complete-registration'
                    className='mt-6 block w-max max-w-full break-words rounded-lg border border-transparent bg-white py-2 px-4 text-xs text-amali-green transition-all hover:border-white hover:bg-amali-green hover:text-white focus:border-white focus:bg-amali-green focus:text-white'
                  >
                    Complete Registration
                  </Link>
                </CompleteRegBanner>
              </motion.div>
            )}
          </AnimatePresence>
          <div className='mt-6 w-full lg:hidden'>
            <Button
              type='button'
              variant='primary'
              size='base'
              leftIcon={AiOutlinePlus}
              className='mb-4 inline-flex w-full justify-center'
              onClick={() => handleModal('create-group')}
            >
              <span className='font-semibold'>Create New Group</span>
            </Button>

            <Button
              variant='outline'
              size='base'
              className='mb-4 inline-flex w-full justify-center'
              type='button'
              onClick={() => handleApplyModal('check-bvn')}
              leftIcon={TfiWrite}
            >
              <span className='font-semibold'>Apply for loan</span>
            </Button>
            <a
              href='/assets/file/reg.pdf'
              download='AMALI REGISTRATION FORM.pdf'
            >
              <Button
                variant='outline'
                size='base'
                leftIcon={AiOutlineDownload}
                className='mb-4 inline-flex w-full justify-center'
              >
                <span className='font-semibold'>
                  Download Registration Form
                </span>
              </Button>
            </a>
            <a
              href='/assets/file/loan.pdf'
              download='AMALI LOAN APPLICATION FORM.pdf'
            >
              <Button
                variant='outline'
                size='base'
                leftIcon={AiOutlineDownload}
                className='mb-4 inline-flex w-full  justify-center'
              >
                <span className='font-semibold'>
                  Download Loan Application Form
                </span>
              </Button>
            </a>
          </div>
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
