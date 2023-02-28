import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import NaijaStates from 'naija-state-local-government';
import { useEffect, useState } from 'react';

import logger from '@/lib/logger';

import { lengthOfStayData, shopType } from '@/data/data';

import Button from '@/components/buttons/Button';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import Input from '@/components/shared/Input/Input';
import Select from '@/components/shared/Select/Select';

import * as CONSTANTS from '@/constant/constants';
import { registerAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

import { initialValues, StateProps, validationSchema } from './validation';
import { StepProps } from '../types';
import { useAppSelector } from '../../../../store/store.hooks';

const StepThree: React.FC<StepProps> = ({ setCurrentStep }) => {
  const [shop, setShop] = useState('');
  const [loading, setLoading] = useState(false);
  const { bvn } = useAppSelector((state) => state.bvn);
  const [lga, setLga] = useState<StateProps>();

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
          userId: bvn?.id,
        });

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const state = NaijaStates.all().map((state: any) => state.state);
  const mappedState = state.map((state: string) => {
    return {
      name: state,
      value: state,
    };
  });
  const mappedLga = lga?.lgas.map((lga: string) => {
    return {
      name: lga,
      value: lga,
    };
  });

  return (
    <motion.form
      className='mt-10 flex flex-col gap-5'
      onSubmit={formik.handleSubmit}
      variants={registerFormVariants}
    >
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
      <Select
        label='State'
        id={CONSTANTS.STATE}
        name={CONSTANTS.STATE}
        onChange={formik.handleChange}
        value={formik.values[CONSTANTS.STATE]}
        onBlur={formik.handleBlur}
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
        onChange={formik.handleChange}
        value={formik.values[CONSTANTS.LGA]}
        onBlur={formik.handleBlur}
        error={formik.errors[CONSTANTS.LGA] && formik.touched[CONSTANTS.LGA]}
        errorText={formik.errors[CONSTANTS.LGA]}
        required={true}
        options={mappedLga}
      />
      <Select
        label='Length of Stay (year)'
        id={CONSTANTS.LENGTHOFSTAY}
        name={CONSTANTS.LENGTHOFSTAY}
        onChange={formik.handleChange}
        value={formik.values[CONSTANTS.LENGTHOFSTAY]}
        onBlur={formik.handleBlur}
        error={
          formik.errors[CONSTANTS.LENGTHOFSTAY] &&
          formik.touched[CONSTANTS.LENGTHOFSTAY]
        }
        errorText={formik.errors[CONSTANTS.LENGTHOFSTAY]}
        required={true}
        options={lengthOfStayData}
      />
      <div>
        <p className='text-[14px]'>Which Best Describe your Shop</p>
        <div className='mt-6 flex flex-col gap-4  md:flex-row'>
          {shopType.map((item, index) => (
            <div
              className='flex cursor-pointer gap-2 text-[14px]  md:justify-center'
              key={index}
              onClick={() => setShop(item)}
            >
              <div
                className={
                  shop === item
                    ? ' h-[18px] w-[18px]  rounded-full bg-amali-green'
                    : ' h-[18px] w-[18px]  rounded-full border border-amali-green'
                }
              />
              <p className={shop === item ? '  text-amali-green' : ''}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=' mt-4 justify-between gap-10 md:flex'>
        <Button
          type='submit'
          variant='light'
          size='base'
          className='mt-6 w-full md:mt-0'
          // isLoading={loading}
        >
          Back
        </Button>
        <Button
          type='submit'
          variant='primary'
          size='base'
          className='mt-6 w-full md:mt-0'
          isLoading={loading}
        >
          Proceed
        </Button>
      </div>
    </motion.form>
  );
};

export default StepThree;
