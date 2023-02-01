import { useFormik } from 'formik';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import * as Yup from 'yup';

import { IDType } from '@/data/data';

import Button from '@/components/buttons/Button';
import { AddMemberFormProps } from '@/components/lib/addMemberForm/AddMemberForm.props';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile';
import Select from '@/components/shared/Select';

import * as CONSTANTS from '@/constant/constants';
import { TEXT } from '@/constant/constants';
const AddMemberForm: React.FC<AddMemberFormProps> = ({
  setShowAddMemberModal,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      IdType: '',
      idImage: '',
      registrationImage: '',
      loanImage: '',
      bvn: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name  is required'),
      lastName: Yup.string().required('Last Name is required'),
      IdType: Yup.string().required('Identification Type  is required'),
      idImage: Yup.string().required('Id Image is required'),
      registrationImage: Yup.string().required(
        'Registration Image is required'
      ),
      loanImage: Yup.string().required('Loan Image is required'),
      bvn: Yup.string().required('BVN is required'),
    }),
    onSubmit: (values) => {
      sessionStorage.setItem('values', JSON.stringify(values));
    },
  });
  return (
    <form>
      <div className='mb-8 flex items-center justify-between  text-2xl'>
        <h1 className='font-bold'>Add Member</h1>
        <IoMdClose
          className='cursor-pointer '
          onClick={() => setShowAddMemberModal(false)}
        />
      </div>
      <div className='mb-6 gap-6 md:flex'>
        <Input
          id='firstName'
          type={TEXT}
          value={formik.values.firstName}
          placeholder='Makinde'
          label='First Name '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.firstName && formik.touched.firstName}
          errorText={formik.errors.firstName}
          required={true}
        />
        <Input
          id='lastName'
          type={TEXT}
          value={formik.values.lastName}
          placeholder='John'
          label='Last Name '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.lastName && formik.touched.lastName}
          errorText={formik.errors.lastName}
          required={true}
        />
      </div>
      <div className='mb-6 gap-6 md:flex'>
        <Select
          label='Type'
          id='type'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.IdType && formik.touched.IdType}
          errorText={formik.errors.IdType}
          required={true}
          options={IDType}
        />
        <InputFile
          label='Upload ID Image'
          id={CONSTANTS.ID_CARD}
          name={CONSTANTS.ID_CARD}
          type='file'
          placeholder='Choose file'
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          // value={formik.values[CONSTANTS.ID_CARD]}
          error={formik.errors.idImage && formik.touched.idImage}
          errorText={formik.errors.idImage}
          required={true}
          extensions='image/*, .doc, .docx, .pdf'
        />
      </div>
      <div className='mb-6 gap-6 md:flex'>
        <InputFile
          label='Upload Registration form Image'
          id={CONSTANTS.REGISTRATION_IMAGE}
          name={CONSTANTS.REGISTRATION_IMAGE}
          type='file'
          placeholder='Choose file'
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          // value={formik.values[CONSTANTS.ID_CARD]}
          error={
            formik.errors.registrationImage && formik.touched.registrationImage
          }
          errorText={formik.errors.registrationImage}
          required={true}
          extensions='image/*, .doc, .docx, .pdf'
        />
        <InputFile
          label='Upload Registration form Image'
          id={CONSTANTS.LOAN_IMAGE}
          name={CONSTANTS.LOAN_IMAGE}
          type='file'
          placeholder='Choose file'
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          // value={formik.values[CONSTANTS.ID_CARD]}
          error={formik.errors.loanImage && formik.touched.loanImage}
          errorText={formik.errors.loanImage}
          required={true}
          extensions='image/*, .doc, .docx, .pdf'
        />
      </div>
      <div className=' w-full md:w-[50%]'>
        <Input
          id='bvn'
          type={TEXT}
          value={formik.values.bvn}
          placeholder='XXXXXXXXXX'
          label='BVN '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.bvn && formik.touched.bvn}
          errorText={formik.errors.bvn}
          required={true}
        />
      </div>
      <Button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        onSubmit={formik.handleSubmit}
        variant='primary'
        size='base'
        className=' w-full md:w-[150px] '
      >
        <p>Proceed</p>
      </Button>
    </form>
  );
};

export default AddMemberForm;
