import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react';

import Button from '@/components/buttons/Button';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import Input from '@/components/shared/Input/Input';

import { useAppDispatch } from '@/store/store.hooks';

import * as CONSTANTS from '@/constant/constants';
import { setRegisterInfo } from '@/slices/registerSlice';

import { initialValues, validationSchema } from './validation';
import { StepProps } from '../types';

const StepFour: React.FC<StepProps> = ({ setCurrentStep }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        setRegisterInfo({
          bankName: values['Bank Name'],
          accountNumber: values['Account Number'],
        })
      );
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    },
  });
  return (
    <motion.form
      className='mt-10 flex flex-col gap-5'
      onSubmit={formik.handleSubmit}
      variants={registerFormVariants}
    >
      <Input
        label='Bank Name'
        placeholder='XXXXXXXX'
        id={CONSTANTS.BANK_NAME}
        type={CONSTANTS.TEXT}
        name={CONSTANTS.BANK_NAME}
        onChange={formik.handleChange}
        value={formik.values[CONSTANTS.BANK_NAME]}
        onBlur={formik.handleBlur}
        error={
          formik.errors[CONSTANTS.BANK_NAME] &&
          formik.touched[CONSTANTS.BANK_NAME]
        }
        errorText={formik.errors[CONSTANTS.BANK_NAME]}
        required={true}
      />
      <Input
        id={CONSTANTS.ACCOUNT_NUMBER}
        type={CONSTANTS.TEXT}
        value={formik.values[CONSTANTS.ACCOUNT_NUMBER]}
        placeholder='Clothings'
        label='Account Number'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors[CONSTANTS.ACCOUNT_NUMBER] &&
          formik.touched[CONSTANTS.ACCOUNT_NUMBER]
        }
        errorText={formik.errors[CONSTANTS.ACCOUNT_NUMBER]}
        required={true}
      />

      <div className=' mt-4 justify-between gap-10 md:flex'>
        <Button
          type='submit'
          variant='light'
          size='base'
          className='mt-6 w-full md:mt-0'
          // isLoading={loading}
        >
          Back
        </Button>
        <Button
          type='submit'
          variant='primary'
          size='base'
          className='mt-6 w-full md:mt-0'
          // isLoading={loading}
        >
          Proceed
        </Button>
      </div>
    </motion.form>
  );
};

export default StepFour;
