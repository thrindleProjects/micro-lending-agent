import { useFormik } from 'formik';
import { useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import { UploadImageProps } from '@/components/lib/uploadImage/UploadImage.props';
import InputFile from '@/components/shared/InputFile';

import { initialValues, validationSchema } from './validation';

const UploadImage: React.FC<UploadImageProps> = ({ onClick }) => {
  const [success, setSuccess] = useState(false);
  // const tabScreen = useMediaQuery('(min-width: 768px)');

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      setSuccess(true);
    },
  });
  return (
    <>
      {!success && (
        <section>
          <div className='ml-auto hidden text-sm md:block '>
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
          <form onSubmit={formik.handleSubmit}>
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
                extensions='image/*, .doc, .docx, '
              />
            </div>
            <Button
              variant='primary'
              size='base'
              className=' mt-[17rem] w-full md:mt-0'
            >
              Apply Now
            </Button>
          </form>
        </section>
      )}

      {/* {success && <div>{tabScreen ? <LoanSuccess /> : <SlidingModal />}</div>} */}
    </>
  );
};

export default UploadImage;
