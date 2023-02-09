import Link from 'next/link';

import RegisterForm from '@/components/lib/RegisterForm';
import ImageComponent from '@/components/shared/ImageComponent';

import AmaliLogo from '~/assets/amali-logo.png';

const Register: React.FC = () => {
  return (
    <div className='flex h-max min-h-max w-full flex-col items-center justify-center gap-4 overflow-y-auto bg-[#FBFBFF] py-12'>
      <div className='relative h-12 min-h-max w-full flex-shrink-0 bg-inherit lg:h-16'>
        <Link href='/' className='h-full'>
          <ImageComponent src={AmaliLogo} alt='Amali Logo' />
        </Link>
      </div>
      <section className='mt-8 w-4/5 cursor-default md:w-2/4 lg:w-7/12 xl:w-1/3'>
        <h4 className='w-full text-center text-sm font-bold md:text-xl'>
          Create Account
        </h4>
      </section>
      <div className='w-4/5 md:w-2/4 lg:w-7/12 xl:w-1/3'>
        <RegisterForm />
      </div>
      <section className='flex flex-row items-center gap-2 text-xs lg:text-sm'>
        <h6>Have an account?</h6>
        <Link
          href='/login'
          className='relative block w-max text-amali-green before:absolute before:inset-x-0 before:-bottom-px before:mx-auto before:w-0 before:bg-amali-green before:transition-all before:duration-500 before:ease-out hover:before:h-[2px] hover:before:w-full'
        >
          Login
        </Link>
      </section>
    </div>
  );
};

export default Register;
