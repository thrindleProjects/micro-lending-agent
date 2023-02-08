import { useFormik } from 'formik';
import Link from 'next/link';
import { useEffect } from 'react';
import * as Yup from 'yup';

import Input from '@/components/shared/Input';

import { PASSWORD, TEXT } from '@/constant/constants';

const LoginForm = () => {
  useEffect(() => {
    localStorage.setItem('userRole', 'master-agent');
  }, []);

  const formik = useFormik({
    initialValues: { phone: '', password: '' },
    validationSchema: Yup.object({
      phone: Yup.number()
        .required('Phone number is required')
        .typeError('Only numbers are allowed'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: () => {
      // if (values.phone === '08161112404' && values.password === '12345678') {
      //   router.push('/master-agent');
      //   toast.success('Login Successful');
      // } else if (
      //   values.phone === '08011111111' &&
      //   values.password === '12345678'
      // ) {
      //   router.push('/admin');
      //   localStorage.setItem('userRole', 'admin');
      //   toast.success('Login Successful');
      // } else if (
      //   values.phone === '08166939100' &&
      //   values.password === '12345678'
      // ) {
      //   router.push('/sub-agent');
      //   toast.success('Login Successful');
      //   localStorage.setItem('userRole', 'sub-agent');
      // } else if (
      //   values.phone === '08022222222' &&
      //   values.password === '12345678'
      // ) {
      //   router.push('/agent');
      //   localStorage.setItem('userRole', 'agent');
      //   toast.success('Login Successful');
      // }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
        placeholder='Password'
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
      <button
        className='mt-4 w-full rounded-md bg-amali-green py-4 text-center font-bold text-[#EDF8F7] hover:bg-opacity-80'
        type='submit'
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
