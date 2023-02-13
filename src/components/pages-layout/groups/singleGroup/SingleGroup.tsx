import { Icon } from '@iconify/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { GrDownload } from 'react-icons/gr';

import useGroupLoanModals from '@/hooks/useGroupLoanModals';

import { groupMembers } from '@/data/data';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import AddMemberForm from '@/components/lib/addMemberForm/AddMemberForm';
import Table from '@/components/lib/Table';
import ActionButtonItem from '@/components/shared/ActionButtonItem';
import MainContentLayout from '@/components/shared/MainContentLayout';
import Modal from '@/components/shared/modal/Modal';

const SingleGroupLayout = () => {
  const [addMemberModal, setShowAddMemberModal] = useState(false);
  const [showGroupMembers, setShowGroupMembers] = useState(false);

  const [stage, handleModal] = useGroupLoanModals();

  const GroupLoanModals = dynamic(
    () => import('@/components/shared/GroupLoanModals')
  );
  const Member = dynamic(() => import('@/components/lib/member'));

  return (
    <>
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
          <div className='w-full overflow-x-auto'>
            <Table className='mt-8'>
              <thead>
                <tr>
                  <th>Members</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              {showGroupMembers && (
                <tbody className='mt-6'>
                  {groupMembers.map((member, index) => (
                    <Member
                      onClick={handleModal}
                      name={member.name}
                      status={member.status}
                      id={member.id}
                      key={index}
                    />
                  ))}
                </tbody>
              )}
            </Table>
            {!showGroupMembers && (
              <section className='my-20 flex flex-col items-center justify-center md:hidden'>
                <span className='block text-4xl text-amali-steel-blue text-opacity-40'>
                  <Icon icon='ph:smiley-sad-fill' />
                </span>
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
          </div>

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
      {stage && <GroupLoanModals stage={stage} handleModal={handleModal} />}
    </>
  );
};

export default SingleGroupLayout;
