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
  [CONSTANTS.BVN]: Yup.number()
    .required('Last Name is required')
    .typeError('Only numbers are allowed'),
  [CONSTANTS.MARKET]: Yup.string().required('Market is required'),
  [CONSTANTS.PHONE_NUMBER]: Yup.string().required('Phone number is required'),
});

export const initialValues: {
  [CONSTANTS.BVN]: string;
  [CONSTANTS.MARKET]: string;
  [CONSTANTS.PHONE_NUMBER]: string;
} = {
  [CONSTANTS.BVN]: '',
  [CONSTANTS.MARKET]: '',
  [CONSTANTS.PHONE_NUMBER]: '',
};
