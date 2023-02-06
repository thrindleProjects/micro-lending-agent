import { useFormik } from 'formik';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { IDType } from '@/data/data';

import Button from '@/components/buttons/Button';
import { AddMemberFormProps } from '@/components/lib/addMemberForm/AddMemberForm.props';
import MemberSuccess from '@/components/lib/memberSuccess/MemberSuccess';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile';
import Select from '@/components/shared/Select';

import * as CONSTANTS from '@/constant/constants';
import { TEXT } from '@/constant/constants';
import { initialValues, validationSchema } from '@/utils/validation';

const AddMemberForm: React.FC<AddMemberFormProps> = ({
  setShowAddMemberModal,
  setShowGroupMembers,
  setCount,
}) => {
  const [memberSuccess, setMemberSuccess] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (setShowGroupMembers) {
        setShowGroupMembers(true);
      }
      if (setCount) {
        setCount((prev) => prev + 1);
      }
      setMemberSuccess(true);
      formik.handleReset(values);
    },
  });
  return (
    <>
      {
        memberSuccess ? (
          <MemberSuccess
            setShowAddMemberModal={setShowAddMemberModal}
            setMemberSuccess={setMemberSuccess}
          />
        ) : (
          <form className='' onSubmit={formik.handleSubmit}>
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
                  formik.errors[CONSTANTS.IDTYPE] &&
                  formik.touched[CONSTANTS.IDTYPE]
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
                placeholder='Upload Image'
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
                placeholder='Upload Image'
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
                label='Upload Loan application form Image'
                id={CONSTANTS.LOAN_IMAGE}
                name={CONSTANTS.LOAN_IMAGE}
                type='file'
                placeholder='Upload Image'
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
                value={formik.values[CONSTANTS.LOAN_IMAGE]}
                error={
                  formik.errors[CONSTANTS.LOAN_IMAGE] &&
                  formik.touched[CONSTANTS.LOAN_IMAGE]
                }
                errorText={formik.errors[CONSTANTS.LOAN_IMAGE]}
                required={false}
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
                error={
                  formik.errors[CONSTANTS.BVN] && formik.touched[CONSTANTS.BVN]
                }
                errorText={formik.errors[CONSTANTS.BVN]}
                required={true}
              />
            </div>
            <Button
              variant='primary'
              size='base'
              className=' w-full md:w-[150px]'
              type='submit'
            >
              <p>Proceed</p>
            </Button>
          </form>
        )
        // </Container>
      }
    </>
  );
};

export default AddMemberForm;
