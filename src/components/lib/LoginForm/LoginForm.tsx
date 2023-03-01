import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';

import { PASSWORD, TEXT } from '@/constant/constants';
import AmaliError from '@/utils/customError';

import { initialValues, validationSchema } from './validation';

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const result = await signIn('credentials', {
          ...values,
          redirect: false,
        });

        if (!result || result.error) {
          (await import('react-hot-toast')).toast.error(
            result?.error ?? 'Something went wrong'
          );
          return;
        }

        formik.resetForm();
        router.replace('/home');
      } catch (error) {
        if (error instanceof AxiosError) {
          logger({ error: error.response?.data }, 'Axios Error');
          (await import('react-hot-toast')).toast.error(
            error.response?.data ?? 'Server Error'
          );
        }
        if (error instanceof AmaliError) {
          logger({ error: error.message, cause: error.cause }, 'Amali Error');
        }
      } finally {
        setLoading(false);
      }
      // logic here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>
      <Input
        id='phone'
        type={TEXT}
        value={formik.values.phone}
        placeholder='Phone Number'
        label='Phone Number'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.phone && formik.touched.phone}
        errorText={formik.errors.phone}
        required={true}
      />
      <Input
        id='password'
        type={PASSWORD}
        value={formik.values.password}
        placeholder='XXXXXX'
        label='Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password && formik.touched.password}
        errorText={formik.errors.password}
        required={true}
      />
      <Link
        href='/forgot-password'
        className='relative block w-max text-xs text-amali-green before:absolute before:inset-x-0 before:-bottom-px before:mx-auto before:w-0 before:bg-amali-green before:transition-all before:duration-500 before:ease-out hover:before:h-[2px] hover:before:w-full lg:text-sm'
      >
        Forgot Password?
      </Link>
      <Button
        className='mt-4 w-full'
        type='submit'
        size='base'
        variant='primary'
        isLoading={loading}
      >
        <span>Sign In</span>
      </Button>
    </form>
  );
};

export default LoginForm;
