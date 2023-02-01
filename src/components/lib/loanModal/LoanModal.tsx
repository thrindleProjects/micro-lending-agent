import { useFormik } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import { LoanModalProps } from '@/components/lib/loanModal/LoanModal.props';
import Input from '@/components/shared/Input';

import * as CONSTANTS from '@/constant/constants';
import { TEXT } from '@/constant/constants';

import { initialValues, validationSchema } from '../../../utils/validation';

const LoanModal: React.FC<LoanModalProps> = ({ setLoanModal }) => {
  const [uploadImage, setUploadImage] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      setUploadImage(true);
    },
  });
  return (
    <div className=''>
      {!uploadImage && (
        <section>
          <div className='ml-auto   hidden  w-[70%] justify-between text-xl md:flex'>
            <p className='text-center font-bold '>Loan Application</p>
            <IoMdClose
              className='cursor-pointer '
              onClick={() => setLoanModal(false)}
            />
          </div>
          <div className='mb-10  ml-auto block  text-xl  md:hidden'>
            <IoMdClose
              className='ml-auto mb-10 cursor-pointer text-2xl '
              onClick={() => setLoanModal(false)}
            />
            <p className=' font-bold '>Loan Application</p>
          </div>
          <form>
            <div className='  mb-10 w-full '>
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
              <div className='flex h-[32px] items-center justify-between gap-2 rounded-sm bg-amali-light-green px-4 md:hidden'>
                <Image
                  src='/assets/svg/question-mark.svg'
                  alt='question mark'
                  width={12}
                  height={13}
                />
                <p className='text-xs text-amali-green'>
                  Click here to see why we need your BVN
                </p>
                <Image
                  src='/assets/svg/arrow-down.svg'
                  alt='question mark'
                  width={12}
                  height={13}
                />
              </div>
            </div>
            <Button
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              onSubmit={formik.handleSubmit}
              variant='primary'
              size='base'
              className=' mt-[20rem] w-full md:mt-0'
            >
              <p>Verify</p>
            </Button>
          </form>
        </section>
      )}

      {uploadImage && <section></section>}
    </div>
  );
};

export default LoanModal;
