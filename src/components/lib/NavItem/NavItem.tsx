import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { sideBarData } from '@/data/navLinks';

import NavItemContent from '@/components/lib/NavItemContent';
import ActiveLink from '@/components/links/ActiveLink';

import { NavItemWrapper } from './styled';

const variants = {
  rotate: {
    rotate: 90,
    transition: { duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  stop: {
    rotate: 0,
    transition: { duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] },
  },
};

const NavItem = () => {
  const [expanded, setExpanded] = useState<number | boolean>(1);

  return (
    <div className='nav-item bg-white pb-20 lg:pb-6'>
      {sideBarData.map((item, index) => (
        <NavItemWrapper key={index}>
          <div key={index} className='overflow-hidden text-amali-grey'>
            {item.link && item.link.length ? (
              <ActiveLink
                href={`${item.link}`}
                className='mx-auto flex items-center justify-between py-4 px-7 ease-in-out hover:bg-amali-grey hover:bg-opacity-30 hover:text-white'
                activeClassName='bg-amali-green text-white'
                as={item.link}
              >
                <NavItemContent {...item} />
              </ActiveLink>
            ) : (
              <button
                onClick={() =>
                  setExpanded(item.id === expanded ? false : item.id)
                }
                className='mx-auto flex w-full items-center justify-between rounded-md p-2 px-5 ease-in-out hover:bg-amali-green hover:text-white'
              >
                <span className='flex items-center gap-3 '>
                  <Icon icon={item.icon} className='font-bold' />
                  <span className='text-md '>{item.name}</span>
                </span>
                {!!item.subLinks.length && (
                  <motion.div
                    variants={variants}
                    animate={item.id === expanded ? 'rotate' : 'stop'}
                  >
                    <Icon
                      icon='material-symbols:arrow-forward-ios-rounded'
                      className='font-bold '
                    />
                  </motion.div>
                )}
              </button>
            )}

            <AnimatePresence>
              {!!item.subLinks.length && item.id === expanded && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  }}
                >
                  <div className='flex flex-col rounded-lg bg-amali-bg py-2 '>
                    {item.subLinks.map((subLink, index) => (
                      <Link
                        href={`${subLink.link}`}
                        key={index}
                        className='flex-shrink-0 hover:text-amali-green'
                      >
                        <div>
                          <div className='flex gap-3 px-4 '>
                            {/* <Icon icon="carbon:dot-mark" className="text-white hover:text-amali-green " /> */}
                            <p className='text-s my-2'>{subLink.subType}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </NavItemWrapper>
      ))}
    </div>
  );
};

export default NavItem;
