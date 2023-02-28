import { Icon } from '@iconify/react';

const NotificationBell = () => {
  return (
    <div className='relative aspect-square w-max cursor-pointer'>
      <Icon
        icon='ri:notification-2-fill'
        className='stroke-amali-black text-2xl text-amali-bg lg:text-3xl'
      />
      <span className='absolute top-0 right-0 flex aspect-square w-7 min-w-max translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-amali-notif-red p-[2px] text-[0.65rem] text-white md:p-1 md:text-xs'>
        99+
      </span>
    </div>
  );
};

export default NotificationBell;
