import * as Yup from 'yup';

import * as CONSTANTS from '@/constant/constants';
import { getExtension } from '@/utils/validation';

// const getExtension = (filename: string) => {
//   return (
//     (filename &&
//       filename.substring(filename.lastIndexOf('.') + 1, filename.length)) ||
//     filename
//   );
// };

export const validationSchema = Yup.object({
  [CONSTANTS.IDIMAGE]: Yup.mixed().test({
    message: 'Please provide a supported file type',
    test: (file, context) => {
      const isValid = ['doc', 'docx', 'pdf', 'png', 'jpeg', 'jpg'].includes(
        getExtension(file[0]?.name)
      );

      if (!isValid) context?.createError();
      return isValid;
    },
  }),
  [CONSTANTS.PLACEOFBUSINESS]: Yup.mixed().test({
    message: 'Please provide a supported file type',
    test: (file, context) => {
      const isValid = ['doc', 'docx', 'pdf', 'png', 'jpeg', 'jpg'].includes(
        getExtension(file[0]?.name)
      );

      if (!isValid) context?.createError();
      return isValid;
    },
  }),
});

export const initialValues: {
  [CONSTANTS.IDIMAGE]?: File[];
  [CONSTANTS.PLACEOFBUSINESS]?: File[];
} = {
  [CONSTANTS.IDIMAGE]: [],
  [CONSTANTS.PLACEOFBUSINESS]: [],
};
