import * as Yup from 'yup';

import * as CONSTANTS from '@/constant/constants';

export const getExtension = (filename: string) => {
  return (
    (filename &&
      filename.substring(filename.lastIndexOf('.') + 1, filename.length)) ||
    filename
  );
};

export const validationSchema = Yup.object({
  [CONSTANTS.FIRST_NAME]: Yup.string().required('First Name is required'),
  [CONSTANTS.LAST_NAME]: Yup.string().required('Last Name is required'),
  [CONSTANTS.BVN]: Yup.number()
    .required('BVN is required')
    .typeError('BVN must only contain numbers'),
  [CONSTANTS.IDTYPE]: Yup.string().required('Identification type  is required'),
  [CONSTANTS.REGISTRATION_IMAGE]: Yup.mixed().test({
    message: 'Please provide a supported file type',
    test: (file, context) => {
      const isValid = ['doc', 'docx', 'pdf', 'png', 'jpeg', 'jpg'].includes(
        getExtension(file?.name)
      );
      if (!isValid) context?.createError();
      return isValid;
    },
  }),
  [CONSTANTS.LOAN_IMAGE]: Yup.mixed().test({
    message: 'Please provide a supported file type',
    test: (file, context) => {
      const isValid = ['doc', 'docx', 'pdf', 'png', 'jpeg', 'jpg'].includes(
        getExtension(file?.name)
      );
      if (!isValid) context?.createError();
      return isValid;
    },
  }),
  [CONSTANTS.IDIMAGE]: Yup.mixed().test({
    message: 'Please provide a supported file type',
    test: (file, context) => {
      const isValid = ['doc', 'docx', 'pdf', 'png', 'jpeg', 'jpg'].includes(
        getExtension(file?.name)
      );
      if (!isValid) context?.createError();
      return isValid;
    },
  }),
});

export const initialValues: {
  [CONSTANTS.FIRST_NAME]: '';
  [CONSTANTS.LAST_NAME]: '';
  [CONSTANTS.IDTYPE]: '';

  [CONSTANTS.BVN]: '';
  [CONSTANTS.IDIMAGE]?: File | string;
  [CONSTANTS.REGISTRATION_IMAGE]?: File | string;
  [CONSTANTS.LOAN_IMAGE]?: File | string;
} = {
  [CONSTANTS.FIRST_NAME]: '',
  [CONSTANTS.LAST_NAME]: '',

  [CONSTANTS.BVN]: '',
  [CONSTANTS.REGISTRATION_IMAGE]: '',
  [CONSTANTS.LOAN_IMAGE]: '',
  [CONSTANTS.IDIMAGE]: '',
  [CONSTANTS.IDTYPE]: '',
};
