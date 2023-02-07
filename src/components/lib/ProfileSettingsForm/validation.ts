import * as Yup from 'yup';

import { ADDRESS, EMAIL, NAME, PHONE_NUMBER } from '@/constant/constants';

export const validationSchema = Yup.object({
  [NAME]: Yup.string().required('Name cannot be blank'),
  [PHONE_NUMBER]: Yup.number()
    .required('Please enter a valid phone number')
    .typeError('Phone number cannot contain letters'),
  [EMAIL]: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter a valid email address'),
  [ADDRESS]: Yup.string().required('Please enter your home address'),
});

export const initialValues = {
  [NAME]: '',
  [PHONE_NUMBER]: '',
  [EMAIL]: '',
  [ADDRESS]: '',
};
