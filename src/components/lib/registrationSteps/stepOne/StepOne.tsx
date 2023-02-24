import { useFormik } from 'formik';
import React from 'react';

import { gender, IDType } from '@/data/data';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';
import Select from '@/components/shared/Select/Select';

import * as CONSTANTS from '@/constant/constants';
import { setRegisterInfo } from '@/slices/registerSlice';

import { initialValues, validationSchema } from './validation';
import { StepProps } from '../types';
import { useAppDispatch } from '../../../../store/store.hooks';

const StepOne: React.FC<StepProps> = ({ setCurrentStep }) => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        setRegisterInfo({
          title: values.title,
          firstName: values['First Name'],
          lastName: values['Last Name'],
          gender: values.gender,
          dob: values['Date of Birth'],
          idType: values.id_type,
          nationality: values.Nationality,
        })
      );
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
        <Select
          label='Title'
          id={CONSTANTS.TITLE}
          name={CONSTANTS.TITLE}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.TITLE]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.TITLE] && formik.touched[CONSTANTS.TITLE]
          }
          errorText={formik.errors[CONSTANTS.TITLE]}
          required={true}
          options={[
            { name: 'MR', value: 'MR' },
            { name: 'MRS', value: 'MRS' },
          ]}
        />
        <Input
          id={CONSTANTS.FIRST_NAME}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.FIRST_NAME]}
          placeholder='Adewale'
          label='First Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.FIRST_NAME] &&
            formik.touched[CONSTANTS.FIRST_NAME]
          }
          errorText={formik.errors[CONSTANTS.FIRST_NAME]}
          required={true}
        />
        <Input
          id={CONSTANTS.LAST_NAME}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.LAST_NAME]}
          placeholder='Ayo'
          label='Last Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.LAST_NAME] &&
            formik.touched[CONSTANTS.LAST_NAME]
          }
          errorText={formik.errors[CONSTANTS.LAST_NAME]}
          required={true}
        />
        <Select
          label='Gender'
          id={CONSTANTS.GENDER}
          name={CONSTANTS.GENDER}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.GENDER]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.GENDER] && formik.touched[CONSTANTS.GENDER]
          }
          errorText={formik.errors[CONSTANTS.GENDER]}
          required={true}
          options={gender}
        />

        <Input
          id={CONSTANTS.DATE_OF_BIRTH}
          type={CONSTANTS.DATE}
          value={formik.values[CONSTANTS.DATE_OF_BIRTH]}
          placeholder='24 / 03 / 1999'
          label='Date of Birth'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.DATE_OF_BIRTH] &&
            formik.touched[CONSTANTS.DATE_OF_BIRTH]
          }
          errorText={formik.errors[CONSTANTS.DATE_OF_BIRTH]}
          required={true}
        />
        <Select
          label='ID TYPE'
          id={CONSTANTS.IDTYPE}
          name={CONSTANTS.IDTYPE}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.IDTYPE]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.IDTYPE] && formik.touched[CONSTANTS.IDTYPE]
          }
          errorText={formik.errors[CONSTANTS.IDTYPE]}
          required={true}
          options={IDType}
        />
        <Select
          label='NATIONALITY'
          id={CONSTANTS.NATIONALITY}
          name={CONSTANTS.NATIONALITY}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.NATIONALITY]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.NATIONALITY] &&
            formik.touched[CONSTANTS.NATIONALITY]
          }
          errorText={formik.errors[CONSTANTS.NATIONALITY]}
          required={true}
          options={[{ name: 'Nigeria', value: 'Nigeria' }]}
        />
        <div className=' mt-4 justify-between gap-10 md:flex'>
          <Button
            type='submit'
            variant='light'
            size='base'
            className='w-full '
            // isLoading={loading}
          >
            Back
          </Button>
          <Button
            type='submit'
            variant='primary'
            size='base'
            className='mt-6  w-full md:mt-0'
            // isLoading={loading}
          >
            Proceed
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
