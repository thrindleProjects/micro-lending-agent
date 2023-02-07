import Image from 'next/image';

import Button from '@/components/buttons/Button';
import { MemberSuccessProps } from '@/components/lib/memberSuccess/MemberSuccess.props';

const MemberSuccess: React.FC<MemberSuccessProps> = ({
  setMemberSuccess,
  setShowAddMemberModal,
}) => {
  return (
    <div className='h-screen w-full md:h-auto  '>
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        variant='primary'
        size='base'
        className=' mt-[17rem] w-full md:mt-0'
        onClick={() => {
          setMemberSuccess(false);
        }}
      >
        <p>Add New Member</p>
      </Button>
      <Button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        variant='outline'
        size='base'
        className='mt-4 w-full'
        onClick={() => setShowAddMemberModal(false)}
      >
        <p>Back</p>
      </Button>
    </div>
  );
};

export default MemberSuccess;
