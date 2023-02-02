import { useFormik } from 'formik';
import React from 'react';

import { InputSearchBar } from '@/components/shared/InputSearch/styled';

import { initialValues, validationSchema } from './validation';
const InputSearch = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // handle search logic here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputSearchBar placeholder='Search group name' />
    </form>
  );
};

export default InputSearch;
