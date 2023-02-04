import Image from 'next/image';
import React from 'react';

import Button from '@/components/buttons/Button';

const LoanSuccess = () => {
  return (
    <div>
      <Image
        src='/assets/svg/mailbox.svg'
        alt='mailbox'
        width={127.57}
        height={103}
        className='mx-auto block'
      />
      <div className='my-6 text-center '>
        <h1 className='mb-6 text-2xl font-bold'>Loan Application Sent</h1>
        <p>
          Your application for 50,000 naira loan has been accepted and will be
          confirmed soon, check back later for update
        </p>
      </div>
      <Button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        variant='primary'
        size='base'
        className=' mt-[17rem] w-full md:mt-0'
      >
        <p>Proceed</p>
      </Button>
    </div>
  );
};

export default LoanSuccess;
