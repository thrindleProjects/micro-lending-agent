import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import Modal from 'react-modal';

import Button from '@/components/buttons/Button';
import { ModalWrapper } from '@/components/lib/CreateGroupModal/styled';
import { CreateGroupModalProps } from '@/components/lib/CreateGroupModal/types';
import Input from '@/components/shared/Input';

import { initialValues, validationSchema } from './validation';

const CreateGroupModal: CreateGroupModalProps = ({
  isOpen,
  handleClose,
  handleNext,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      handleNext();
      // setBvnModal(true);
    },
  });

  const handleCloseModal = () => {
    formik.resetForm();
    handleClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
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
          <section className='flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0'>
            <h5 className='w-full text-xl font-semibold sm:text-2xl md:w-max'>
              Create New Group
            </h5>
            <button
              onClick={handleCloseModal}
              className='-order-1 ml-auto text-2xl font-semibold md:order-1'
            >
              <Icon icon='material-symbols:close' />
            </button>
          </section>
          <p className='mt-6 text-base'>
            To create a new group a unique ID code will be generated for the
            group, this will serve as identification and future reference
          </p>

          <form
            className='mt-6 flex flex-col justify-between gap-6'
            onSubmit={formik.handleSubmit}
          >
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
            >
              <span className='font-semibold'>Create Group</span>
            </Button>
          </form>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default CreateGroupModal;
