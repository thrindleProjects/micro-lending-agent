import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
// import OtpModal from '@/components/lib/otpModal/OtpModal';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import RegisterIndex from '@/components/lib/registrationSteps';
import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';

import * as CONSTANTS from '@/constant/constants';
import { setBvnDetails } from '@/slices/bvnSlice';
import AmaliError from '@/utils/customError';

import { initialValues, validationSchema } from './validation';
import { useAppDispatch } from '../../../store/store.hooks';
import { registerAPI } from '../../../utils/api/index';

import { Market } from '@/types';

type RegisterFormProps = React.FC<{ markets: Market[] }>;

const RegisterForm: RegisterFormProps = ({ markets }) => {
  const [registerStep, setRegisterStep] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  // const handleCloseModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const data = await registerAPI.register(values);

        setRegisterStep(true);

        setLoading(false);
        // data.data.bvn = values.bvn;

        dispatch(
          setBvnDetails({
            firstName: data.data.firstName,
            lastName: data.data.lastName,
            middleName: data.data.middleName,
            bvn: data.data.bvn,
            phoneNo: data.data.phone,
            dateOfBirth: data.data.dateOfBirth,
            gender: data.data.gender,
            id: data.data.id,
          })
        );

        formik.resetForm();
      } catch (error) {
        setLoading(false);

        if (error instanceof AxiosError) {
          logger({ error: error.response?.data }, 'Axios Error');
        }
        if (error instanceof AmaliError) {
          logger({ error: error.message, cause: error.cause }, 'Amali Error');
          (await import('react-hot-toast')).toast.error(
            error.message ?? 'Something went wrong'
          );
        }
      }
    },
  });

  return (
    <section className='w-full overflow-x-hidden'>
      <AnimatePresence mode='popLayout' initial={false}>
        {/* {isOpen && (
          <OtpModal
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
            setRegisterStep={setRegisterStep}
          />
        )} */}
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
              id={CONSTANTS.CONFRIMPASSWORD}
              type={CONSTANTS.TEXT}
              value={formik.values[CONSTANTS.CONFRIMPASSWORD]}
              placeholder='XXXXXXXXXXX'
              label='Confirm Password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors[CONSTANTS.CONFRIMPASSWORD] &&
                formik.touched[CONSTANTS.CONFRIMPASSWORD]
              }
              errorText={formik.errors[CONSTANTS.CONFRIMPASSWORD]}
              required={true}
            />

            <Button
              type='submit'
              variant='primary'
              size='base'
              className='w-full lg:mt-6'
              isLoading={loading}
            >
              <span className='font-semibold'>Create Account</span>
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RegisterForm;
