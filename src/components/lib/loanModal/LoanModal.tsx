import { useFormik } from 'formik';
import Image from 'next/image';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import * as Yup from 'yup';

import Button from '@/components/buttons/Button';
import { LoanModalProps } from '@/components/lib/loanModal/LoanModal.props';
import UploadImage from '@/components/lib/uploadImage/UploadImage';
import Input from '@/components/shared/Input';
import Modal from '@/components/shared/modal/Modal';

import { TEXT } from '@/constant/constants';

const LoanModal: React.FC<LoanModalProps> = ({
  setLoanModal,
  setShowAddMemberModal,
}) => {
  const [uploadImage, setUploadImage] = useState(false);

  const formik = useFormik({
    initialValues: {
      bvn: '',
    },
    validationSchema: Yup.object({
      bvn: Yup.string().required('Bvn is required'),
    }),
    onSubmit: () => {
      if (setShowAddMemberModal) {
        setShowAddMemberModal(true);
        setLoanModal(false);
      } else {
        setUploadImage(true);
      }
    },
  });
  return (
    <Modal className='h-full w-full md:h-auto md:w-[598px]'>
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
          <form onSubmit={formik.handleSubmit}>
            <div className='mb-10 flex w-full flex-col gap-6 '>
              <Input
                id='bvn'
                name='bvn'
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
              <div className='flex w-full items-center justify-between gap-2 rounded-sm bg-amali-light-green py-1 px-4 md:hidden'>
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
              type='submit'
              variant='primary'
              size='base'
              className=' mt-[17rem] w-full md:mt-0'
            >
              Verify
            </Button>
          </form>
        </section>
      )}

      {uploadImage && (
        <section>
          <UploadImage onClick={() => setUploadImage(false)} />
        </section>
      )}
    </Modal>
  );
};

export default LoanModal;
