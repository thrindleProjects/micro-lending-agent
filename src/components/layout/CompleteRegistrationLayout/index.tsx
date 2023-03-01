import Image from 'next/image';
import { PropsWithChildren } from 'react';

import NavItem from '@/components/lib/NavItem';

const CompleteRegistrationLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='layout_wrapper'>
      <div className='layout__side_bar__wrapper'>
        <aside className='layout__side_bar'>
          <div className='my-auto flex h-20 w-full items-center bg-white px-4 py-4'>
            <Image
              style={{
                height: '100%',
                width: 'auto',
              }}
              src='/assets/amali-logo.png'
              alt='amali Logo'
              width={300}
              height={300}
            />
          </div>
        </aside>
        <div className='w-full pt-12'>
          <NavItem />
        </div>
      </div>
      {children}
    </div>
  );
};

export default CompleteRegistrationLayout;
