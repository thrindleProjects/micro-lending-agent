import { useFormik } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import RegisterIndex from '@/components/lib/registrationSteps';
import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';

import * as CONSTANTS from '@/constant/constants';

import { initialValues, validationSchema } from './validation';

import { Market } from '@/types';

type RegisterFormProps = React.FC<{ markets: Market[] }>;

const RegisterForm: RegisterFormProps = ({ markets }) => {
  const [registerStep, setRegisterStep] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      setRegisterStep(true);
    },
  });

  return (
    <section className='w-full overflow-x-hidden'>
      <AnimatePresence mode='popLayout' initial={false}>
        {registerStep && <RegisterIndex />}
        {!registerStep && (
          <motion.form
            onSubmit={formik.handleSubmit}
            className='mx-auto flex w-4/5 flex-col gap-5 md:w-[70%] lg:w-9/12 xl:w-2/3'
            variants={registerFormVariants}
            initial='initial'
            animate='animate'
            exit='exit'
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
              id={CONSTANTS.PASSWORD}
              type={CONSTANTS.TEXT}
              value={formik.values[CONSTANTS.PASSWORD]}
              placeholder='XXXXXXXXXXX'
              label='Create Password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors[CONSTANTS.PASSWORD] &&
                formik.touched[CONSTANTS.PASSWORD]
              }
              errorText={formik.errors[CONSTANTS.PASSWORD]}
              required={true}
            />
            <p className='w-full max-w-xs text-xs font-semibold text-amali-green md:w-4/6'>
              Password must be a minimum of 8 characters including alphabets,
              numbers and symbols
            </p>
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
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RegisterForm;
