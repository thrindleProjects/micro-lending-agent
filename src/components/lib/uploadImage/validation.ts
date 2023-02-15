import * as Yup from 'yup';

const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'doc',
  'docx',
  'pdf',
];

export const initialValues: { image?: File[] } = { image: [] };
export const validationSchema = Yup.object({
  image: Yup.array()
    .min(1, 'Please provide at least one image')
    .required('Image is requiered')
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
          return SUPPORTED_FORMATS.includes(file.type);
        });
        return isValid;
      }
    ),
});
