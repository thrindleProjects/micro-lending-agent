import { useFormik } from 'formik';
import React from 'react';

import Button from '@/components/buttons/Button';
import { StepProps } from '@/components/lib/registrationSteps/types';
import Input from '@/components/shared/Input/Input';
import Select from '@/components/shared/Select/Select';

import * as CONSTANTS from '@/constant/constants';

import { initialValues, validationSchema } from './validation';

const StepTwo: React.FC<StepProps> = ({ setCurrentStep }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    },
  });
  return (
    <div>
      <form
        className='mt-10 flex flex-col gap-5 md:px-14'
        onSubmit={formik.handleSubmit}
      >
        <Input
          label='Mobile Number'
          placeholder='090XXXXXXXX'
          id={CONSTANTS.MOBILENUMBER}
          type={CONSTANTS.TEXT}
          name={CONSTANTS.MOBILENUMBER}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.MOBILENUMBER]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.MOBILENUMBER] &&
            formik.touched[CONSTANTS.MOBILENUMBER]
          }
          errorText={formik.errors[CONSTANTS.MOBILENUMBER]}
          required={true}
        />
        <Input
          id={CONSTANTS.WHATSAPPNUMBER}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.WHATSAPPNUMBER]}
          placeholder='090XXXXXXXX'
          label='WhatsApp Number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.WHATSAPPNUMBER] &&
            formik.touched[CONSTANTS.WHATSAPPNUMBER]
          }
          errorText={formik.errors[CONSTANTS.WHATSAPPNUMBER]}
          required={true}
        />
        <Input
          id={CONSTANTS.HOMEADDRESS}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.HOMEADDRESS]}
          placeholder='12, Maryland, Yaba'
          label='Home Address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.HOMEADDRESS] &&
            formik.touched[CONSTANTS.HOMEADDRESS]
          }
          errorText={formik.errors[CONSTANTS.HOMEADDRESS]}
          required={true}
        />
        <Input
          id={CONSTANTS.LANDMARK}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.LANDMARK]}
          placeholder='Shoprite'
          label='Landmark'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.LANDMARK] &&
            formik.touched[CONSTANTS.LANDMARK]
          }
          errorText={formik.errors[CONSTANTS.LANDMARK]}
          required={true}
        />
        <Select
          label='State'
          id={CONSTANTS.STATE}
          name={CONSTANTS.STATE}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.STATE]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.STATE] && formik.touched[CONSTANTS.STATE]
          }
          errorText={formik.errors[CONSTANTS.STATE]}
          required={true}
          options={[{ name: 'Lagos', value: 'Lagos' }]}
        />

        <Select
          label='LGA'
          id={CONSTANTS.LGA}
          name={CONSTANTS.LGA}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.LGA]}
          onBlur={formik.handleBlur}
          error={formik.errors[CONSTANTS.LGA] && formik.touched[CONSTANTS.LGA]}
          errorText={formik.errors[CONSTANTS.LGA]}
          required={true}
          options={[{ name: 'Maryland', value: 'Maryland' }]}
        />
        <Select
          label='Length of Stay'
          id={CONSTANTS.LENGTHOFSTAY}
          name={CONSTANTS.LENGTHOFSTAY}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.LENGTHOFSTAY]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.LENGTHOFSTAY] &&
            formik.touched[CONSTANTS.LENGTHOFSTAY]
          }
          errorText={formik.errors[CONSTANTS.LENGTHOFSTAY]}
          required={true}
          options={[{ name: '1 year', value: '1 year' }]}
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
      </form>
    </div>
  );
};

export default StepTwo;
