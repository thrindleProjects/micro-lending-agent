import { Icon } from '@iconify/react';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';

import { useAppDispatch } from '@/store/store.hooks';

// import Modal from '@/components/shared/modal/Modal';
import { TEXT } from '@/constant/constants';
import { setBvnDetails } from '@/slices/bvnSlice';
import AmaliError from '@/utils/customError';

import { CheckBVNModalWrapper } from './styled';
import { CheckBVNModalProps } from './types';
import { initialValues, validationSchema } from './validation';
import { memberAPI } from '../../../utils/api/index';

const CheckBVNModal: CheckBVNModalProps = ({
  isOpen,
  handleClose,
  handleNext,
}) => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const userData = await memberAPI.verifyBVN(values);
        // console.log(userData)
        handleNext();

        toast.success('BVN verified successfully');
        setLoading(false);

        dispatch(
          setBvnDetails({
            bvn: values.bvn,
            id: userData.data.id,
          })
        );

        formik.resetForm();
      } catch (error) {
        setLoading(false);

        if (error instanceof AxiosError) {
          logger({ error: error.response?.data }, 'Axios Error');
        }
        if (error instanceof AmaliError) {
          logger({ error: error.message, cause: error.cause }, 'Amali Error');
          (await import('react-hot-toast')).toast.error(
            error.message ?? 'Something went wrong'
          );
        }
      }
    },
  });

  const handleCloseModal = () => {
    formik.resetForm();
    handleClose();
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
      className='h-full w-full flex-shrink-0 rounded-md bg-white drop-shadow-2xl md:h-max md:w-5/6 lg:w-3/5 xl:w-[35%]'
    >
      <CheckBVNModalWrapper className='w-full py-8 px-7'>
        <section className='flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0'>
          <h5 className='w-full text-xl font-semibold sm:text-2xl md:mx-auto md:w-max'>
            Add Member
          </h5>
          <button
            onClick={handleCloseModal}
            className='-order-1 ml-auto text-2xl font-semibold md:order-1 md:ml-0'
          >
            <Icon icon='material-symbols:close' />
          </button>
        </section>
        <form
          onSubmit={formik.handleSubmit}
          className='mt-6 flex flex-col justify-between gap-6'
        >
          <div className='flex w-full flex-col gap-6'>
            <Input
              id='bvn'
              name='bvn'
              type={TEXT}
              value={formik.values.bvn}
              placeholder='XXXXXXXXXX'
              label='Enter BVN'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.bvn && formik.touched.bvn}
              errorText={formik.errors.bvn}
              required={true}
            />
            <div className='flex w-full items-center justify-between gap-2 rounded-sm bg-amali-light-green py-2 px-4 text-amali-green md:hidden'>
              <span className='text-lg'>
                <Icon icon='ph:question-fill' />
              </span>
              <p className='text-xs'>Click here to see why we need your BVN</p>
              <span className='text-lg'>
                <Icon icon='ic:round-keyboard-arrow-down' />
              </span>
            </div>
          </div>
          <Button
            type='submit'
            variant='primary'
            size='base'
            className='w-full md:mt-6'
            isLoading={loading}
          >
            Verify
          </Button>
        </form>
      </CheckBVNModalWrapper>
    </Modal>
  );
};

export default CheckBVNModal;
