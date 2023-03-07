import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';
import ReactSelect from 'react-select';

import logger from '@/lib/logger';

import { mainBanks } from '@/data/data';

import Button from '@/components/buttons/Button';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import Input from '@/components/shared/Input/Input';

import * as CONSTANTS from '@/constant/constants';
import { registerAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

import { initialValues, validationSchema } from './validation';
import { StepProps } from '../types';
import { SelectWrapper } from '../../../shared/Select/styled';

const StepFour: React.FC<StepProps> = ({ setCurrentStep }) => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | undefined>('');

  const selectedBank = mainBanks.find((bank) => bank.bankCode === selected);

  const session = useSession();

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
          userId: session.data?.user.id,
          bvn: values.bvn,
        });

        if (session && session.data) {
          await signIn('update', {
            ...session.data.user,
            token: session.data.token,
            completedBank: true,
            redirect: false,
          });
        }

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
      <Input
        id={CONSTANTS.BVN}
        type={CONSTANTS.TEXT}
        value={formik.values[CONSTANTS.BVN]}
        placeholder='XXXXXXXXXX'
        label='BVN'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[CONSTANTS.BVN] && formik.touched[CONSTANTS.BVN]}
        errorText={formik.errors[CONSTANTS.BVN]}
        required={true}
      />
      <SelectWrapper>
        <ReactSelect
          name='form-field-name'
          onChange={(bank) => setSelected(bank?.value)}
          classNames={{
            option: (state) =>
              `hover:bg-amali-green hover:text-white bg-transparent text-xs lg:text-sm px-2 md:px-6 py-2 ${
                state.isSelected
                  ? 'font-semibold bg-amali-grey bg-opacity-20'
                  : ''
              }`,
            control: () =>
              `w-full border-x-0 border-b-2 border-t-0 px-2 py-4 text-xs outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-4 lg:py-4 lg:text-sm xl:placeholder:text-sm flex react-select`,
          }}
          options={mainBanks
            .sort((a, b) =>
              a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            )
            .map((bank) => {
              return {
                value: bank.bankCode,
                label: bank.name,
              };
            })}
        />
      </SelectWrapper>

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
          type='button'
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
          Proceed
        </Button>
      </div>
    </motion.form>
  );
};

export default StepFour;
