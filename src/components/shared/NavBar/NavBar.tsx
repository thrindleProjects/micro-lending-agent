import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { useMediaQuery, useOnClickOutside } from '@/hooks';

import AccountDropdown from '@/components/lib/AccountDropdown';

import { NavBarProps } from './Navbar.props';

import AmaliLogo from '~/assets/amali-logo.png';

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar, isOpen }) => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const [accountDropdown, setAccountDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setAccountDropdown(false));

  const toggleAccountDropdown = () => {
    setAccountDropdown((prevState) => !prevState);
  };

  const handleToggleSidebar = (isOpen: boolean) => {
    !isOpen ? toggleSidebar(true) : toggleSidebar(false);
  };

  return (
    <div className='layout__top_nav'>
      {largeScreen && (
        <div className='ml-auto hidden w-max items-center gap-4 p-4 lg:flex'>
          <Icon icon='material-symbols:search' className='text-2xl' />

          <div
            className=' relative cursor-pointer'
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
        <div className='relative block w-full lg:hidden'>
          <div className='flex w-full items-center justify-between py-4 px-7'>
            <button onClick={() => handleToggleSidebar(isOpen)}>
              <Icon
                icon={isOpen ? 'ic:outline-close' : 'ri:menu-2-fill'}
                className='text-2xl text-amali-green '
              />
            </button>
            <div className='flex w-[50%] items-center justify-center'>
              <Image
                width={150}
                height={150}
                src={AmaliLogo}
                alt='Amali Logo'
                blurDataURL=''
                className='border-none object-contain'
              />
            </div>
            <div onClick={toggleAccountDropdown}>
              <Icon
                icon='mdi:dots-vertical'
                className='text-2xl text-amali-green '
              />
            </div>
          </div>
        </div>
      )}
      <div className='relative ' ref={dropdownRef}>
        {accountDropdown && <AccountDropdown />}
      </div>
    </div>
  );
};

export default NavBar;
