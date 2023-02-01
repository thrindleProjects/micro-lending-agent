import { AnimatePresence } from 'framer-motion';
import React, { PropsWithChildren, useState } from 'react';

import { useMediaQuery } from '@/hooks';

import NavBar from '@/components/shared/NavBar';
import SideNav from '@/components/shared/SideNav';
import MobileSideNav from '@/components/shared/SideNav/mobileNav/MobileSideNav';

const AuthenticatedLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const largeScreen = useMediaQuery('(min-width: 1024px)');

  const toggleSidebar = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <div className='layout_wrapper '>
      {largeScreen && (
        <div className='layout__side_bar__wrapper'>
          <SideNav />
        </div>
      )}
      <div className='main_wrapper'>
        <NavBar toggleSidebar={toggleSidebar} isOpen={isOpen} />

        <AnimatePresence>
          {isOpen && !largeScreen && (
            <MobileSideNav toggleSidebar={toggleSidebar} />
          )}
        </AnimatePresence>

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
