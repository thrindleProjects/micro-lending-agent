import { Icon } from '@iconify/react';
import { signOut } from 'next-auth/react';
import Modal from 'react-modal';

import { LogoutModalProps } from '@/components/lib/LogoutModal/types';

const LogoutModal: LogoutModalProps = ({ isOpen, handleModal }) => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModal}
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
      className='h-max w-11/12 flex-shrink-0 rounded-md bg-white drop-shadow-2xl sm:w-2/3 lg:w-[28rem] xl:w-2/5 xl:max-w-lg'
    >
      <section className='w-full p-4 text-center md:p-6'>
        <div className='mx-auto mb-6 w-max rounded-full bg-amali-notif-red bg-opacity-10 p-6 text-6xl text-amali-notif-red'>
          <Icon icon='ph:question' />
        </div>

        <h1 className='text-base font-semibold'>Are you sure?</h1>
        <p className='mt-3 text-sm text-amali-steel-blue text-opacity-60'>
          You will be logging out of your account and password will be required
          to re-enter, Do you want to proceed?
        </p>
        <div className='mt-4 flex flex-row flex-nowrap items-center justify-center gap-4'>
          <button
            type='button'
            onClick={handleModal}
            className='w-full rounded-md border border-amali-green p-3 text-sm font-semibold text-amali-green'
          >
            Back
          </button>
          <button
            type='button'
            onClick={handleLogout}
            className='w-full rounded-md bg-amali-notif-red p-3 text-sm font-semibold text-white'
          >
            Proceed
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default LogoutModal;
