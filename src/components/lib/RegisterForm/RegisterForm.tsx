import { useFormik } from 'formik';
import { useState } from 'react';

import RegisterIndex from '@/components/lib/registrationSteps';
import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';

import * as CONSTANTS from '@/constant/constants';

import { initialValues, validationSchema } from './validation';

import { Market } from '@/types';

type RegisterFormProps = React.FC<{ markets: Market[] }>;

const RegisterForm: RegisterFormProps = ({ markets }) => {
  const [registerStep, setRegisterStep] = useState(true);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      setRegisterStep(true);
    },
  });

  return (
    <section className=''>
      {registerStep ? (
        <RegisterIndex />
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className='mt-10 flex flex-col gap-5 md:px-14'
        >
          <Select
            label='Market'
            id={CONSTANTS.MARKET}
            name={CONSTANTS.MARKET}
            onChange={formik.handleChange}
            value={formik.values[CONSTANTS.MARKET]}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.MARKET] &&
              formik.touched[CONSTANTS.MARKET]
            }
            errorText={formik.errors[CONSTANTS.MARKET]}
            required={true}
            options={markets.map((market) => ({
              name: market.market,
              value: market._id,
            }))}
          />
          <Input
            id={CONSTANTS.BVN}
            type={CONSTANTS.TEXT}
            value={formik.values[CONSTANTS.BVN]}
            placeholder='XXXXXXXXXXX'
            label='BVN'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.BVN] && formik.touched[CONSTANTS.BVN]
            }
            errorText={formik.errors[CONSTANTS.BVN]}
            required={true}
          />

          <button
            className='mt-4 w-full rounded-md bg-amali-green py-4 text-center font-bold text-[#EDF8F7] hover:bg-opacity-80'
            type='submit'
          >
            Create Account
          </button>
        </form>
      )}
    </section>
  );
};

export default RegisterForm;
