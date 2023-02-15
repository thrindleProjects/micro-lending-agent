import { useFormik } from 'formik';
import { MdOutlineArrowBack } from 'react-icons/md';
import Modal from 'react-modal';

import Button from '@/components/buttons/Button';
import InputFile from '@/components/shared/InputFile';

import { UploadLoanFormModalWrapper } from './styled';
import { UploadLoanFormModalProps } from './types';
import { initialValues, validationSchema } from './validation';

const UploadLoanFormModal: UploadLoanFormModalProps = ({
  isOpen,
  handleClose,
  handlePrevious,
  handleNext,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // logic here
      handleNext();
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
            />
            <InputFile
              label='Upload other Document (sales records / utility bills etc.)'
              id='image'
              name='image'
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
            />
          </div>
          <Button
            variant='primary'
            size='base'
            className='w-full md:mt-0'
            type='submit'
          >
            Apply Now
          </Button>
        </form>
      </UploadLoanFormModalWrapper>
    </Modal>
  );
};

export default UploadLoanFormModal;
