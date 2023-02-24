import { useFormik } from 'formik';
import React from 'react';

import Button from '@/components/buttons/Button';
import InputFile from '@/components/shared/InputFile/InputFile';

// import { useAppSelector } from '@/store/store.hooks';
import * as CONSTANTS from '@/constant/constants';

// import { clearRegister } from '@/slices/registerSlice';
import { initialValues, validationSchema } from './validation';
import { StepProps } from '../types';
// import { useAppDispatch } from '../../../../store/store.hooks';

const StepFive: React.FC<StepProps> = ({ setCurrentStep }) => {
  // const dipatch = useAppDispatch()
  // const { register } = useAppSelector(state => state.register)
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // call the API here
      // TODO: clear the register redux state after submission
      // dipatch(clearRegister())
      setCurrentStep((prev) => prev);
    },
  });
  return (
    <div>
      <form
        className='mt-10 flex flex-col gap-5 md:px-14'
        onSubmit={formik.handleSubmit}
      >
        <InputFile
          label='Upload ID Image'
          id={CONSTANTS.IDIMAGE}
          name={CONSTANTS.IDIMAGE}
          type='file'
          placeholder='Choose file'
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          value={formik.values[CONSTANTS.IDIMAGE]}
          error={
            formik.errors[CONSTANTS.IDIMAGE] &&
            formik.touched[CONSTANTS.IDIMAGE]
          }
          errorText={formik.errors[CONSTANTS.IDIMAGE]}
          required={true}
          extensions='image/*, .doc, .docx, .pdf'
          multiple={true}
          showPreview={true}
        />
        <InputFile
          label='Upload photo of your place of business'
          id={CONSTANTS.PLACEOFBUSINESS}
          name={CONSTANTS.PLACEOFBUSINESS}
          type='file'
          placeholder='Choose file'
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          value={formik.values[CONSTANTS.PLACEOFBUSINESS]}
          error={
            formik.errors[CONSTANTS.PLACEOFBUSINESS] &&
            formik.touched[CONSTANTS.PLACEOFBUSINESS]
          }
          errorText={formik.errors[CONSTANTS.PLACEOFBUSINESS]}
          required={true}
          extensions='image/*, .doc, .docx, .pdf'
          multiple={true}
          showPreview={true}
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
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepFive;