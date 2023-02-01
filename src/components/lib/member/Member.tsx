import React from 'react';

import Button from '@/components/buttons/Button';
import { MemberProps } from '@/components/lib/member/Member.props';

const Member: React.FC<MemberProps> = ({ name, status, setLoanModal }) => {
  return (
    <div className='flex items-center justify-between py-4'>
      <p>{name}</p>
      <p>{status}</p>
      <Button onClick={() => setLoanModal(true)} variant='primary' size='base'>
        Apply for loan
      </Button>
    </div>
  );
};

export default Member;
