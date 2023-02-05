import { useFormik } from 'formik';
import React, { useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import * as Yup from 'yup';

import { useMediaQuery } from '@/hooks';

import Button from '@/components/buttons/Button';
import SlidingModal from '@/components/lib/slidingModal/SlidingModal';
import { UploadImageProps } from '@/components/lib/uploadImage/UploadImage.props';
import InputFile from '@/components/shared/InputFile';

import LoanSuccess from '../loanSuccess/LoanSuccess';

const UploadImage: React.FC<UploadImageProps> = ({ onClick }) => {
  const [success, setSuccess] = useState(false);
  const tabScreen = useMediaQuery('(min-width: 768px)');

  const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
  ];

  const formik = useFormik({
    initialValues: {
      image: '',
    },
    validationSchema: Yup.object().shape({
      image: Yup.mixed()
        .nullable()
        .required('An image must be provided')
        .test(
          'format',
          'upload file',
          (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
        ),
    }),
    onSubmit: () => {
      setSuccess(true);
    },
  });
  return (
    <>
      {!success && (
        <section>
          <div className='ml-auto   hidden text-sm md:block '>
            <MdOutlineArrowBack
              className='mb-10 cursor-pointer text-2xl '
              onClick={onClick}
            />
            <p className=' mb-3 font-bold '>Upload Completed Loan form Image</p>
            <p className='mb-8 text-xs font-light text-amali-grey'>
              Upload a clear image of the printed and filled form by the user{' '}
            </p>
          </div>
          <div className='mb-10   block  text-sm  md:hidden'>
            <MdOutlineArrowBack
              className=' mb-10 cursor-pointer text-2xl '
              // onClick={() => setLoanModal(false)}
            />
            <p className=' mb-3 font-bold '>Upload Completed Loan form Image</p>
            <p className='mb-8 text-xs font-light text-amali-grey'>
              Upload a clear image of the printed and filled form by the user{' '}
            </p>
          </div>
          <form>
            <div className='  mb-10 w-full '>
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
              />
            </div>
            <Button
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              onSubmit={formik.handleSubmit}
              variant='primary'
              size='base'
              className=' mt-[17rem] w-full md:mt-0'
            >
              <p>Verify</p>
            </Button>
          </form>
        </section>
      )}

      {success && <div>{tabScreen ? <LoanSuccess /> : <SlidingModal />}</div>}
    </>
  );
};

export default UploadImage;
