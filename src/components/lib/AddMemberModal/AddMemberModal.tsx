import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';

import logger from '@/lib/logger';

import { IDType } from '@/data/data';

import Button from '@/components/buttons/Button';
import MemberSuccess from '@/components/lib/memberSuccess';
import UnieditableInput from '@/components/lib/uneditableInput/UnieditableInput';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile';
import Select from '@/components/shared/Select';

import { useAppSelector } from '@/store/store.hooks';

import * as CONSTANTS from '@/constant/constants';
import { memberAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

import { AddMemberModalProps } from './types';
import { initialValues, validationSchema } from './validation';

const AddMemberModal: AddMemberModalProps = ({
  isOpen,
  handleClose,
  handleNext,
  onAdd,
  maxNew,
  handleModal,
}) => {
  const [count, setCount] = useState<number>(0);
  const [memberSuccess, setMemberSuccess] = useState<boolean>(false);
  const { bvn } = useAppSelector((state) => state.bvn);
  const [loading, setLoading] = useState(false);
  const { group } = useAppSelector((state) => state.group);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append('firstname', bvn?.firstName as string | Blob);
      formData.append('lastname', bvn?.lastName as string | Blob);
      formData.append('idType', values.id_type as string | Blob);
      formData.append('idNumber', values.idNumber as string | Blob);
      formData.append('idExpiryDate', values.idExpiryDate as string | Blob);
      formData.append('bvn', bvn?.bvn as string);
      formData.append('group', group?.id as string | Blob);

      if (values.registration_image) {
        formData.append(
          'registrationForm',
          values.registration_image[0] as Blob
        );
      }
      if (values.loan_image) {
        formData.append('loanApplicationForm', values.loan_image[0] as Blob);
      }
      if (values.id_image) {
        formData.append('idImage', values.id_image[0] as Blob);
      }
      if (values.other_image) {
        formData.append('otherDocumentImages', values.other_image[0] as Blob);
      }

      try {
        await memberAPI.addMember(formData);
        toast.success('BVN verified successfully');

        setLoading(false);

        formik.resetForm();
      } catch (error) {
        setLoading(false);

        if (error instanceof AxiosError) {
          logger({ error: error.response?.data }, 'Axios Error');
        }
        if (error instanceof AmaliError) {
          logger({ error: error.message, cause: error.cause }, 'Amali Error');
          (await import('react-hot-toast')).toast.error(
            error.message ?? 'Something went wrong'
          );
        }
      }
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
      className='h-full w-full flex-shrink-0 overflow-y-auto rounded-md bg-white drop-shadow-2xl md:h-max md:max-h-[90%] md:w-5/6 lg:w-3/5 xl:w-[40%] xl:max-w-2xl'
    >
      <div className='h-max w-full py-8 px-7'>
        {memberSuccess ? (
          <MemberSuccess
            setMemberSuccess={setMemberSuccess}
            handleModal={handleModal}
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
                  <UnieditableInput text={bvn?.firstName} label='First Name' />
                  <UnieditableInput text={bvn?.lastName} label='Last Name' />
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <Select
                    label='ID Type'
                    id={CONSTANTS.IDTYPE}
                    name={CONSTANTS.IDTYPE}
                    onChangeValue={formik.setFieldValue}
                    value={formik.values[CONSTANTS.IDTYPE]}
                    onBlurEvent={formik.setFieldTouched}
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
                    showPreview={true}
                  />
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <Input
                    id={CONSTANTS.ID_NUMBER}
                    name={CONSTANTS.ID_NUMBER}
                    onChange={formik.handleChange}
                    type='text'
                    label='ID Number'
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors[CONSTANTS.ID_NUMBER] &&
                      formik.touched[CONSTANTS.ID_NUMBER]
                    }
                    errorText={formik.errors[CONSTANTS.ID_NUMBER]}
                    required={true}
                    value={formik.values[CONSTANTS.ID_NUMBER]}
                    placeholder='Enter ID Number'
                  />
                  <Input
                    id={CONSTANTS.ID_EXPIRY}
                    name={CONSTANTS.ID_EXPIRY}
                    onChange={formik.handleChange}
                    type='date'
                    label='ID Expiry Date'
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors[CONSTANTS.ID_EXPIRY] &&
                      formik.touched[CONSTANTS.ID_EXPIRY]
                    }
                    errorText={formik.errors[CONSTANTS.ID_EXPIRY]}
                    required={true}
                    value={formik.values[CONSTANTS.ID_EXPIRY]}
                  />
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
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
                    multiple={true}
                    showPreview={true}
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
                    multiple={true}
                    showPreview={true}
                  />
                </div>
                <div>
                  <InputFile
                    label='Upload other Document (sales records / utility bills etc)'
                    id={CONSTANTS.OTHERIMAGE}
                    name={CONSTANTS.OTHERIMAGE}
                    type='file'
                    placeholder='Choose file'
                    onChange={formik.setFieldValue}
                    onBlur={formik.handleBlur}
                    value={formik.values[CONSTANTS.OTHERIMAGE]}
                    error={
                      formik.errors[CONSTANTS.OTHERIMAGE] &&
                      formik.touched[CONSTANTS.OTHERIMAGE]
                    }
                    errorText={formik.errors[CONSTANTS.OTHERIMAGE]}
                    required={true}
                    extensions='image/*, .doc, .docx, .pdf'
                    multiple={true}
                    showPreview={true}
                  />
                </div>
                <Button
                  variant='primary'
                  size='base'
                  className=' w-full '
                  type='submit'
                  isLoading={loading}
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
