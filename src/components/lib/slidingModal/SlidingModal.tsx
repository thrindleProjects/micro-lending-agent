import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';

const SlidingModal = () => {
  return (
    <div
      style={{ backgroundColor: 'rgba(0, 26, 10, 0.4)' }}
      className='fixed inset-0 z-[99999] '
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
        className='absolute bottom-0 h-[400px] w-full rounded-t-lg bg-white p-6 shadow-sm'
      >
        <div>
          <IoMdClose
            className='ml-auto cursor-pointer text-3xl '
            // onClick={() => setLoanModal(false)}
          />
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
              Your application for 50,000 naira loan has been accepted and will
              be confirmed soon, check back later for update
            </p>
          </div>
          <Button
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            variant='primary'
            size='base'
            className='w-full md:mt-0'
          >
            <p>Proceed</p>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default SlidingModal;
