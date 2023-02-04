import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { useMediaQuery, useOnClickOutside } from '@/hooks';

import { sideBarData } from '@/data/navLinks';

import AccountDropdown from '@/components/lib/AccountDropdown';
import ActiveLink from '@/components/links/ActiveLink';
import NotificationBell from '@/components/shared/NotificationBell';

import { NavBarProps } from './Navbar.props';

const variants = {
  rotate: {
    rotate: -90,
    transition: { duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  stop: {
    rotate: 90,
    transition: { duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] },
  },
};

const NavBar: React.FC<NavBarProps> = () => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const [accountDropdown, setAccountDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setAccountDropdown(false));

  const toggleAccountDropdown = () => {
    setAccountDropdown((prevState) => !prevState);
  };

  return (
    <nav className='layout__top_nav'>
      {largeScreen && (
        <div className='ml-auto hidden w-max px-4 lg:flex lg:items-center lg:gap-4'>
          <NotificationBell />
          <div
            className='relative cursor-pointer py-4'
            onClick={toggleAccountDropdown}
            ref={dropdownRef}
          >
            <div className='flex items-center gap-2 text-xs'>
              <Image
                alt='owner'
                src='/assets/profile.png'
                width={40}
                height={40}
                className='rounded-full'
              />
              <div>
                <p className='font-semibold'>Adewale Ayo</p>
                <p>Agent</p>
              </div>
              <div>
                <motion.div
                  variants={variants}
                  animate={accountDropdown ? 'rotate' : 'stop'}
                >
                  <Icon
                    icon='material-symbols:arrow-forward-ios-rounded'
                    className='font-bold '
                  />
                </motion.div>
              </div>
            </div>
            <AnimatePresence>
              {accountDropdown && <AccountDropdown />}
            </AnimatePresence>
          </div>
        </div>
      )}

      {!largeScreen && (
        <ul className='fixed inset-x-0 bottom-0 flex w-full justify-around border-t border-amali-grey border-opacity-50 bg-white lg:hidden'>
          {sideBarData.map((item, index) => {
            return (
              <li key={index} title={item.name}>
                <ActiveLink
                  href={item.link}
                  className='flex flex-col items-center gap-px border-t-2 border-transparent py-4'
                  activeClassName='text-amali-green border-amali-green'
                >
                  <span className='text-lg'>
                    <Icon icon={item.icon} className='font-bold' />
                  </span>
                  <span className='text-xs font-semibold'>{item.name}</span>
                </ActiveLink>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
