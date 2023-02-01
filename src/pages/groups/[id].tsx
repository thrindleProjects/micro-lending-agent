import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrDownload } from 'react-icons/gr';

import Button from '@/components/buttons/Button';
import AddMemberForm from '@/components/lib/addMemberForm/AddMemberForm';
import Modal from '@/components/shared/modal/Modal';

const Groups = () => {
  const [addMemberModal, setShowAddMemberModal] = useState(false);
  return (
    <div className='p-16'>
      <p className='font-bold text-amali-green'>
        <span className='mr-2 font-light text-amali-grey'>Groups /</span>Alpha{' '}
      </p>
      <div className='flex items-center justify-between'>
        <h1>Alpha Group</h1>
        <div className='flex items-center gap-3'>
          <Button
            onClick={() => setShowAddMemberModal(true)}
            variant='primary'
            size='base'
            leftIcon={AiOutlinePlus}
          >
            Add Members
          </Button>
          <Button variant='outline' size='base' leftIcon={GrDownload}>
            Download Registration Form
          </Button>
        </div>
      </div>
      <div className='mt-8 h-[67px] rounded-md bg-amali-light-yellow px-10'>
        <div className='my-auto flex h-full w-[50%] items-center justify-between font-bold text-amali-grey'>
          <p className=''>Name</p>
          <p>Status</p>
        </div>
      </div>

      {addMemberModal && (
        <Modal contentWidth='850px'>
          <AddMemberForm setShowAddMemberModal={setShowAddMemberModal} />
        </Modal>
      )}
    </div>
  );
};

export default Groups;
