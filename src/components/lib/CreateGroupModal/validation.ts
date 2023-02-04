import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name of group is required')
    .typeError('Input string only'),
});

export const initialValues = {
  name: '',
};
