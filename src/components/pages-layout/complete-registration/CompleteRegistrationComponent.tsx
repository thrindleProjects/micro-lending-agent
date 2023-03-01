import Link from 'next/link';
import { useSession } from 'next-auth/react';

import RegisterIndex from '@/components/lib/registrationSteps';
import ImageComponent from '@/components/shared/ImageComponent';

import AmaliLogo from '~/assets/amali-logo.png';

const CompleteRegistrationComponent = () => {
  const { data } = useSession();

  return (
    <div className='h-full w-full overflow-y-auto overflow-x-hidden py-8 lg:pl-6'>
      <section className='flex w-full flex-col items-center gap-4 bg-white'>
        <div className='relative mt-8 h-12 min-h-max w-full flex-shrink-0 bg-inherit lg:hidden lg:h-16'>
          <Link href='/' className='h-full'>
            <ImageComponent src={AmaliLogo} alt='Amali Logo' />
          </Link>
        </div>
        <section className='mt-8 w-full cursor-default md:w-[80%] lg:w-10/12 xl:w-2/3'>
          <h4 className='mx-auto mb-6 w-4/5 text-left text-lg font-bold md:w-[70%] md:text-center md:text-xl lg:mb-0 lg:w-9/12 xl:w-2/3'>
            Complete Registration
          </h4>
          <div className='w-full'>
            {!!data && <RegisterIndex session={data} />}
          </div>
        </section>
      </section>
    </div>
  );
};

export default CompleteRegistrationComponent;
