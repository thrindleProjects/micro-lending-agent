import { Icon } from '@iconify/react';
import { motion, Variants } from 'framer-motion';
import { signOut } from 'next-auth/react';

import useMediaQuery from '@/hooks/useMediaQuery';

import { profileDropdown } from '@/data/navLinks';

import { LOGOUT } from '@/constant/constants';

const variants: Variants = {
  initial: {
    y: -10,
    opacity: 0,
    transition: { duration: 0.3, ease: 'linear' },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'linear' },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: { duration: 0.3, ease: 'linear' },
  },
};

const AccountDropdown = () => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const logOut = () => {
    signOut();
  };

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='absolute right-0 top-full mt-2 w-52 text-xs text-amali-grey'
    >
      <div className='overflow-hidden rounded-b-md bg-white shadow-lg'>
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
                  className=' h- mb-1 flex w-full flex-row items-center rounded-md p-2 px-2 transition-all  duration-200 ease-in-out hover:bg-amali-green hover:text-white   '
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </>
        )}
        {largeScreen && (
          <div className='p-3'>
            <ul>
              {profileDropdown.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    if (item.name === 'Logout') {
                      logOut();
                    }
                  }}
                  className='w-full'
                >
                  <button className='flex w-full items-center gap-4 rounded-md p-2 transition-all duration-200  ease-in-out hover:bg-amali-green hover:text-white '>
                    <Icon
                      icon={item.icon}
                      className={
                        item.name === LOGOUT
                          ? 'text-3xl text-red-500'
                          : 'text-3xl '
                      }
                    />
                    <span className='mb-1 flex h-5 w-full cursor-pointer flex-row items-center px-2 font-semibold transition-all duration-200 ease-in-out'>
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AccountDropdown;
