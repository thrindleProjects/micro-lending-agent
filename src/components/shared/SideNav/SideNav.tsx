import Image from 'next/image';
import Link from 'next/link';

import NavItem from '@/components/lib/NavItem';

const SideNav = () => {
  return (
    <div className='layout__side_bar__wrapper'>
      <aside className='layout__side_bar'>
        <div className='my-auto flex h-20 w-full items-center bg-white px-4 py-4'>
          <Link href='/' className='relative flex h-full w-full items-center'>
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
        <div className='w-full pt-12'>
          <NavItem />
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
