import * as Yup from 'yup';
export const initialValues = {
  bvn: '',
};

export const validationSchema = Yup.object({
  bvn: Yup.number()
    .required('BVN is required')
    .typeError('BVN must be a number'),
});
