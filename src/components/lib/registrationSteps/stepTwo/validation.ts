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
  [CONSTANTS.MOBILENUMBER]: Yup.string().required('Mobile number is required'),
  [CONSTANTS.WHATSAPPNUMBER]: Yup.string().required(
    'WhatsApp number is required'
  ),
  [CONSTANTS.HOMEADDRESS]: Yup.string().required('Home address is required'),
  [CONSTANTS.LANDMARK]: Yup.string().required('Landmark is required'),
  [CONSTANTS.STATE]: Yup.string().required('State is required'),
  [CONSTANTS.LGA]: Yup.string().required('LGA is required'),
  [CONSTANTS.LENGTHOFSTAY]: Yup.string().required('Length of stay is required'),
  // [CONSTANTS.NATIONALITY]: Yup.string().required('Nationality is required'),
});

export const initialValues: {
  [CONSTANTS.MOBILENUMBER]: string;
  [CONSTANTS.WHATSAPPNUMBER]: string;
  [CONSTANTS.HOMEADDRESS]: string;
  [CONSTANTS.LANDMARK]: string;
  [CONSTANTS.STATE]: string;
  [CONSTANTS.LGA]: string;
  [CONSTANTS.LENGTHOFSTAY]: string;
  // [CONSTANTS.NATIONALITY]: string;
} = {
  [CONSTANTS.MOBILENUMBER]: '',
  [CONSTANTS.WHATSAPPNUMBER]: '',
  [CONSTANTS.HOMEADDRESS]: '',
  [CONSTANTS.LANDMARK]: '',
  [CONSTANTS.STATE]: '',
  [CONSTANTS.LGA]: '',
  [CONSTANTS.LENGTHOFSTAY]: '',
  // [CONSTANTS.NATIONALITY]: '',
};
