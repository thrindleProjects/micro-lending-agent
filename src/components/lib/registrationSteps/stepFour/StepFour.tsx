import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { useState } from 'react';

import logger from '@/lib/logger';

import { mainBanks } from '@/data/data';

import Button from '@/components/buttons/Button';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import Input from '@/components/shared/Input/Input';

import { useAppSelector } from '@/store/store.hooks';

import * as CONSTANTS from '@/constant/constants';
import { registerAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

import { initialValues, validationSchema } from './validation';
import { StepProps } from '../types';
import { SelectInput } from '../../../shared/Select/styled';

const StepFour: React.FC<StepProps> = ({ setCurrentStep }) => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');

  const selectedBank = mainBanks.find((bank) => bank.bankCode === selected);

  const { bvn } = useAppSelector((state) => state.bvn);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await registerAPI.registerBank({
          accountNumber: values['Account Number'],
          bank: selectedBank?.name,
          bankCode: selectedBank?.bankCode,
          userId: bvn?.id,
        });

        setCurrentStep((prev) => prev + 1);
        window.scrollTo(0, 0);

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
    },
  });
  return (
    <motion.form
      className='mt-10 flex flex-col gap-5'
      onSubmit={formik.handleSubmit}
      variants={registerFormVariants}
    >
      <SelectInput
        className='flex w-full flex-row items-center border-x-0 border-t-0 border-b-2 py-4 px-2 text-xs shadow-inner outline-none transition-all duration-300 ease-in placeholder:text-xs focus:outline-none md:px-4 lg:py-5 xl:text-sm xl:placeholder:text-sm'
        onChange={(e) => setSelected(e.target.value)}
      >
        {mainBanks
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((bank, index) => (
            <option
              selected={bank.name === 'Select an option'}
              value={bank.bankCode}
              key={index}
            >
              {bank.name}
            </option>
          ))}
      </SelectInput>

      <Input
        id={CONSTANTS.ACCOUNT_NUMBER}
        type={CONSTANTS.TEXT}
        value={formik.values[CONSTANTS.ACCOUNT_NUMBER]}
        placeholder='XXXXXXXXXX'
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
          isLoading={loading}
        >
          Proceed
        </Button>
      </div>
    </motion.form>
  );
};

export default StepFour;
