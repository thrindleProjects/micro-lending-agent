import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { ImSpinner2 } from 'react-icons/im';

import { InputSearchBar } from '@/components/shared/InputSearch/styled';
import { InputSearchType } from '@/components/shared/InputSearch/types';

import { initialValues, validationSchema } from './validation';
const InputSearch: React.FC<InputSearchType> = ({ placeholder, isLoading }) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      router.query = values;
      router.push(
        {
          pathname: '/groups',
          query: values,
        },
        {
          pathname: '/groups',
          query: values,
        },
        { shallow: true }
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='relative w-full'>
      <InputSearchBar
        placeholder={placeholder}
        onChange={formik.handleChange}
        name='search'
        id='search'
        className='rounded-md border-none py-4 text-xs sm:text-sm md:text-base'
      />
      {isLoading && (
        <div className='absolute top-1/2 right-6 -translate-y-1/2 text-amali-green'>
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
    </form>
  );
};

export default InputSearch;
