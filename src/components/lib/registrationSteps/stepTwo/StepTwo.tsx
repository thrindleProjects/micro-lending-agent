import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import NaijaStates from 'naija-state-local-government';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import logger from '@/lib/logger';

import { IDType, lengthOfStayData } from '@/data/data';

import Button from '@/components/buttons/Button';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import { StateProps } from '@/components/lib/registrationSteps/stepThree/validation';
import { StepProps } from '@/components/lib/registrationSteps/types';
import Input from '@/components/shared/Input/Input';
import Select from '@/components/shared/Select/Select';

import * as CONSTANTS from '@/constant/constants';
import { registerAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

import { initialValues, validationSchema } from './validation';
// import { useAppSelector } from '../../../../store/store.hooks';

const StepTwo: React.FC<StepProps> = ({ setCurrentStep }) => {
  const [loading, setLoading] = useState(false);
  // const { bvn } = useAppSelector((state) => state.bvn);
  // const { register } = useAppSelector((state) => state.register);
  const [lga, setLga] = useState<StateProps>();
  const session = useSession();

  // console.log({ register });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const result = await registerAPI.registerInfo({
          homeAddress: values['Home Address'],
          landmark: values.Landmark,
          state: values.State,
          lengthOfStay: values['Length of Stay'],
          lga: values.LGA,
          whatsappNumber: values['WhatsApp Number'],
          userId: session?.data?.user?.id,
          idType: values.id_type,
          nationality: values.nationality,
          mobileNumber: values['Mobile Number'],
        });

        if (session && session.data) {
          await signIn('update', {
            ...result.data,
            token: session.data.token,
            completedContact: true,
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
          label='Mobile Number'
          placeholder='090XXXXXXXX'
          id={CONSTANTS.MOBILENUMBER}
          type='text'
          name={CONSTANTS.MOBILENUMBER}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.MOBILENUMBER]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.MOBILENUMBER] &&
            formik.touched[CONSTANTS.MOBILENUMBER]
          }
          errorText={formik.errors[CONSTANTS.MOBILENUMBER]}
          required={true}
        />
        <Input
          id={CONSTANTS.WHATSAPPNUMBER}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.WHATSAPPNUMBER]}
          placeholder='090XXXXXXXX'
          label='WhatsApp Number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.WHATSAPPNUMBER] &&
            formik.touched[CONSTANTS.WHATSAPPNUMBER]
          }
          errorText={formik.errors[CONSTANTS.WHATSAPPNUMBER]}
          required={true}
        />
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
        <Input
          id={CONSTANTS.HOMEADDRESS}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.HOMEADDRESS]}
          placeholder='12, Maryland, Yaba'
          label='Home Address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.HOMEADDRESS] &&
            formik.touched[CONSTANTS.HOMEADDRESS]
          }
          errorText={formik.errors[CONSTANTS.HOMEADDRESS]}
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
          className='text-black'
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
        <Select
          label='Nationality'
          id={CONSTANTS.NATIONALITY}
          name={CONSTANTS.NATIONALITY}
          onChangeValue={formik.setFieldValue}
          value={formik.values[CONSTANTS.NATIONALITY]}
          onBlurEvent={formik.setFieldTouched}
          error={
            formik.errors[CONSTANTS.NATIONALITY] &&
            formik.touched[CONSTANTS.NATIONALITY]
          }
          errorText={formik.errors[CONSTANTS.NATIONALITY]}
          required={true}
          options={[{ label: 'Nigerian', value: 'Nigerian' }]}
        />
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
        <Select
          label='ID TYPE'
          id={CONSTANTS.IDTYPE}
          name={CONSTANTS.IDTYPE}
          onChangeValue={formik.setFieldValue}
          value={formik.values[CONSTANTS.IDTYPE]}
          onBlurEvent={formik.setFieldTouched}
          error={
            formik.errors[CONSTANTS.IDTYPE] && formik.touched[CONSTANTS.IDTYPE]
          }
          errorText={formik.errors[CONSTANTS.IDTYPE]}
          required={true}
          options={IDType}
        />
      </div>

      <div className='mt-4 justify-between gap-10 md:flex'>
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

export default StepTwo;
