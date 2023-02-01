import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { useMediaQuery, useOnClickOutside } from '@/hooks';

import { sideBarData } from '@/data/navLinks';

import AccountDropdown from '@/components/lib/AccountDropdown';
import ActiveLink from '@/components/links/ActiveLink';

import { NavBarProps } from './Navbar.props';

const NavBar: React.FC<NavBarProps> = () => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const [accountDropdown, setAccountDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setAccountDropdown(false));

  const toggleAccountDropdown = () => {
    setAccountDropdown((prevState) => !prevState);
  };

  // const handleToggleSidebar = (isOpen: boolean) => {
  //   !isOpen ? toggleSidebar(true) : toggleSidebar(false);
  // };

  return (
    <nav className='layout__top_nav'>
      {largeScreen && (
        <div className='ml-auto hidden w-max items-center gap-4 p-4 lg:flex'>
          <Icon icon='material-symbols:search' className='text-2xl' />

          <div
            className='relative cursor-pointer'
            onClick={toggleAccountDropdown}
          >
            <Image
              alt='owner'
              src='/assets/profile.png'
              width={40}
              height={40}
              className='rounded-full'
            />
          </div>
        </div>
      )}

      {!largeScreen && (
        <ul className='fixed inset-x-0 bottom-0 flex w-full justify-around bg-white lg:hidden'>
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
      <div className='relative ' ref={dropdownRef}>
        {accountDropdown && <AccountDropdown />}
      </div>
    </nav>
  );
};

export default NavBar;
