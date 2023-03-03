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
  [CONSTANTS.TITLE]: Yup.string().required('Title is required'),
  [CONSTANTS.FIRST_NAME]: Yup.string().required('First name is required'),
  [CONSTANTS.MIDDLENAME]: Yup.string().required('Middle name is required'),
  [CONSTANTS.LAST_NAME]: Yup.string().required('Last name is required'),
  [CONSTANTS.GENDER]: Yup.string().required('Gender is required'),
  [CONSTANTS.DATE_OF_BIRTH]: Yup.string().required('Date of birth is required'),
  [CONSTANTS.IDTYPE]: Yup.string().required('ID Type is required'),
  [CONSTANTS.NATIONALITY]: Yup.string().required('Nationality is required'),
});

export const initialValues: {
  [CONSTANTS.TITLE]: string;
  [CONSTANTS.FIRST_NAME]: string;
  [CONSTANTS.LAST_NAME]: string;
  [CONSTANTS.MIDDLENAME]: string;
  [CONSTANTS.GENDER]: string;
  [CONSTANTS.DATE_OF_BIRTH]: string;
  [CONSTANTS.IDTYPE]: string;
  [CONSTANTS.NATIONALITY]: string;
} = {
  [CONSTANTS.TITLE]: '',
  [CONSTANTS.FIRST_NAME]: '',
  [CONSTANTS.LAST_NAME]: '',
  [CONSTANTS.MIDDLENAME]: '',

  [CONSTANTS.GENDER]: '',
  [CONSTANTS.DATE_OF_BIRTH]: '',
  [CONSTANTS.IDTYPE]: '',
  [CONSTANTS.NATIONALITY]: '',
};
