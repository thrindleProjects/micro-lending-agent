import Link from 'next/link';

import RegisterForm from '@/components/lib/RegisterForm';
import ImageComponent from '@/components/shared/ImageComponent';

import { Market } from '@/types';

import AmaliLogo from '~/assets/amali-logo.png';

type RegisterLayoutProps = React.FC<{ markets: Market[] }>;

const Register: RegisterLayoutProps = ({ markets }) => {
  return (
    <div className='flex h-full min-h-max w-full flex-col items-center justify-center gap-4 overflow-y-auto bg-[#F9F9F9] py-12'>
      <section className='w-full p-10 md:w-2/4 md:border md:border-amali-green md:border-opacity-10 md:bg-white lg:w-7/12'>
        <div className='relative h-12 min-h-max w-full flex-shrink-0 bg-inherit lg:h-16'>
          <Link href='/' className='h-full'>
            <ImageComponent src={AmaliLogo} alt='Amali Logo' />
          </Link>
        </div>
        <h4 className='mt-10 w-full text-center text-sm font-bold md:text-xl'>
          Create Account
        </h4>
        <div className='w-full'>
          <RegisterForm markets={markets} />
        </div>
        {/* <section className='flex flex-row justify-center mt-10 items-center gap-2 text-xs lg:text-sm'>
          <h6>Have an account?</h6>
          <Link
            href='/login'
            className='relative block w-max text-amali-green before:absolute before:inset-x-0 before:-bottom-px before:mx-auto before:w-0 before:bg-amali-green before:transition-all before:duration-500 before:ease-out hover:before:h-[2px] hover:before:w-full'
          >
            Login
          </Link>
        </section> */}
      </section>
    </div>
  );
};

export default Register;
