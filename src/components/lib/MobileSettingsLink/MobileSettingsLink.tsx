import { Icon } from '@iconify/react';
import Link from 'next/link';

import { MobileSettingsLinkProps } from '@/components/lib/MobileSettingsLink/types';

const MobileSettingsLink: MobileSettingsLinkProps = ({
  icon,
  link,
  name,
  handleModal,
}) => {
  return (
    <>
      {link && (
        <Link
          href={link}
          className='flex w-full items-center justify-start gap-3 border-t border-t-amali-grey border-opacity-30 py-4 md:px-3'
        >
          <span className='rounded-full bg-amali-green bg-opacity-30 p-2 text-xl text-amali-green'>
            <Icon icon={icon} />
          </span>
          <span className='text-sm font-semibold md:text-base '>{name}</span>
        </Link>
      )}
      {!link && (
        <button
          className='flex w-full items-center justify-start gap-3 border-t border-t-amali-grey border-opacity-30 py-4 md:px-3'
          onClick={handleModal}
        >
          <span className='rounded-full bg-amali-notif-red bg-opacity-30 p-2 text-xl text-amali-notif-red'>
            <Icon icon={icon} />
          </span>
          <span className='text-sm font-semibold md:text-base '>{name}</span>
        </button>
      )}
    </>
  );
};

export default MobileSettingsLink;
