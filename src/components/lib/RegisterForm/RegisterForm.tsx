import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import { gender } from '@/data/data';

import Button from '@/components/buttons/Button';
// import OtpModal from '@/components/lib/otpModal/OtpModal';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
// import RegisterIndex from '@/components/lib/registrationSteps';
import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select';

import { useAppDispatch } from '@/store/store.hooks';

import * as CONSTANTS from '@/constant/constants';
import { setBvnDetails } from '@/slices/bvnSlice';
import AmaliError from '@/utils/customError';

import { initialValues, validationSchema } from './validation';
import { registerAPI } from '../../../utils/api/index';

import { Market } from '@/types';

type RegisterFormProps = React.FC<{ markets: Market[] }>;

const RegisterForm: RegisterFormProps = ({ markets }) => {
  // const [registerStep, setRegisterStep] = useState(true);
  // const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
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
        const data = await registerAPI.register({
          confirmPassword: values.confirmPassword,
          dateOfBirth: values['Date of Birth'],
          firstName: values['First Name'],
          gender: values.gender,
          lastName: values['Last Name'],
          market: values.market,
          middleName: values['Middle Name'],
          phone: values.phone,
          password: values.password,
        });
        if (data) {
          toast.success('Account created successfully');
          router.push('/login');
        }

        // data.data.bvn = values.bvn;

        dispatch(
          setBvnDetails({
            bvn: data.data.bvn,

            id: data.data.id,
          })
        );
        // setRegisterStep(true);

        setLoading(false);

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
      <AnimatePresence initial={false}>
        {/* {isOpen && (
          <OtpModal
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
            setRegisterStep={setRegisterStep}
          />
        )} */}
        {/* {registerStep && <RegisterIndex />} */}
        {/* {!registerStep && ( */}
        <motion.form
          onSubmit={formik.handleSubmit}
          className='mx-auto mt-10 flex h-max w-4/5 flex-col gap-5 md:w-[70%] lg:w-9/12 xl:w-2/3'
          variants={registerFormVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Input
              id={CONSTANTS.FIRST_NAME}
              type={CONSTANTS.TEXT}
              value={formik.values[CONSTANTS.FIRST_NAME]}
              placeholder='Ayowale'
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
              id={CONSTANTS.MIDDLENAME}
              type={CONSTANTS.TEXT}
              value={formik.values[CONSTANTS.MIDDLENAME]}
              placeholder='Soprochukwu'
              label='Middle Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors[CONSTANTS.MIDDLENAME] &&
                formik.touched[CONSTANTS.MIDDLENAME]
              }
              errorText={formik.errors[CONSTANTS.MIDDLENAME]}
              required={true}
            />
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Input
              id={CONSTANTS.LAST_NAME}
              type={CONSTANTS.TEXT}
              value={formik.values[CONSTANTS.LAST_NAME]}
              placeholder='Ogunmepon'
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
            <Input
              id={CONSTANTS.DATE_OF_BIRTH}
              type='date'
              value={formik.values[CONSTANTS.DATE_OF_BIRTH]}
              placeholder='dd-mm-yyy'
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
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Input
              id={CONSTANTS.PHONE_NUMBER}
              type={CONSTANTS.TEXT}
              value={formik.values[CONSTANTS.PHONE_NUMBER]}
              placeholder='XXXXXXXXXX'
              label='Phone Number'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors[CONSTANTS.PHONE_NUMBER] &&
                formik.touched[CONSTANTS.PHONE_NUMBER]
              }
              errorText={formik.errors[CONSTANTS.PHONE_NUMBER]}
              required={true}
            />
            <Select
              label='Gender'
              id={CONSTANTS.GENDER}
              name={CONSTANTS.GENDER}
              onChangeValue={formik.setFieldValue}
              value={formik.values[CONSTANTS.GENDER]}
              onBlurEvent={formik.setFieldTouched}
              error={
                formik.errors[CONSTANTS.GENDER] &&
                formik.touched[CONSTANTS.GENDER]
              }
              errorText={formik.errors[CONSTANTS.GENDER]}
              required={true}
              options={gender}
            />
          </div>

          <Select
            label='Market'
            id={CONSTANTS.MARKET}
            name={CONSTANTS.MARKET}
            onChangeValue={formik.setFieldValue}
            value={formik.values[CONSTANTS.MARKET]}
            onBlurEvent={formik.setFieldTouched}
            error={
              formik.errors[CONSTANTS.MARKET] &&
              formik.touched[CONSTANTS.MARKET]
            }
            errorText={formik.errors[CONSTANTS.MARKET]}
            required={true}
            options={markets.map((market) => ({
              label: market.market,
              value: market._id,
            }))}
          />

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Input
              id={CONSTANTS.PASSWORD}
              type={CONSTANTS.PASSWORD}
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

            <Input
              id={CONSTANTS.CONFRIMPASSWORD}
              type={CONSTANTS.PASSWORD}
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
          </div>

          <Button
            type='submit'
            variant='primary'
            size='base'
            className='w-full lg:my-6'
            isLoading={loading}
          >
            <span className='font-semibold'>Create Account</span>
          </Button>
        </motion.form>
        {/* )} */}
      </AnimatePresence>
    </section>
  );
};

export default RegisterForm;
