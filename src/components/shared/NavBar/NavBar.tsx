import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useRef, useState } from 'react';

import { useMediaQuery, useOnClickOutside } from '@/hooks';

import AccountDropdown from '@/components/lib/AccountDropdown';
import NotificationBell from '@/components/shared/NotificationBell';

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

const NavBar: React.FC = () => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const [accountDropdown, setAccountDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data } = useSession({
    required: true,
    onUnauthenticated: signOut,
  });

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
                <p className='font-semibold capitalize'>
                  {data?.user.lastName} {data?.user.firstName}
                </p>
                <p className='capitalize'>{data?.user.type}</p>
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
    </nav>
  );
};

export default NavBar;
