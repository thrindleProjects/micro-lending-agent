import Link from 'next/link';

import LoginForm from '@/components/lib/LoginForm';
import ImageComponent from '@/components/shared/ImageComponent';

import AmaliLogo from '~/assets/amali-logo.png';

const LoginLayout: React.FC = () => {
  return (
    <div className='flex h-screen min-h-max w-full flex-col items-center gap-4 bg-[#FBFBFF] py-20'>
      <div className='relative h-12 min-h-max w-full flex-shrink-0 bg-inherit lg:h-16'>
        <Link href='/' className='h-full'>
          <ImageComponent src={AmaliLogo} alt='Amali Logo' />
        </Link>
      </div>
      <section className='mt-8 w-4/5 cursor-default md:w-2/4 lg:w-1/4 xl:w-1/3'>
        <h4 className='w-full text-center text-sm font-bold md:text-xl'>
          Welcome Back
        </h4>
      </section>
      <div className='w-4/5 md:w-2/4 lg:w-1/4 xl:w-1/3'>
        <LoginForm />
      </div>
      <section className='flex flex-row items-center gap-2 text-xs lg:text-sm'>
        <h6>Don&apos;t have an account?</h6>{' '}
        <Link
          href='/register'
          className='relative block w-max text-amali-green before:absolute before:inset-x-0 before:-bottom-px before:mx-auto before:w-0 before:bg-amali-green before:transition-all before:duration-500 before:ease-out hover:before:h-[2px] hover:before:w-full'
        >
          Sign up
        </Link>
      </section>
    </div>
  );
};

export default LoginLayout;
