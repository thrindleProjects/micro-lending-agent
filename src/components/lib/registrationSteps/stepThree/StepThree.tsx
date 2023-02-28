import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { shopType } from '@/data/data';

import Button from '@/components/buttons/Button';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import Input from '@/components/shared/Input/Input';
import Select from '@/components/shared/Select/Select';

import * as CONSTANTS from '@/constant/constants';
import { setRegisterInfo } from '@/slices/registerSlice';

import { initialValues, validationSchema } from './validation';
import { StepProps } from '../types';
import { useAppDispatch } from '../../../../store/store.hooks';

const StepThree: React.FC<StepProps> = ({ setCurrentStep }) => {
  const dispatch = useAppDispatch();
  const [shop, setShop] = useState('');
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        setRegisterInfo({
          businessName: values['Business Name'],
          businessAddress: values['Business Address'],
          whatYouSell: values['What Do You Sell'],
          landmark: values.Landmark,
          businessState: values.State,
          businessLga: values.LGA,
          businessLengthOfStay: values['Length of Stay'],
          shopDescription: shop,
        })
      );
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    },
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
        options={[{ name: 'Lagos', value: 'Lagos' }]}
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
        options={[{ name: 'Maryland', value: 'Maryland' }]}
      />
      <Select
        label='Length of Stay'
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
        options={[{ name: 'Nigeria', value: 'Nigeria' }]}
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
          // isLoading={loading}
        >
          Proceed
        </Button>
      </div>
    </motion.form>
  );
};

export default StepThree;
