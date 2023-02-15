import * as Yup from 'yup';

import { getExtension } from '@/utils/validation';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
export const initialValues: {
  image?: File[];
  otherImage?: File[];
} = {
  image: [],
  otherImage: [],
};

export const validationSchema = Yup.object({
  image: Yup.array()
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
          return SUPPORTED_FORMATS.includes(getExtension(file.type));
        });
        return isValid;
      }
    )
    .nullable(),
  otherImage: Yup.array()
    .min(0, 'Please provide at least one image')
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
          return SUPPORTED_FORMATS.includes(getExtension(file.type));
        });
        return isValid;
      }
    )
    .nullable(),
});
