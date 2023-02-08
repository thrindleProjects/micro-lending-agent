import { useFormik } from 'formik';

import Input from '@/components/shared/Input';

import { ADDRESS, EMAIL, NAME, PHONE_NUMBER } from '@/constant/constants';

import { initialValues, validationSchema } from './validation';

const ProfileSettingsForm = () => {
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
        id={NAME}
        type='text'
        value={formik.values[NAME]}
        label='Name'
        placeholder='Name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[NAME] && formik.touched[NAME]}
        errorText={formik.errors[NAME]}
        required={true}
        autoComplete={NAME}
      />
      <Input
        id={PHONE_NUMBER}
        type='text'
        value={formik.values[PHONE_NUMBER]}
        label='Phone Number'
        placeholder='Phone Number'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[PHONE_NUMBER] && formik.touched[PHONE_NUMBER]}
        errorText={formik.errors[PHONE_NUMBER]}
        required={true}
        autoComplete={PHONE_NUMBER}
      />
      <Input
        id={EMAIL}
        type='email'
        value={formik.values[EMAIL]}
        label='Email Address'
        placeholder='Email Address'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[EMAIL] && formik.touched[EMAIL]}
        errorText={formik.errors[EMAIL]}
        required={true}
        autoComplete={EMAIL}
      />
      <Input
        id={ADDRESS}
        type='text'
        value={formik.values[ADDRESS]}
        label='Address'
        placeholder='Address'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[ADDRESS] && formik.touched[ADDRESS]}
        errorText={formik.errors[ADDRESS]}
        required={true}
        autoComplete={ADDRESS}
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

export default ProfileSettingsForm;
