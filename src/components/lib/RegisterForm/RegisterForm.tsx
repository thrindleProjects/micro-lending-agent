import { Icon } from '@iconify/react';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';

import logger from '@/lib/logger';

import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';

import * as CONSTANTS from '@/constant/constants';
import { authAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

import { initialValues, validationSchema } from './validation';

import { Market } from '@/types';

type RegisterFormProps = React.FC<{ markets: Market[] }>;

const RegisterForm: RegisterFormProps = ({ markets }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await authAPI.register(values);
        (await import('react-hot-toast')).toast.success(
          'User successfully registered'
        );
        formik.resetForm();
      } catch (error) {
        if (error instanceof AxiosError) {
          logger({ error: error.response?.data }, 'Axios Error');
        }
        if (error instanceof AmaliError) {
          logger({ error: error.message, cause: error.cause }, 'Amali Error');
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>
      <Input
        id={CONSTANTS.NAME}
        type={CONSTANTS.TEXT}
        value={formik.values[CONSTANTS.NAME]}
        placeholder='Enter name here...'
        label='Enter Name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[CONSTANTS.NAME] && formik.touched[CONSTANTS.NAME]}
        errorText={formik.errors[CONSTANTS.NAME]}
        required={true}
      />
      <Input
        id={CONSTANTS.PHONE_NUMBER}
        type={CONSTANTS.TEXT}
        value={formik.values[CONSTANTS.PHONE_NUMBER]}
        placeholder='Phone number'
        label='Phone Number'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors[CONSTANTS.PHONE_NUMBER] &&
          formik.touched[CONSTANTS.PHONE_NUMBER]
        }
        errorText={formik.errors[CONSTANTS.PHONE_NUMBER]}
        required={true}
      />

      <Select
        label='Market'
        id={CONSTANTS.MARKET}
        name={CONSTANTS.MARKET}
        onChange={formik.handleChange}
        value={formik.values[CONSTANTS.MARKET]}
        onBlur={formik.handleBlur}
        error={
          formik.errors[CONSTANTS.MARKET] && formik.touched[CONSTANTS.MARKET]
        }
        errorText={formik.errors[CONSTANTS.MARKET]}
        required={true}
        options={markets.map((market) => ({
          name: market.market,
          value: market._id,
        }))}
      />

      <Input
        id={CONSTANTS.PASSWORD}
        type={CONSTANTS.PASSWORD}
        value={formik.values[CONSTANTS.PASSWORD]}
        placeholder='Password'
        label='Create Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors[CONSTANTS.PASSWORD] &&
          formik.touched[CONSTANTS.PASSWORD]
        }
        errorText={formik.errors[CONSTANTS.PASSWORD]}
        required={true}
      />

      <div className='flex w-full flex-row items-center gap-2 bg-amali-green bg-opacity-10 py-4 px-4 text-xs font-medium text-amali-green md:text-sm'>
        <span>
          <Icon icon='ph:info-light' />
        </span>
        <span>
          Password must be at least 8 characters long including symbols
        </span>
      </div>

      <button
        className='mt-4 w-full rounded-md bg-amali-green py-4 text-center font-bold text-[#EDF8F7] hover:bg-opacity-80'
        type='submit'
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
