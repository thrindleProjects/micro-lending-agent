import Image from 'next/image';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { GrDownload } from 'react-icons/gr';

import { groupMembers } from '@/data/data';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import AddMemberForm from '@/components/lib/addMemberForm/AddMemberForm';
import LoanModal from '@/components/lib/loanModal/LoanModal';
import Member from '@/components/lib/member/Member';
import ActionButtonItem from '@/components/shared/ActionButtonItem';
import MainContentLayout from '@/components/shared/MainContentLayout';
import Modal from '@/components/shared/modal/Modal';

const Groups = () => {
  const [addMemberModal, setShowAddMemberModal] = useState(false);
  const [showGroupMembers, setShowGroupMembers] = useState(false);
  const [loanModal, setLoanModal] = useState(false);
  return (
    <MainContentLayout>
      <div className=''>
        <section className='hidden lg:block'>
          <p className='font-bold text-amali-green'>
            <span className='mr-2 font-light text-amali-grey'>Groups /</span>
            Alpha
          </p>
          <div className=' flex items-center justify-between'>
            <h1 className='text-2xl'>Alpha Group</h1>
            {!showGroupMembers && (
              <div className='flex items-center gap-3'>
                <Button
                  onClick={() => setShowAddMemberModal(true)}
                  variant='primary'
                  size='base'
                  leftIcon={AiOutlinePlus}
                  className='inline-flex'
                >
                  <span className='font-semibold'> Add Members</span>
                </Button>
                <Button
                  variant='outline'
                  size='base'
                  className='inline-flex'
                  leftIcon={GrDownload}
                >
                  <span className='font-semibold'>
                    {' '}
                    Download Registration Form
                  </span>
                </Button>
              </div>
            )}
          </div>
        </section>
        <div className='text-2xl lg:hidden'>
          <BsArrowLeft className='mb-6' />
          <h1 className='font-bold'>Alpha Group</h1>
        </div>

        <div className='mt-8 h-[67px] rounded-md bg-amali-light-yellow px-3 md:px-10'>
          <div className='my-auto flex h-full w-full items-center justify-between font-semibold text-amali-grey md:w-[50%]'>
            <p className=''>Members</p>
            <p>Status</p>
          </div>
        </div>

        {!showGroupMembers && (
          <section className='my-20 flex flex-col items-center justify-center md:hidden'>
            <Image
              width={32.5}
              height={32.5}
              src='/assets/svg/sad.svg'
              alt='img'
            />
            <p className='mt-4  mb-6 text-[14px] font-semibold text-amali-grey'>
              No member added yet
            </p>
            <Button
              onClick={() => setShowAddMemberModal(true)}
              variant='primary'
              size='base'
            >
              Add Members
            </Button>
          </section>
        )}
        {showGroupMembers && (
          <div className='mt-6'>
            {groupMembers.map((member, index) => (
              <Member
                setLoanModal={setLoanModal}
                name={member.name}
                status={member.status}
                id={member.id}
                key={index}
              />
            ))}
          </div>
        )}

        {loanModal && (
          <Modal className='h-full w-full md:h-auto  md:w-[598px]'>
            <LoanModal setLoanModal={setLoanModal} />
          </Modal>
        )}

        {addMemberModal && (
          <Modal className='h-full w-full md:h-max md:w-11/12 lg:w-[50rem]'>
            <AddMemberForm
              setShowAddMemberModal={setShowAddMemberModal}
              setShowGroupMembers={setShowGroupMembers}
            />
          </Modal>
        )}
      </div>
      <ActionButton
        actions={[
          <ActionButtonItem
            icon='material-symbols:add'
            text='Add Members'
            key={0}
            onClick={() => setShowAddMemberModal(true)}
          />,
          <ActionButtonItem
            icon='material-symbols:download'
            text={`Download\nRegistration Form`}
            key={1}
          />,
        ]}
      />
    </MainContentLayout>
  );
};

export default Groups;
