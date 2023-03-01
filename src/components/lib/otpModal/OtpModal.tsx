import { Icon } from '@iconify/react';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';
import OtpInput from 'react-otp-input';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import { ModalWrapper } from '@/components/lib/CreateGroupModal/styled';
import { OtpModalProps } from '@/components/lib/otpModal/type';

import { useAppSelector } from '@/store/store.hooks';

import { registerAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

import check from '~/assets/svg/verified.png';

const OtpModal: React.FC<OtpModalProps> = ({
  isOpen,
  handleCloseModal,
  setRegisterStep,
}) => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const { bvn } = useAppSelector((state) => state.bvn);

  const [otp, setOtp] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (enteredOtp: any) => {
    setOtp(enteredOtp);
  };

  const handleValidateBvn = async () => {
    try {
      await registerAPI.validateBvn({
        otp: otp,
        phone: bvn?.phoneNo,
      });
      (await import('react-hot-toast')).toast.success(
        'BVN validation completed successfully'
      );
      setVerified(true);

      setLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        logger({ error: error.response?.data }, 'Axios Error');
      }
      if (error instanceof AmaliError) {
        logger({ error: error.message, cause: error.cause }, 'Amali Error');
        (await import('react-hot-toast')).toast.error(
          error.message ?? 'Something went wrong'
        );
        setLoading(false);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
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
        {verified ? (
          <section className=''>
            <div>
              <div className='w-full py-8 px-7 '>
                <Image
                  src={check}
                  alt='mailbox'
                  width={127.57}
                  height={103}
                  className='mx-auto block'
                />
                <h1 className=' mt-4 text-center text-xl font-bold'>
                  OTP Successfully Verified
                </h1>
              </div>

              <Button
                type='submit'
                variant='primary'
                size='base'
                className='w-full '
                // isLoading={loading}
                onSubmit={() => {
                  setRegisterStep(true);
                  handleCloseModal();
                }}
              >
                <span className='font-semibold'>Proceed</span>
              </Button>
            </div>
          </section>
        ) : (
          <>
            <section className=''>
              <Icon
                icon='material-symbols:close'
                className='ml-auto mb-4 text-2xl'
                onClick={handleCloseModal}
              />
              <h5 className=' text-center text-xl font-semibold sm:text-2xl '>
                OTP Verification
              </h5>
            </section>
            <p className='mt-6 text-center'>
              Type in the 4 digit pin sent to the number registered with the
              bank verification number
            </p>
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={4}
              inputStyle={{
                width: '3rem',
                height: '3rem',
                borderRadius: '8px',
                border: '1px solid #42B0A8',
              }}
              className='my-6  '
              containerStyle='flex justify-between outline-none '
            />
            <Button
              type='submit'
              variant='primary'
              size='base'
              className='w-full lg:mt-6'
              isLoading={loading}
              onSubmit={handleValidateBvn}
            >
              <span className='font-semibold'>Verify</span>
            </Button>
          </>
        )}
      </ModalWrapper>
    </Modal>
  );
};

export default OtpModal;
