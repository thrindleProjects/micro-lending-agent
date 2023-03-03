import Image from 'next/image';

import Button from '@/components/buttons/Button';
import { MemberSuccessProps } from '@/components/lib/memberSuccess/MemberSuccess.props';

const MemberSuccess: React.FC<MemberSuccessProps> = ({
  setMemberSuccess,
  // setShowAddMemberModal,
  handleModal,
  handleClose,
}) => {
  return (
    <div className='flex h-full w-full flex-col md:h-max'>
      <Image
        src='/assets/svg/profile.svg'
        alt='mailbox'
        width={127.57}
        height={103}
        className='mx-auto block'
      />
      <div className='my-6 text-center '>
        <h1 className='mb-6 text-2xl font-bold'>Member Added Successfully</h1>
        <p>A new member has been added to the group successfully</p>
      </div>

      <Button
        variant='primary'
        size='base'
        className=' mt-auto w-full md:mt-0'
        onClick={() => {
          setMemberSuccess(false);
          handleModal('check-bvn');
        }}
      >
        Add New Member
      </Button>
      <Button
        variant='outline'
        size='base'
        className='mt-4 w-full'
        onClick={() => {
          handleClose();
        }}
      >
        Back
      </Button>
    </div>
  );
};

export default MemberSuccess;
