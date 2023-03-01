import Image from 'next/image';
import Modal from 'react-modal';

import { ModalWrapper } from '@/components/lib/CreateGroupModal/styled';

import { StatusModalProps } from './type';

const StatusModal: React.FC<StatusModalProps> = ({ isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      // onRequestClose={handleCloseModal}
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
      className='h-max w-[90%] flex-shrink-0 rounded-md bg-white drop-shadow-2xl md:h-max md:w-5/6 lg:w-3/5 xl:w-[30%]'
    >
      <ModalWrapper className='w-full py-8 px-7'>
        <div className='text-center'>
          <Image
            alt='timer'
            width={88}
            height={88}
            className='mx-auto block'
            src='/assets/svg/timer.png'
          />
          <p className='my-4 text-[16px] font-bold md:text-[24px]'>
            Account Verification in progress
          </p>
          <p className='text-[12px] md:text-[16px] '>
            Your account is pending approval, please check back later. Thank
            you.
          </p>
        </div>
      </ModalWrapper>
    </Modal>
  );
};

export default StatusModal;
