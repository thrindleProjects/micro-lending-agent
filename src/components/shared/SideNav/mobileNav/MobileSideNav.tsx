import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

import { useMediaQuery, useOnClickOutside } from '@/hooks';

import NavItem from '@/components/lib/NavItem';

import { SideNavProps } from '../SideNav.props';

import AmaliLogo from '~/assets/amali-logo.png';

const MobileSideNav: React.FC<SideNavProps> = ({ toggleSidebar }) => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const divRef = useRef<null | HTMLDivElement>(null);

  // close modal on click outside
  useOnClickOutside(divRef, () => toggleSidebar(false));

  return (
    <div className='main-wrapper absolute right-0 left-0 top-0 bottom-0 z-50 bg-[#00000020]'>
      <div className='w-[50%] opacity-100'>
        <Image
          width={150}
          height={150}
          src={AmaliLogo}
          alt='Amali Logo'
          blurDataURL=''
          className='border-none object-contain'
        />
      </div>
      <motion.div
        ref={divRef}
        animate={{ x: !largeScreen ? 0 : '' }}
        initial={{ x: !largeScreen ? '-100vw' : '' }}
        exit={{ x: '-100vw' }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className='h-screen w-[95%] overflow-y-scroll bg-white p-3  pb-32 shadow-xl md:w-[70%]'
      >
        <NavItem />
      </motion.div>
    </div>
  );
};

export default MobileSideNav;
