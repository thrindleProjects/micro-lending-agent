import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';

import { useMediaQuery } from '@/hooks';

import Button from '@/components/buttons/Button';

import { LoanSuccessModalProps } from './types';
const LoanSuccessModal: LoanSuccessModalProps = ({
  isOpen,
  handleClose,
  handleNext,
}) => {
  const tabScreen = useMediaQuery('(min-width: 768px)');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='absolute bottom-0 h-max w-full flex-shrink-0 rounded-md bg-transparent drop-shadow-2xl md:relative md:h-max md:w-5/6 md:max-w-xl md:bg-white lg:w-3/5 xl:w-[35%]'
    >
      {tabScreen && (
        <div className='w-full py-8 px-7'>
          <Image
            src='/assets/svg/mailbox.svg'
            alt='mailbox'
            width={127.57}
            height={103}
            className='mx-auto block'
          />
          <div className='my-6 text-center '>
            <h1 className='mb-6 text-2xl font-bold'>Loan Application Sent</h1>
            <p>
              Loan application successful, you will get notified when we have
              update on the application
            </p>
          </div>
          <Button
            variant='primary'
            size='base'
            className=' mt-[17rem] w-full md:mt-0'
            onClick={handleNext}
          >
            Proceed
          </Button>
        </div>
      )}
      {!tabScreen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
          className='h-max w-full rounded-t-lg bg-white p-6 shadow-sm'
        >
          <div>
            <button onClick={handleClose}>
              <IoMdClose className='ml-auto cursor-pointer text-3xl ' />
            </button>
            <Image
              src='/assets/svg/mailbox.svg'
              alt='mailbox'
              width={127.57}
              height={103}
              className='mx-auto block'
            />
            <div className='my-6 text-center '>
              <h1 className='mb-6 text-2xl font-bold'>Loan Application Sent</h1>
              <p>
                Loan application successful, you will get notified when we have
                update on the application
              </p>
            </div>
            <Button
              variant='primary'
              size='base'
              className='w-full md:mt-0'
              onClick={handleNext}
            >
              Proceed
            </Button>
          </div>
        </motion.div>
      )}
    </Modal>
  );
};

export default LoanSuccessModal;
