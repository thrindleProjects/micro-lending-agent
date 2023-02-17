import * as Yup from 'yup';

import * as CONSTANTS from '@/constant/constants';

// const getExtension = (filename: string) => {
//   return (
//     (filename &&
//       filename.substring(filename.lastIndexOf('.') + 1, filename.length)) ||
//     filename
//   );
// };

export const validationSchema = Yup.object({
  [CONSTANTS.NAME]: Yup.string().required('Name is required'),
  [CONSTANTS.PHONE_NUMBER]: Yup.number()
    .required('Last Name is required')
    .typeError('Only numbers are allowed'),
  [CONSTANTS.MARKET]: Yup.string().required('Market is required'),
  [CONSTANTS.PASSWORD]: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export const initialValues: {
  [CONSTANTS.NAME]: string;
  [CONSTANTS.PHONE_NUMBER]: string;
  [CONSTANTS.PASSWORD]: string;
  [CONSTANTS.MARKET]: string;
} = {
  [CONSTANTS.NAME]: '',
  [CONSTANTS.PHONE_NUMBER]: '',
  [CONSTANTS.PASSWORD]: '',
  [CONSTANTS.MARKET]: '',
};
