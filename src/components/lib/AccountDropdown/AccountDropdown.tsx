import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import useMediaQuery from '@/hooks/useMediaQuery';

import { profileDropdown } from '@/data/navLinks';

const AccountDropdown = () => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem('userRole');
    router.push('/login');
  };

  return (
    <div className='fixed right-0  w-52 p-2 pt-1  text-xs text-amali-grey '>
      <div className='overflow-hidden rounded-md bg-white p-2  shadow-lg'>
        {!largeScreen && (
          <>
            <ul>
              {profileDropdown.map((item, index) => (
                <li
                  onClick={() => {
                    if (item.name === 'Logout') {
                      logOut();
                    }
                  }}
                  key={index}
                  className=' h- mb-1 flex w-full flex-row items-center rounded-md p-2 px-2 transition-all  duration-200 ease-in-out hover:bg-amali-steel-blue hover:text-white   '
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </>
        )}
        {largeScreen && (
          <div className='p-3'>
            <div className='flex items-center'>
              <Image
                alt='owner'
                src='/assets/profile.png'
                width={50}
                height={50}
                className='rounded-full'
              />
              <div>
                <p>Master Agent</p>
                <p>09087656744</p>
              </div>
              <hr />
            </div>
            <hr className='my-2 w-full' />

            <ul>
              {profileDropdown.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-4 rounded-md p-2 transition-all duration-200  ease-in-out hover:bg-amali-steel-blue hover:text-white '
                >
                  <Icon
                    icon={item.icon}
                    className={
                      item.name === 'Logout'
                        ? 'text-3xl text-red-500'
                        : 'text-3xl '
                    }
                  />
                  <li
                    onClick={() => {
                      if (item.name === 'Logout') {
                        logOut();
                      }
                    }}
                    className={
                      item.name === 'Logout'
                        ? ' mb-1 flex h-5 w-full cursor-pointer flex-row items-center px-2 text-red-500 transition-all duration-200 ease-in-out '
                        : ' mb-1 flex h-5 w-full cursor-pointer flex-row items-center px-2 transition-all duration-200 ease-in-out '
                    }
                  >
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountDropdown;
