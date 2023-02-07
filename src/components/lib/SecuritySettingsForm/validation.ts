import * as Yup from 'yup';

import {
  CURRENT_PASSWORD,
  NEW_PASSWORD,
  R_NEW_PASSWORD,
} from '@/constant/constants';

export const validationSchema = Yup.object({
  [CURRENT_PASSWORD]: Yup.string().required(
    'Please enter your current password'
  ),
  [NEW_PASSWORD]: Yup.string().required('Please enter your new password'),
  [R_NEW_PASSWORD]: Yup.string().required('Re-type your new password'),
});

export const initialValues = {
  [CURRENT_PASSWORD]: '',
  [NEW_PASSWORD]: '',
  [R_NEW_PASSWORD]: '',
};
