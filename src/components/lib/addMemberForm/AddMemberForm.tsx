import { useFormik } from 'formik';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

import { IDType } from '@/data/data';

import Button from '@/components/buttons/Button';
import { AddMemberFormProps } from '@/components/lib/addMemberForm/AddMemberForm.props';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile';
import Select from '@/components/shared/Select';

import * as CONSTANTS from '@/constant/constants';
import { TEXT } from '@/constant/constants';
import { initialValues, validationSchema } from '@/utils/validation';

const AddMemberForm: React.FC<AddMemberFormProps> = ({
  setShowAddMemberModal,
  setShowGroupMembers,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      setShowGroupMembers(true);
      setShowAddMemberModal(false);
    },
  });
  return (
    <form className=''>
      <div className='mb-8  flex items-center justify-between  text-2xl'>
        <h1 className='font-bold'>Add Member</h1>
        <IoMdClose
          className='cursor-pointer '
          onClick={() => setShowAddMemberModal(false)}
        />
      </div>
      <div className='mb-6 gap-6 md:flex'>
        <Input
          id={CONSTANTS.FIRST_NAME}
          name={CONSTANTS.FIRST_NAME}
          type={TEXT}
          value={formik.values[CONSTANTS.FIRST_NAME]}
          placeholder='Makinde'
          label='First Name '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.FIRST_NAME] &&
            formik.touched[CONSTANTS.FIRST_NAME]
          }
          errorText={formik.errors[CONSTANTS.FIRST_NAME]}
          required={true}
        />
        <Input
          id={CONSTANTS.LAST_NAME}
          name={CONSTANTS.LAST_NAME}
          type={TEXT}
          value={formik.values[CONSTANTS.LAST_NAME]}
          placeholder='John'
          label='Last Name '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.LAST_NAME] &&
            formik.touched[CONSTANTS.LAST_NAME]
          }
          errorText={formik.errors[CONSTANTS.LAST_NAME]}
          required={true}
        />
      </div>
      <div className='mb-6 gap-6 md:flex'>
        <Select
          label='Type'
          id={CONSTANTS.IDTYPE}
          name={CONSTANTS.IDTYPE}
          onChange={formik.handleChange}
          value={formik.values[CONSTANTS.IDTYPE]}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.IDTYPE] && formik.touched[CONSTANTS.IDTYPE]
          }
          errorText={formik.errors[CONSTANTS.IDTYPE]}
          required={true}
          options={IDType}
        />
        <InputFile
          label='Upload ID Image'
          id={CONSTANTS.IDIMAGE}
          name={CONSTANTS.IDIMAGE}
          type='file'
          placeholder='Choose file'
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          value={formik.values[CONSTANTS.IDIMAGE]}
          error={
            formik.errors[CONSTANTS.IDIMAGE] &&
            formik.touched[CONSTANTS.IDIMAGE]
          }
          errorText={formik.errors[CONSTANTS.IDIMAGE]}
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
          value={formik.values[CONSTANTS.REGISTRATION_IMAGE]}
          error={
            formik.errors[CONSTANTS.REGISTRATION_IMAGE] &&
            formik.touched[CONSTANTS.REGISTRATION_IMAGE]
          }
          errorText={formik.errors[CONSTANTS.REGISTRATION_IMAGE]}
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
          value={formik.values[CONSTANTS.LOAN_IMAGE]}
          error={
            formik.errors[CONSTANTS.LOAN_IMAGE] &&
            formik.touched[CONSTANTS.LOAN_IMAGE]
          }
          errorText={formik.errors[CONSTANTS.LOAN_IMAGE]}
          required={true}
          extensions='image/*, .doc, .docx, .pdf'
        />
      </div>
      <div className=' w-full md:w-[50%]'>
        <Input
          id={CONSTANTS.BVN}
          name={CONSTANTS.BVN}
          type={TEXT}
          value={formik.values[CONSTANTS.BVN]}
          placeholder='XXXXXXXXXX'
          label='BVN '
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors[CONSTANTS.BVN] && formik.touched[CONSTANTS.BVN]}
          errorText={formik.errors[CONSTANTS.BVN]}
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
