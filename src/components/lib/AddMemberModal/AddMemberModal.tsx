import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';

import { IDType } from '@/data/data';

import Button from '@/components/buttons/Button';
import MemberSuccess from '@/components/lib/memberSuccess';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile';
import Select from '@/components/shared/Select';

import * as CONSTANTS from '@/constant/constants';

import { AddMemberModalProps } from './types';
import { initialValues, validationSchema } from './validation';

const AddMemberModal: AddMemberModalProps = ({
  isOpen,
  handleClose,
  handleNext,
  onAdd,
  maxNew,
}) => {
  const [count, setCount] = useState<number>(0);
  const [memberSuccess, setMemberSuccess] = useState<boolean>(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // logic
      const counter = typeof maxNew === 'number' ? maxNew : 3;
      if (onAdd) {
        onAdd();
      }
      if (count + 1 === counter) {
        toast.success('Group created successfully');
        handleNext();
        return;
      }
      setCount((old) => old + 1);
      setMemberSuccess(true);
      formik.resetForm();
    },
  });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='h-full w-full flex-shrink-0 rounded-md bg-white drop-shadow-2xl md:h-max md:w-5/6 lg:w-3/5 xl:w-[40%] xl:max-w-2xl'
    >
      <div className='h-full w-full overflow-y-auto py-8 px-7'>
        {memberSuccess ? (
          <MemberSuccess
            setMemberSuccess={setMemberSuccess}
            handleNext={handleNext}
          />
        ) : (
          <>
            <div className='mb-8 flex items-center justify-between text-2xl'>
              <h1 className='font-bold'>Add Member</h1>
              <button onClick={handleClose} type='button'>
                <IoMdClose className='cursor-pointer' />
              </button>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-6 md:flex-row'>
                  <Input
                    id={CONSTANTS.FIRST_NAME}
                    name={CONSTANTS.FIRST_NAME}
                    type={CONSTANTS.TEXT}
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
                    type={CONSTANTS.TEXT}
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
                <div className='flex flex-col gap-6 md:flex-row'>
                  <Select
                    label='ID Type'
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
                <div className='flex flex-col gap-6 md:flex-row'>
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
                <Button
                  variant='primary'
                  size='base'
                  className=' w-full '
                  type='submit'
                >
                  Proceed
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
};

export default AddMemberModal;
