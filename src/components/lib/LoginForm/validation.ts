import * as Yup from 'yup';

export const initialValues: { phone: string; password: string } = {
  phone: '',
  password: '',
};

export const validationSchema = Yup.object({
  phone: Yup.number()
    .required('Phone number is required')
    .typeError('Only numbers are allowed'),
  password: Yup.string().required('Password is required'),
});
