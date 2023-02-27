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
    .typeError('Only numbers are allowed'),
  [CONSTANTS.MARKET]: Yup.string().required('Market is required'),
  [CONSTANTS.PASSWORD]: Yup.string().required('Please create a password'),
});

export const initialValues: {
  [CONSTANTS.BVN]: string;
  [CONSTANTS.MARKET]: string;
  [CONSTANTS.PASSWORD]: string;
} = {
  [CONSTANTS.BVN]: '',
  [CONSTANTS.MARKET]: '',
  [CONSTANTS.PASSWORD]: '',
};
