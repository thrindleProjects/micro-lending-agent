import { Icon } from '@iconify/react';
import React from 'react';

import { NavItemContentProps } from '@/components/lib/NavItemContent/types';

import useCheckLinkActive from '@/utils/checkLinkActive';

const NavItemContent: NavItemContentProps = ({
  link,
  active_icon,
  icon,
  name,
}) => {
  const isActive = useCheckLinkActive(link, link);
  return (
    <span className='flex flex-col items-center lg:flex-row lg:gap-3 '>
      <span className='text-lg'>
        <Icon icon={isActive ? active_icon : icon} className='font-bold' />
      </span>
      <span className='text-xs font-semibold lg:text-base'>{name}</span>
    </span>
  );
};

export default NavItemContent;
