import * as Yup from 'yup';

import * as CONSTANTS from '@/constant/constants';

const getExtension = (filename: string) => {
  return (
    (filename &&
      filename.substring(filename.lastIndexOf('.') + 1, filename.length)) ||
    filename
  );
};

export const validationSchema = Yup.object({
  [CONSTANTS.ID_CARD]: Yup.mixed().test({
    message: 'Please provide a supported file type',
    test: (file, context) => {
      const isValid = ['doc', 'docx', 'pdf'].includes(getExtension(file?.name));
      if (!isValid) context?.createError();
      return isValid;
    },
  }),
});

export const initialValues: {
  [CONSTANTS.ID_CARD]?: File | string;
} = {
  [CONSTANTS.ID_CARD]: '',
};
