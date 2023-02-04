import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { GrDownload } from 'react-icons/gr';

import { groupMembers } from '@/data/data';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import AddMemberForm from '@/components/lib/addMemberForm/AddMemberForm';
import LoanModal from '@/components/lib/loanModal/LoanModal';
import Member from '@/components/lib/member/Member';
import MainContentLayout from '@/components/shared/MainContentLayout';
import Modal from '@/components/shared/modal/Modal';

const Groups = () => {
  const [addMemberModal, setShowAddMemberModal] = useState(false);
  const [showGroupMembers, setShowGroupMembers] = useState(false);
  const [loanModal, setLoanModal] = useState(false);
  return (
    <MainContentLayout>
      <div className=''>
        <section className='hidden md:block'>
          <p className='font-bold text-amali-green'>
            <span className='mr-2 font-light text-amali-grey'>Groups /</span>
            Alpha{' '}
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
                  Add Members
                </Button>
                <Button
                  variant='outline'
                  size='base'
                  className='inline-flex'
                  leftIcon={GrDownload}
                >
                  Download Registration Form
                </Button>
              </div>
            )}
          </div>
        </section>
        <div className=' text-2xl md:hidden '>
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
          <Modal className='w-[full] md:w-[800px]'>
            <AddMemberForm
              setShowAddMemberModal={setShowAddMemberModal}
              setShowGroupMembers={setShowGroupMembers}
            />
          </Modal>
        )}
      </div>
      <ActionButton
        actions={[
          <button
            onClick={() => setShowAddMemberModal(true)}
            key={0}
            className='flex w-max flex-col items-center gap-1'
          >
            <Icon icon='material-symbols:add' className='text-xl' />
            <span className='text-sm'>Add Members</span>
          </button>,
          <button key={1} className='flex w-max flex-col items-center gap-1'>
            <Icon icon='material-symbols:download' className='text-xl' />
            <span className='text-sm'>
              Download <br /> registration form
            </span>
          </button>,
        ]}
      />
      {/* {groupMembers.length === 3 ? (
        ''
      ) : (
        <ActionButton
          actions={[
            <button
              onClick={() => setShowAddMemberModal(true)}
              key={0}
              className='flex w-max flex-col items-center gap-1'
            >
              <Icon icon='material-symbols:add' className='text-xl' />
              <span className='text-sm'>Add Members</span>
            </button>,
            <button key={1} className='flex w-max flex-col items-center gap-1'>
              <Icon icon='material-symbols:download' className='text-xl' />
              <span className='text-sm'>
                Download <br /> registration form
              </span>
            </button>,
          ]}
        />
      )} */}
    </MainContentLayout>
  );
};

export default Groups;
