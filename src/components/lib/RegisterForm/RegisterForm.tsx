import { Icon } from '@iconify/react';
import { useFormik } from 'formik';

import Input from '@/components/shared/Input';

import * as CONSTANTS from '@/constant/constants';

import { initialValues, validationSchema } from './validation';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // console.log({ values });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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

      <button className='mt-4 w-full rounded-md bg-amali-green py-4 text-center font-bold text-[#EDF8F7] hover:bg-opacity-80'>
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
