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

// import { clearRegister } from '@/slices/registerSlice';
import { initialValues, validationSchema } from './validation';
import { StepProps } from '../types';
import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';
import AmaliError from '../../../../utils/customError';

const StepFive: React.FC<StepProps> = ({ setCurrentStep }) => {
  const dispatch = useAppDispatch();
  const { bvn } = useAppSelector((state) => state.bvn);
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
      formData.append('userId', bvn?.id as Blob | string);
      try {
        const result = await registerAPI.registerUploads(formData);
        dispatch(clearRegister());
        window.scrollTo(0, 0);

        if (session && session.data) {
          await signIn('update', {
            ...session.data.user,
            ...result.data,
            token: session.data?.token,
            completedUploads: true,
            redirect: false,
          });
          router.replace('/home');
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
          formik.errors[CONSTANTS.IDIMAGE] && formik.touched[CONSTANTS.IDIMAGE]
        }
        errorText={formik.errors[CONSTANTS.IDIMAGE]}
        required={true}
        extensions='image/*, .doc, .docx, .pdf'
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
        extensions='image/*, .doc, .docx, .pdf'
        showPreview={true}
      />

      <div className=' mt-4 justify-between gap-10 md:flex'>
        <Button
          type='submit'
          variant='light'
          size='base'
          className='mt-6 w-full md:mt-0'
          // isLoading={loading}
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </Button>
        <Button
          type='submit'
          variant='primary'
          size='base'
          className='mt-6 w-full md:mt-0'
          isLoading={loading}
        >
          Create Account
        </Button>
      </div>
    </motion.form>
  );
};

export default StepFive;
