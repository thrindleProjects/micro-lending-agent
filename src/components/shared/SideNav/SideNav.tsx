import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import NavItem from '@/components/lib/NavItem';

const SideNav = () => {
  return (
    <aside className='layout__side_bar'>
      <div className='my-auto flex h-20 w-full items-center bg-white px-4 py-4'>
        <Link href='/' className='relative h-full w-full'>
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
        </Link>
      </div>
      <div className='w-full'>
        <NavItem />
      </div>
    </aside>
  );
};

export default SideNav;
