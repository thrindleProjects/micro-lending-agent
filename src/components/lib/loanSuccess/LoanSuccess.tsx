import Image from 'next/image';

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
          Loan application successful, you will get notified when we have update
          on the application
        </p>
      </div>
      <Button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        variant='primary'
        size='base'
        className=' mt-[17rem] w-full md:mt-0'
      >
        Proceed
      </Button>
    </div>
  );
};

export default LoanSuccess;
