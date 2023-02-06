import { Icon } from '@iconify/react';
import React from 'react';

import { ActionButtonItemProps } from '@/components/shared/ActionButtonItem/types';

/**
 *
 * @returns Action Button Item
 */
const ActionButtonItem: ActionButtonItemProps = ({ text, onClick, icon }) => {
  return (
    <button
      className='flex w-max flex-col items-center gap-1'
      onClick={onClick}
    >
      <Icon icon={icon} className='text-xl' />
      <span className='whitespace-pre-wrap text-sm'>{text}</span>
    </button>
  );
};

export default ActionButtonItem;
