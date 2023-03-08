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
import InputLabel from '@/components/shared/InputLabel';

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
      <div className='grid gap-5 md:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <InputLabel label='Bank Name' id={CONSTANTS.BANK_NAME} />
          <SelectWrapper>
            <ReactSelect
              name='form-field-name'
              onChange={(bank) => setSelected(bank?.value)}
              classNames={{
                option: (state) =>
                  `hover:bg-amali-green hover:text-white bg-transparent text-xs lg:text-sm px-2 md:px-6 py-2 focus:bg-amali-green focus-within:bg-amali-green ${
                    state.isSelected ? 'font-bold' : ''
                  } ${state.isFocused ? 'bg-[#42B0A8] bg-opacity-10' : ''}`,
                control: () =>
                  `w-full border-x-0 border-b-2 border-t-0 px-2 py-2 md:py-[0.375rem] text-xs outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-4 lg:py-3 lg:text-sm xl:placeholder:text-sm flex react-select`,
              }}
              styles={{
                control: () => {
                  return {};
                },
                option: () => ({}),
                valueContainer: (baseStyles) => ({
                  ...baseStyles,
                  padding: 0,
                  margin: 0,
                }),
                input: (baseStyles) => ({ ...baseStyles, margin: 0 }),
                indicatorSeparator: () => ({}),
                placeholder: (base) => ({ ...base, margin: 0, padding: 0 }),
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
              id={CONSTANTS.BANK_NAME}
              placeholder='Select Bank Name'
            />
          </SelectWrapper>
        </div>
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
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
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
          Next
        </Button>
      </div>
    </motion.form>
  );
};

export default StepFour;
