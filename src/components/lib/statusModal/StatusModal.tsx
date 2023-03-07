import { Icon } from '@iconify/react';
import Modal from 'react-modal';

import { ModalWrapper } from '@/components/lib/CreateGroupModal/styled';

import { StatusModalProps } from './type';

const StatusModal: React.FC<StatusModalProps> = ({ isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
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
      shouldCloseOnOverlayClick={false}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='h-max w-[90%] flex-shrink-0 rounded-md bg-white drop-shadow-2xl md:h-max md:w-5/6 lg:w-3/5 xl:w-[30%]'
    >
      <ModalWrapper className='w-full py-8 px-7'>
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
      </ModalWrapper>
    </Modal>
  );
};

export default StatusModal;
