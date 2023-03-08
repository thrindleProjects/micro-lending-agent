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
  [CONSTANTS.MOBILENUMBER]: Yup.number()
    .required('Mobile number is required')
    .typeError('Mobile number must be a number'),
  [CONSTANTS.WHATSAPPNUMBER]: Yup.number()
    .required('WhatsApp number is required')
    .typeError('WhatsApp number must be a number'),
  [CONSTANTS.HOMEADDRESS]: Yup.string().required('Home address is required'),
  [CONSTANTS.LANDMARK]: Yup.string().required('Landmark is required'),
  [CONSTANTS.STATE]: Yup.string().required('State is required'),
  [CONSTANTS.LGA]: Yup.string().required('LGA is required'),
  [CONSTANTS.LENGTHOFSTAY]: Yup.string().required('Length of stay is required'),
  [CONSTANTS.NATIONALITY]: Yup.string().required('Nationality is required'),
  [CONSTANTS.IDTYPE]: Yup.string().required('ID Type is required'),
});

export const initialValues: {
  [x: string]: string | undefined;
  [CONSTANTS.MOBILENUMBER]: string;
  [CONSTANTS.WHATSAPPNUMBER]: string;
  [CONSTANTS.HOMEADDRESS]: string;
  [CONSTANTS.LANDMARK]: string;
  [CONSTANTS.STATE]: string;
  [CONSTANTS.LGA]: string;
  [CONSTANTS.LENGTHOFSTAY]: string;
  [CONSTANTS.NATIONALITY]: string;
  [CONSTANTS.IDTYPE]: string;
  [CONSTANTS.ID_NUMBER]: string;
} = {
  [CONSTANTS.MOBILENUMBER]: '',
  [CONSTANTS.WHATSAPPNUMBER]: '',
  [CONSTANTS.HOMEADDRESS]: '',
  [CONSTANTS.LANDMARK]: '',
  [CONSTANTS.STATE]: '',
  [CONSTANTS.LGA]: '',
  [CONSTANTS.LENGTHOFSTAY]: '',
  [CONSTANTS.NATIONALITY]: '',
  [CONSTANTS.IDTYPE]: '',
  [CONSTANTS.ID_NUMBER]: '',
};
