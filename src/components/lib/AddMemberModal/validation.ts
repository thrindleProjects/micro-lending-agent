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
  // [CONSTANTS.BVN]: Yup.number()
  //   .required('BVN is required')
  //   .typeError('BVN must only contain numbers'),
  [CONSTANTS.IDTYPE]: Yup.string().required('Identification type  is required'),
  [CONSTANTS.REGISTRATION_IMAGE]: Yup.array()
    .min(1, 'Please provide at least one image')
    .test(
      'unique',
      'Cannot have duplicate files',
      (value: undefined | File[], context) => {
        if (!value) {
          context.createError();
          return false;
        }
        const filenames = value.map((file) => file.name);
        const isValid = new Set(filenames).size === filenames.length;
        if (!isValid) {
          context.createError();
        }
        return new Set(filenames).size === filenames.length;
      }
    )
    .test(
      'fileType',
      'Please provide a supported file type',
      (value: undefined | File[]) => {
        if (!value) return false;
        const isValid = value.every((file) => {
          return ['doc', 'docx', 'png', 'jpeg', 'jpg'].includes(
            getExtension(file.name)
          );
        });
        return isValid;
      }
    ),
  [CONSTANTS.LOAN_IMAGE]: Yup.array()
    .min(1, 'Please provide at least one image')
    .test(
      'unique',
      'Cannot have duplicate files',
      (value: undefined | File[], context) => {
        if (!value) {
          context.createError();
          return false;
        }
        const filenames = value.map((file) => file.name);
        const isValid = new Set(filenames).size === filenames.length;
        if (!isValid) {
          context.createError();
        }
        return new Set(filenames).size === filenames.length;
      }
    )
    .test(
      'fileType',
      'Please provide a supported file type',
      (value: undefined | File[]) => {
        if (!value) return false;
        const isValid = value.every((file) => {
          return ['doc', 'docx', 'png', 'jpeg', 'jpg'].includes(
            getExtension(file.name)
          );
        });
        return isValid;
      }
    ),
  [CONSTANTS.IDIMAGE]: Yup.mixed().test({
    message: 'Please provide a supported file type',
    test: (file, context) => {
      const isValid = ['doc', 'docx', 'png', 'jpeg', 'jpg'].includes(
        getExtension(file[0]?.name)
      );

      if (!isValid) context?.createError();
      return isValid;
    },
  }),
  // [CONSTANTS.OTHERIMAGE]: Yup.array()
  //   .min(1, 'Please provide at least one image')
  //   .test(
  //     'unique',
  //     'Cannot have duplicate files',
  //     (value: undefined | File[], context) => {
  //       if (!value) {
  //         context.createError();
  //         return false;
  //       }
  //       const filenames = value.map((file) => file.name);
  //       const isValid = new Set(filenames).size === filenames.length;
  //       if (!isValid) {
  //         context.createError();
  //       }
  //       return new Set(filenames).size === filenames.length;
  //     }
  //   )
  //   .test(
  //     'fileType',
  //     'Please provide a supported file type',
  //     (value: undefined | File[]) => {
  //       if (!value) return false;
  //       const isValid = value.every((file) => {
  //         return ['doc', 'docx', 'png', 'jpeg', 'jpg'].includes(
  //           getExtension(file.name)
  //         );
  //       });
  //       return isValid;
  //     }
  //   ),
  [CONSTANTS.ID_NUMBER]: Yup.number()
    .required('ID number is required')
    .typeError('ID number can only contain numbers'),
  [CONSTANTS.ID_EXPIRY]: Yup.string()
    .typeError('Must be a valid date')
    .required('Please provide an expiry date'),
});

export const initialValues: {
  [CONSTANTS.FIRST_NAME]: string;
  [CONSTANTS.LAST_NAME]: string;
  [CONSTANTS.IDTYPE]: string;
  [CONSTANTS.BVN]: string;
  [CONSTANTS.IDIMAGE]?: File[];
  [CONSTANTS.ID_NUMBER]: string;
  [CONSTANTS.ID_EXPIRY]: string;
  [CONSTANTS.REGISTRATION_IMAGE]?: File[];
  [CONSTANTS.LOAN_IMAGE]?: File[];
  [CONSTANTS.OTHERIMAGE]?: File[];
} = {
  [CONSTANTS.FIRST_NAME]: '',
  [CONSTANTS.LAST_NAME]: '',
  [CONSTANTS.BVN]: '',
  [CONSTANTS.REGISTRATION_IMAGE]: [],
  [CONSTANTS.LOAN_IMAGE]: [],
  [CONSTANTS.IDIMAGE]: [],
  [CONSTANTS.OTHERIMAGE]: [],
  [CONSTANTS.IDTYPE]: '',
  [CONSTANTS.ID_NUMBER]: '',
  [CONSTANTS.ID_EXPIRY]: '',
};
