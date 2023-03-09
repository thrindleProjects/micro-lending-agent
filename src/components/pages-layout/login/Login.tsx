import Image from 'next/image';
import Link from 'next/link';

import LoginForm from '@/components/lib/LoginForm';

const LoginLayout: React.FC = () => {
  return (
    <div className='flex h-full min-h-max w-full items-center justify-center bg-[#F9F9F9]'>
      <div className='flex h-full w-full max-w-4xl flex-col items-center justify-center gap-4 overflow-y-auto bg-white py-12 md:h-max md:w-5/6 md:border md:border-amali-green md:border-opacity-10 lg:w-7/12 xl:w-2/4 2xl:py-24'>
        <div className='relative h-12 min-h-max w-full flex-shrink-0 bg-inherit lg:h-16'>
          <div className='h-full'>
            <Image
              style={{
                height: '100%',
                width: 'auto',
              }}
              src='/assets/amali-logo.png'
              alt='amali Logo'
              width={300}
              height={300}
              className='mx-auto'
            />
          </div>
        </div>
        <section className='mt-8 w-4/5 cursor-default md:w-[70%] lg:w-9/12 xl:w-2/3'>
          <h4 className='w-full text-left text-lg font-bold md:text-center md:text-xl'>
            Welcome Back
          </h4>
        </section>
        <div className='w-4/5 md:w-[70%] lg:w-9/12 xl:w-2/3'>
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
    </div>
  );
};

export default LoginLayout;
