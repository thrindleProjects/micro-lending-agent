import { Icon } from '@iconify/react';
import { useFormik } from 'formik';

import Input from '@/components/shared/Input';

import {
  CURRENT_PASSWORD,
  NEW_PASSWORD,
  R_NEW_PASSWORD,
} from '@/constant/constants';

import { initialValues, validationSchema } from './validation';

const SecuritySettingsForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // submit logic here
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='mt-8 flex w-full flex-col gap-4 md:w-9/12 lg:w-3/5'
    >
      <Input
        id={CURRENT_PASSWORD}
        type='password'
        value={formik.values[CURRENT_PASSWORD]}
        label='Enter Current Password'
        placeholder='Enter Current Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors[CURRENT_PASSWORD] && formik.touched[CURRENT_PASSWORD]
        }
        errorText={formik.errors[CURRENT_PASSWORD]}
        required={true}
        autoComplete={CURRENT_PASSWORD}
      />
      <div>
        <Input
          id={NEW_PASSWORD}
          type='password'
          value={formik.values[NEW_PASSWORD]}
          label='Create New Password'
          placeholder='Create New Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors[NEW_PASSWORD] && formik.touched[NEW_PASSWORD]}
          errorText={formik.errors[NEW_PASSWORD]}
          required={true}
          autoComplete={NEW_PASSWORD}
        />
        <div className='flex w-full flex-row items-center gap-2 bg-amali-green bg-opacity-10 py-4 px-4 text-xs font-medium text-amali-green md:text-sm'>
          <span>
            <Icon icon='ph:info-light' />
          </span>
          <span>
            Password must be at least 8 characters long including symbols
          </span>
        </div>
      </div>
      <Input
        id={R_NEW_PASSWORD}
        type='password'
        value={formik.values[R_NEW_PASSWORD]}
        label='Enter New Password'
        placeholder='Enter New Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[R_NEW_PASSWORD] && formik.touched[R_NEW_PASSWORD]}
        errorText={formik.errors[R_NEW_PASSWORD]}
        required={true}
        autoComplete={R_NEW_PASSWORD}
      />

      <button
        className='ml-auto mt-4 w-full rounded-md bg-amali-green py-3 px-4 text-center font-bold text-[#EDF8F7] hover:bg-opacity-80 md:w-max'
        type='submit'
      >
        Save Changes
      </button>
    </form>
  );
};

export default SecuritySettingsForm;
