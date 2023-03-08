import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import InputFile from '@/components/shared/InputFile/InputFile';

// import { useAppSelector } from '@/store/store.hooks';
import * as CONSTANTS from '@/constant/constants';
import { clearRegister } from '@/slices/registerSlice';
import { registerAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

// import { clearRegister } from '@/slices/registerSlice';
import { initialValues, validationSchema } from './validation';
import { StepProps } from '../types';
import { useAppDispatch } from '../../../../store/store.hooks';

const StepFive: React.FC<StepProps> = ({ setCurrentStep }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const formData = new FormData();
      if (values.id_image) {
        formData.append('idImage', values.id_image[0] as Blob | string);
      }
      if (values['Place Of Business']) {
        formData.append(
          'placeOfBusiness',
          values['Place Of Business'][0] as Blob | string
        );
      }
      formData.append('userId', session.data?.user.id as Blob | string);
      if (values.guarantorFormImages) {
        values.guarantorFormImages.forEach((value) => {
          formData.append(CONSTANTS.GUARANTOR_FORM, value);
        });
      }
      try {
        await registerAPI.registerUploads(formData);
        dispatch(clearRegister());
        (await import('react-hot-toast')).toast.success(
          'Account has been successfully created and pending verification'
        );
        window.scrollTo(0, 0);

        if (session && session.data) {
          await signIn('update', {
            ...session.data.user,
            token: session.data?.token,
            completedUploads: true,
            redirect: false,
          });
          router.push('/home');
        }

        if (!session || !session.data) {
          router.push('/login');
        }

        setLoading(false);
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
      setCurrentStep((prev) => prev);
    },
  });
  return (
    <motion.form
      className='mt-10 flex flex-col gap-5'
      onSubmit={formik.handleSubmit}
      variants={registerFormVariants}
    >
      <div className='grid gap-5 md:grid-cols-2'>
        <InputFile
          label='Upload ID Image'
          id={CONSTANTS.IDIMAGE}
          name={CONSTANTS.IDIMAGE}
          type='file'
          placeholder='Choose file'
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          value={formik.values[CONSTANTS.IDIMAGE]}
          error={
            formik.errors[CONSTANTS.IDIMAGE] &&
            formik.touched[CONSTANTS.IDIMAGE]
          }
          errorText={formik.errors[CONSTANTS.IDIMAGE]}
          required={true}
          extensions='image/*, .doc, .docx,'
          multiple={true}
          showPreview={true}
        />
        <InputFile
          label='Upload photo of your place of business'
          id={CONSTANTS.PLACEOFBUSINESS}
          name={CONSTANTS.PLACEOFBUSINESS}
          type='file'
          placeholder='Choose file'
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          value={formik.values[CONSTANTS.PLACEOFBUSINESS]}
          error={
            formik.errors[CONSTANTS.PLACEOFBUSINESS] &&
            formik.touched[CONSTANTS.PLACEOFBUSINESS]
          }
          errorText={formik.errors[CONSTANTS.PLACEOFBUSINESS]}
          required={true}
          extensions='image/*, .doc, .docx,'
          showPreview={true}
        />
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
        <InputFile
          label='Upload Guarantor Form'
          id={CONSTANTS.GUARANTOR_FORM}
          name={CONSTANTS.GUARANTOR_FORM}
          type='file'
          placeholder='Choose file'
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          value={formik.values[CONSTANTS.GUARANTOR_FORM]}
          error={
            formik.errors[CONSTANTS.GUARANTOR_FORM] &&
            formik.touched[CONSTANTS.GUARANTOR_FORM]
          }
          errorText={formik.errors[CONSTANTS.GUARANTOR_FORM]}
          required={true}
          extensions='image/*, .doc, .docx,'
          multiple={true}
          showPreview={true}
        />
      </div>

      <div className='mt-8 flex flex-col gap-6 md:flex-row'>
        <Button
          type='button'
          variant='error-secondary'
          size='base'
          className='w-full md:mt-0 md:w-max'
          // isLoading={loading}
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </Button>
        <Button
          type='submit'
          variant='primary'
          size='base'
          className='md:mt-0 md:w-full md:max-w-md'
          isLoading={loading}
        >
          Complete Registration
        </Button>
      </div>
    </motion.form>
  );
};

export default StepFive;
