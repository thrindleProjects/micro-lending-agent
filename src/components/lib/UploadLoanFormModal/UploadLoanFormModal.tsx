import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import Modal from 'react-modal';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import InputFile from '@/components/shared/InputFile';

import { useAppSelector } from '@/store/store.hooks';

import { memberAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

import { UploadLoanFormModalWrapper } from './styled';
import { UploadLoanFormModalProps } from './types';
import { initialValues, validationSchema } from './validation';

const UploadLoanFormModal: UploadLoanFormModalProps = ({
  isOpen,
  handleClose,
  handlePrevious,
  handleNext,
}) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAppSelector((state) => state.bvn);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('bvn', user?.bvn as string);
      if (values.image) {
        formData.append('loanApplicationForm', values.image[0] as Blob);
      }
      // if (values.otherImage) {
      //   formData.append(
      //     'otherDocumentImages',
      //     values.otherImage[0] as Blob
      //   );
      // }
      try {
        await memberAPI.applyForLoan(formData);
        (await import('react-hot-toast')).toast.success(
          'Loan Application sent successfully'
        );
        setLoading(false);
        handleNext();

        formik.resetForm();
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
      className='h-full w-full flex-shrink-0 rounded-md bg-white drop-shadow-2xl md:h-max md:max-h-[90%] md:w-5/6 lg:w-3/5 xl:w-[35%]'
    >
      <UploadLoanFormModalWrapper className='w-full py-8 px-7'>
        <div className='text-sm'>
          <MdOutlineArrowBack
            className='mb-10 cursor-pointer text-2xl '
            onClick={handlePrevious}
          />
          <p className=' mb-3 font-bold '>Upload Completed Loan form Image</p>
          <p className=' text-xs font-light text-amali-grey'>
            Upload a clear image of the printed and filled form by the user{' '}
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className='mt-4 flex flex-col justify-between gap-6'
        >
          <div className='  mb-6 flex w-full flex-col gap-4 '>
            <InputFile
              // label='Upload ID Image'
              id='image'
              name='image'
              type='file'
              placeholder='Choose file'
              onChange={formik.setFieldValue}
              onBlur={formik.handleBlur}
              value={formik.values.image}
              error={formik.errors.image && formik.touched.image}
              errorText={formik.errors.image}
              required={true}
              extensions='image/*, .doc, .docx, .pdf'
              multiple={true}
              showPreview={true}
            />
            <InputFile
              label='Upload other Document (sales records / utility bills etc.)'
              id='otherImage'
              name='otherImage'
              type='file'
              placeholder='Choose file'
              onChange={formik.setFieldValue}
              onBlur={formik.handleBlur}
              value={formik.values.otherImage}
              error={formik.errors.otherImage && formik.touched.otherImage}
              errorText={formik.errors.otherImage}
              required={true}
              extensions='image/*, .doc, .docx, .pdf'
              multiple={true}
              showPreview={true}
            />
          </div>
          <Button
            variant='primary'
            size='base'
            className='w-full md:mt-0'
            type='submit'
            isLoading={loading}
          >
            Apply Now
          </Button>
        </form>
      </UploadLoanFormModalWrapper>
    </Modal>
  );
};

export default UploadLoanFormModal;
