import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import NaijaStates from 'naija-state-local-government';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import logger from '@/lib/logger';

import { lengthOfStayData, shopType } from '@/data/data';

import Button from '@/components/buttons/Button';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import Input from '@/components/shared/Input/Input';
import InputLabel from '@/components/shared/InputLabel';
import Select from '@/components/shared/Select/Select';

import * as CONSTANTS from '@/constant/constants';
import { registerAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

import { initialValues, StateProps, validationSchema } from './validation';
import { StepProps } from '../types';

const StepThree: React.FC<StepProps> = ({ setCurrentStep }) => {
  const [shop, setShop] = useState('');
  const [loading, setLoading] = useState(false);
  const [lga, setLga] = useState<StateProps>();
  const session = useSession();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await registerAPI.registerBusiness({
          address: values['Business Address'],
          landmark: values.Landmark,
          lengthOfStay: values['Length of Stay'],
          lga: values['LGA'],
          name: values['Business Name'],
          service: values['What Do You Sell'],
          state: values.State,
          type: shop,
          userId: session.data?.user.id,
        });

        if (session && session.data) {
          await signIn('update', {
            ...session.data.user,
            token: session.data.token,
            completedBusiness: true,
            redirect: false,
          });
        }
        setCurrentStep((prev) => prev + 1);
        window.scrollTo(0, 0);

        setLoading(false);
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

  useEffect(() => {
    if (formik.values.State !== '') {
      setLga(NaijaStates.lgas(formik.values.State));
    }
  }, [formik.values.State]);

  const state = NaijaStates.all().map(
    (state: { state: string }) => state.state
  );
  const mappedState = state.map((state: string) => {
    return {
      label: state,
      value: state,
    };
  });
  const mappedLga = lga?.lgas.map((lga: string) => {
    return {
      label: lga,
      value: lga,
    };
  });

  return (
    <motion.form
      className='mt-10 flex flex-col gap-5'
      onSubmit={formik.handleSubmit}
      variants={registerFormVariants}
    >
      <div className='grid gap-5 md:grid-cols-2'>
        <Input
          label='Business Name'
          placeholder='Name of Business'
          id={CONSTANTS.BUSINNESSNAME}
          type={CONSTANTS.TEXT}
          name={CONSTANTS.BUSINNESSNAME}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.BUSINNESSNAME]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.BUSINNESSNAME] &&
            formik.touched[CONSTANTS.BUSINNESSNAME]
          }
          errorText={formik.errors[CONSTANTS.BUSINNESSNAME]}
          required={true}
        />
        <Input
          id={CONSTANTS.WHATDOYOUSELL}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.WHATDOYOUSELL]}
          placeholder='Clothings'
          label='What do you sell'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.WHATDOYOUSELL] &&
            formik.touched[CONSTANTS.WHATDOYOUSELL]
          }
          errorText={formik.errors[CONSTANTS.WHATDOYOUSELL]}
          required={true}
        />
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
        <Input
          id={CONSTANTS.BUSSINESSADDRESS}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.BUSSINESSADDRESS]}
          placeholder='12, Maryland, Yaba'
          label='Business Address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.BUSSINESSADDRESS] &&
            formik.touched[CONSTANTS.BUSSINESSADDRESS]
          }
          errorText={formik.errors[CONSTANTS.BUSSINESSADDRESS]}
          required={true}
        />
        <Input
          id={CONSTANTS.LANDMARK}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.LANDMARK]}
          placeholder='Shoprite'
          label='Landmark'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.LANDMARK] &&
            formik.touched[CONSTANTS.LANDMARK]
          }
          errorText={formik.errors[CONSTANTS.LANDMARK]}
          required={true}
        />
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
        <Select
          label='State'
          id={CONSTANTS.STATE}
          name={CONSTANTS.STATE}
          onChangeValue={formik.setFieldValue}
          value={formik.values[CONSTANTS.STATE]}
          onBlurEvent={formik.setFieldTouched}
          error={
            formik.errors[CONSTANTS.STATE] && formik.touched[CONSTANTS.STATE]
          }
          errorText={formik.errors[CONSTANTS.STATE]}
          required={true}
          options={mappedState}
        />

        <Select
          label='LGA'
          id={CONSTANTS.LGA}
          name={CONSTANTS.LGA}
          onChangeValue={formik.setFieldValue}
          value={formik.values[CONSTANTS.LGA]}
          onBlurEvent={formik.setFieldTouched}
          error={formik.errors[CONSTANTS.LGA] && formik.touched[CONSTANTS.LGA]}
          errorText={formik.errors[CONSTANTS.LGA]}
          required={true}
          options={mappedLga}
        />
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
        <Select
          label='Length of Stay (year)'
          id={CONSTANTS.LENGTHOFSTAY}
          name={CONSTANTS.LENGTHOFSTAY}
          onChangeValue={formik.setFieldValue}
          value={formik.values[CONSTANTS.LENGTHOFSTAY]}
          onBlurEvent={formik.setFieldTouched}
          error={
            formik.errors[CONSTANTS.LENGTHOFSTAY] &&
            formik.touched[CONSTANTS.LENGTHOFSTAY]
          }
          errorText={formik.errors[CONSTANTS.LENGTHOFSTAY]}
          required={true}
          options={lengthOfStayData}
        />
        <div>
          <InputLabel id='shop_type' label='Which Best Describe your Shop' />
          <div className='mt-6 flex flex-col gap-4 md:flex-row md:flex-wrap'>
            {shopType.map((item, index) => (
              <div
                className='flex cursor-pointer gap-2 text-[14px] md:justify-center'
                key={index}
                onClick={() => setShop(item)}
              >
                <div
                  className={
                    shop === item
                      ? ' aspect-square h-[18px] flex-shrink-0  rounded-full bg-amali-green'
                      : ' aspect-square h-[18px] flex-shrink-0  rounded-full border border-amali-green'
                  }
                />
                <p
                  className={`break-words ${
                    shop === item ? 'text-amali-green' : ''
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-8 flex flex-col gap-6 md:flex-row'>
        <Button
          type='button'
          variant='error-secondary'
          size='base'
          className='w-full md:mt-0 md:w-max'
          // isLoading={loading}
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Back
        </Button>
        <Button
          type='submit'
          variant='primary'
          size='base'
          className='md:mt-0 md:w-full md:max-w-md'
          isLoading={loading}
        >
          Next
        </Button>
      </div>
    </motion.form>
  );
};

export default StepThree;
