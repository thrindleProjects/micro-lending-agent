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
    .required('BVN is required')
    .typeError('BVN must only contain numbers'),
  [CONSTANTS.ACCOUNT_NUMBER]: Yup.string().required(
    'Account Number is required'
  ),
});

export const initialValues: {
  [CONSTANTS.BVN]: string;
  [CONSTANTS.ACCOUNT_NUMBER]: string;
  [CONSTANTS.ACCOUNT_NUMBER]: string;
} = {
  [CONSTANTS.BVN]: '',
  [CONSTANTS.ACCOUNT_NUMBER]: '',
};
