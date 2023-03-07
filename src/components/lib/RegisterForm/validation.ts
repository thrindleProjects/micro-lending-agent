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
  // [CONSTANTS.BVN]: Yup.number()
  //   .required('BVN is required')
  //   .typeError('Only numbers are allowed'),
  [CONSTANTS.FIRST_NAME]: Yup.string().required('First Name is required'),
  [CONSTANTS.LAST_NAME]: Yup.string().required('Last Na,e is required'),
  [CONSTANTS.MIDDLENAME]: Yup.string().required('Middle Name is required'),
  [CONSTANTS.PHONE_NUMBER]: Yup.string().required('Phone Number is required'),
  [CONSTANTS.GENDER]: Yup.string().required('Gender is required'),
  [CONSTANTS.DATE_OF_BIRTH]: Yup.string().required('Date of Birth is required'),
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
  // [CONSTANTS.BVN]: string;
  [CONSTANTS.MARKET]: string;
  [CONSTANTS.LAST_NAME]: string;
  [CONSTANTS.FIRST_NAME]: string;
  [CONSTANTS.GENDER]: string;
  [CONSTANTS.MIDDLENAME]: string;
  [CONSTANTS.DATE_OF_BIRTH]: string;
  [CONSTANTS.PASSWORD]: string;
  [CONSTANTS.PHONE_NUMBER]: string;
  [CONSTANTS.CONFRIMPASSWORD]: string;
} = {
  // [CONSTANTS.BVN]: '',
  [CONSTANTS.MARKET]: '',
  [CONSTANTS.LAST_NAME]: '',
  [CONSTANTS.FIRST_NAME]: '',
  [CONSTANTS.GENDER]: '',
  [CONSTANTS.MIDDLENAME]: '',
  [CONSTANTS.DATE_OF_BIRTH]: '',
  [CONSTANTS.PASSWORD]: '',
  [CONSTANTS.CONFRIMPASSWORD]: '',
  [CONSTANTS.PHONE_NUMBER]: '',
};
