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
  [CONSTANTS.PASSWORD]: Yup.string()
    .required('Please create a password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must be a minimum of 8 characters including alphabets, numbers and symbols'
    ),
  [CONSTANTS.CONFRIMPASSWORD]: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], "Passwords don't match."),
});

export const initialValues: {
  [CONSTANTS.BVN]: string;
  [CONSTANTS.MARKET]: string;
  [CONSTANTS.PASSWORD]: string;
  [CONSTANTS.CONFRIMPASSWORD]: string;
} = {
  [CONSTANTS.BVN]: '',
  [CONSTANTS.MARKET]: '',
  [CONSTANTS.PASSWORD]: '',
  [CONSTANTS.CONFRIMPASSWORD]: '',
};
