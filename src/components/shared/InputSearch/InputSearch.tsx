import { useFormik } from 'formik';
import React from 'react';

import { InputSearchBar } from '@/components/shared/InputSearch/styled';
import { InputSearchType } from '@/components/shared/InputSearch/types';

import { initialValues, validationSchema } from './validation';
const InputSearch: React.FC<InputSearchType> = ({ placeholder }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // handle search logic here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='w-full'>
      <InputSearchBar
        placeholder={placeholder}
        onChange={formik.handleChange}
        name='search'
        id='search'
        className='rounded-md border-none py-4 text-xs sm:text-sm md:text-base'
      />
    </form>
  );
};

export default InputSearch;
