import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';

import Button from '@/components/buttons/Button';
import AddMemberForm from '@/components/lib/addMemberForm/AddMemberForm';
import { ModalWrapper } from '@/components/lib/CreateGroupModal/styled';
import { CreateGroupModalProps } from '@/components/lib/CreateGroupModal/types';
import LoanModal from '@/components/lib/loanModal/LoanModal';
import Input from '@/components/shared/Input';
import Container from '@/components/shared/modal/Modal';

import { initialValues, validationSchema } from './validation';

const CreateGroupModal: CreateGroupModalProps = ({ isOpen, handleModal }) => {
  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);
  const [bnvModal, setBvnModal] = useState(false);
  const [count, setCount] = useState(0);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      handleModal();
      setBvnModal(true);
    },
  });

  useEffect(() => {
    if (count === 3) {
      setOpenAddMemberModal(false);
      toast.success('Group created successfully');
    }
  }, [count]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleModal}
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
        className='h-full w-full flex-shrink-0 rounded-md bg-white drop-shadow-2xl md:h-max md:w-5/6 lg:w-3/5 xl:w-[35%]'
      >
        <ModalWrapper className='w-full py-8 px-7'>
          <section className='flex w-full items-center justify-between'>
            <h5 className='text-xl font-semibold sm:text-2xl'>
              Create New Group
            </h5>
            <button onClick={handleModal} className=' text-2xl font-semibold'>
              <Icon icon='material-symbols:close' />
            </button>
          </section>
          <p className='mt-6 text-base'>
            To create a new group a unique ID code will be generated for the
            group, this will serve as identification and future reference
          </p>

          <form className='mt-6 flex flex-col justify-between'>
            <Input
              type='text'
              id='name'
              value={formik.values.name}
              placeholder='Group Name'
              label='Group Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.name && formik.touched.name}
              errorText={formik.errors.name}
              required={true}
            />
            <Button
              type='submit'
              variant='primary'
              size='base'
              className='w-full lg:mt-6'
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onClick={formik.handleSubmit}
            >
              <span className='font-semibold'>Create Group</span>
            </Button>
          </form>
        </ModalWrapper>
      </Modal>
      {openAddMemberModal && (
        <Container className='w-full md:w-[650px]'>
          <AddMemberForm
            setShowAddMemberModal={setOpenAddMemberModal}
            setCount={setCount}
            count={count}
          />
        </Container>
      )}
      {bnvModal && (
        <Container className='w-full md:w-[500px]'>
          <LoanModal
            setLoanModal={setBvnModal}
            setShowAddMemberModal={setOpenAddMemberModal}
          />
        </Container>
      )}
    </>
  );
};

export default CreateGroupModal;
