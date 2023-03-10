import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { AiOutlineDownload, AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import useSWR from 'swr';

import useGroupLoanModals from '@/hooks/useGroupLoanModals';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import Member from '@/components/lib/member';
import Table from '@/components/lib/Table';
import ActionButtonItem from '@/components/shared/ActionButtonItem';
import BreadCrumbs from '@/components/shared/BreadCrumbs';
import GroupLoanModals from '@/components/shared/GroupLoanModals';
import MainContentLayout from '@/components/shared/MainContentLayout';

import { MAX_GROUP_LENGTH } from '@/constant/constants';
import { groupAPI } from '@/utils/api';

const SingleGroupLayout = () => {
  const [stage, handleModal, handleClose, handleNext, handlePrevious] =
    useGroupLoanModals(['check-bvn', 'upload-loan-image', 'loan-success']);
  const [
    addMemberStage,
    handleAddMemberModal,
    handleAddMemberClose,
    handleAddMemberNext,
    handleAddMemberPrevious,
  ] = useGroupLoanModals(['check-bvn', 'add-member']);

  const router = useRouter();

  const memberFetcher = async () => {
    return await groupAPI.getAllMembersInaGroup(router.query.id as string);
  };
  const groupFetcher = async () => {
    return await groupAPI.getAnAgentGroup(router.query.id as string);
  };

  const { data: memberData, mutate: mutateMember } = useSWR(
    `/api/group/members/${router.query.id}`,
    memberFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const handleOnAddMember = async () => {
    await mutateMember();
  };

  const { data: groupData } = useSWR(
    `/api/group/${router.query.id}`,
    groupFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const handleAddMember = async () => {
    if (memberData && memberData.data.length === MAX_GROUP_LENGTH) {
      (await import('react-hot-toast')).toast.error(
        'Maximum number of members added'
      );
      return;
    }
    handleAddMemberModal('check-bvn');
  };

  return (
    <>
      <MainContentLayout>
        <div className=''>
          <section className='hidden lg:block'>
            {groupData && <BreadCrumbs dynamic_text={groupData?.data?.name} />}
            <div className=' flex items-center justify-between'>
              <h1 className='text-2xl'>{groupData?.data?.name}</h1>
              {groupData && groupData.data.totalMembers < 3 && (
                <div className='flex items-center gap-3'>
                  <Button
                    onClick={handleAddMember}
                    variant='primary'
                    size='base'
                    leftIcon={AiOutlinePlus}
                    className='inline-flex'
                  >
                    <span className='font-semibold'> Add Members</span>
                  </Button>
                  <div className=' flex items-center gap-4'>
                    <a
                      href='/assets/file/reg.pdf'
                      download='AMALI REGISTRATION FORM.pdf'
                    >
                      <Button
                        variant='outline'
                        size='base'
                        className='inline-flex'
                        leftIcon={AiOutlineDownload}
                      >
                        <span className='font-semibold'>
                          Download Registration Form
                        </span>
                      </Button>
                    </a>
                    <a
                      href='/assets/file/loan.pdf'
                      download='AMALI LOAN APPLICATION.pdf'
                    >
                      <Button
                        variant='outline'
                        size='base'
                        className='inline-flex'
                        leftIcon={AiOutlineDownload}
                      >
                        <span className='font-semibold'>
                          Download Loan Application Form
                        </span>
                      </Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>
          <div className='text-2xl lg:hidden'>
            <button type='button' onClick={() => router.back()}>
              <BsArrowLeft className='mb-6' />
            </button>
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
              {memberData && memberData.data && !!memberData.data.length && (
                <tbody className='mt-6'>
                  {memberData.data.map((member) => (
                    <Member
                      onClick={handleModal}
                      name={`${member.firstname} ${member.lastname}`}
                      status={member.status ? 'Active' : 'Inactive'}
                      id={member.id}
                      key={member.id}
                    />
                  ))}
                </tbody>
              )}
            </Table>
            {memberData && memberData.data && !memberData.data.length && (
              <section className='my-20 flex flex-col items-center justify-center md:hidden'>
                <span className='block text-4xl text-amali-steel-blue text-opacity-40'>
                  <Icon icon='ph:smiley-sad-fill' />
                </span>
                <p className='mt-4  mb-6 text-[14px] font-semibold text-amali-grey'>
                  No member added yet
                </p>
                <Button onClick={handleAddMember} variant='primary' size='base'>
                  Add Members
                </Button>
              </section>
            )}
          </div>
        </div>
        {groupData && groupData.data.totalMembers < 3 && (
          <ActionButton
            actions={[
              <ActionButtonItem
                icon='material-symbols:add'
                text='Add Members'
                key={0}
                onClick={handleAddMember}
              />,
              <ActionButtonItem
                icon='material-symbols:download'
                text={`Download\nRegistration Form`}
                key={1}
              />,
            ]}
          />
        )}
      </MainContentLayout>
      {stage && (
        <GroupLoanModals
          stage={stage}
          handleModal={handleModal}
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          addMemberProps={{
            onAdd: handleOnAddMember,
            maxNew: MAX_GROUP_LENGTH - Number(memberData?.data?.length) ?? 0,
          }}
        />
      )}
      {addMemberStage && (
        <GroupLoanModals
          stage={addMemberStage}
          handleModal={handleAddMemberModal}
          handleClose={handleAddMemberClose}
          handleNext={handleAddMemberNext}
          handlePrevious={handleAddMemberPrevious}
          addMemberProps={{
            onAdd: handleOnAddMember,
            maxNew: MAX_GROUP_LENGTH - Number(memberData?.data?.length) ?? 0,
          }}
        />
      )}
    </>
  );
};

export default SingleGroupLayout;
