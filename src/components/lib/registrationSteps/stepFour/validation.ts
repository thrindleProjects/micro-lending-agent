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
  [CONSTANTS.BANK_NAME]: Yup.string().required('Bank Name is required'),
  [CONSTANTS.ACCOUNT_NUMBER]: Yup.string().required(
    'Account Number is required'
  ),
});

export const initialValues: {
  [CONSTANTS.BANK_NAME]: string;
  [CONSTANTS.ACCOUNT_NUMBER]: string;
} = {
  [CONSTANTS.BANK_NAME]: '',
  [CONSTANTS.ACCOUNT_NUMBER]: '',
};
