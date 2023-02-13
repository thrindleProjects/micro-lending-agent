import * as Yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
export const initialValues: {
  image: '' | File;
} = {
  image: '',
};

export const validationSchema = Yup.object({
  image: Yup.mixed()
    .nullable()
    .required('An image must be provided')
    .test(
      'format',
      'upload file',
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});
