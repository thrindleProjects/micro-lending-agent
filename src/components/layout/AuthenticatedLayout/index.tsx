import { PropsWithChildren } from 'react';

import { useMediaQuery } from '@/hooks';

import MobileNav from '@/components/shared/MobileNav';
import NavBar from '@/components/shared/NavBar';
import SideNav from '@/components/shared/SideNav';

const AuthenticatedLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div className='layout_wrapper '>
      {largeScreen && <SideNav />}
      {!largeScreen && <MobileNav />}

      <div className='main_wrapper'>
        <NavBar />
        <div className='main_container overflow-hidden'>
          <div className='h-full w-full overflow-hidden'>
            <main className='h-full w-full overflow-hidden'>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
