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
  [CONSTANTS.BUSINNESSNAME]: Yup.string().required('Business Name is required'),
  [CONSTANTS.WHATDOYOUSELL]: Yup.string().required('What you sell is required'),
  [CONSTANTS.BUSSINESSADDRESS]: Yup.string().required(
    'Business Address is required'
  ),
  [CONSTANTS.LANDMARK]: Yup.string().required('Landmark is required'),
  [CONSTANTS.STATE]: Yup.string().required('State is required'),
  [CONSTANTS.LGA]: Yup.string().required('LGA is required'),
  [CONSTANTS.LENGTHOFSTAY]: Yup.string().required('Length of stay is required'),
});

export const initialValues: {
  [CONSTANTS.BUSINNESSNAME]: string;
  [CONSTANTS.WHATDOYOUSELL]: string;
  [CONSTANTS.BUSSINESSADDRESS]: string;
  [CONSTANTS.LANDMARK]: string;
  [CONSTANTS.STATE]: string;
  [CONSTANTS.LGA]: string;
  [CONSTANTS.LENGTHOFSTAY]: string;
} = {
  [CONSTANTS.BUSINNESSNAME]: '',
  [CONSTANTS.WHATDOYOUSELL]: '',
  [CONSTANTS.BUSSINESSADDRESS]: '',
  [CONSTANTS.LANDMARK]: '',
  [CONSTANTS.STATE]: '',
  [CONSTANTS.LGA]: '',
  [CONSTANTS.LENGTHOFSTAY]: '',
};

export interface StateProps {
  state: string;
  senatorial_districts: string[];
  lgas: string[];
}
