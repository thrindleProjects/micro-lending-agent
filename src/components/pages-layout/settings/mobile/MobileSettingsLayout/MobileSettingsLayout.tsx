import { Icon } from '@iconify/react';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

import { settingMobileNav } from '@/data/navLinks';

import LogoutModal from '@/components/lib/LogoutModal';
import MobileSettingsLink from '@/components/lib/MobileSettingsLink';
import ImageComponent from '@/components/shared/ImageComponent';
import MainContentLayout from '@/components/shared/MainContentLayout';

import ProfileImg from '~/assets/profile.png';

const MobileSettingsLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, status } = useSession({
    required: true,
    onUnauthenticated: signOut,
  });

  const handleModal = () => {
    setIsOpen((old) => !old);
  };

  if (status === 'loading') {
    return <></>;
  }

  return (
    <MainContentLayout>
      <div className='mx-auto flex w-full flex-col gap-8 sm:w-3/4 md:w-2/3 lg:w-1/2'>
        <div className='mt-5 flex cursor-default flex-col items-center gap-5'>
          <div className='relative aspect-square w-24 cursor-pointer overflow-hidden rounded-full border border-amali-green drop-shadow-md md:w-32'>
            <ImageComponent src={ProfileImg} alt='Avatar' />
            <div className='absolute flex h-full w-full items-center justify-center bg-black bg-opacity-10 text-amali-green'>
              <div className='rounded-full bg-white bg-opacity-50 p-2'>
                <Icon icon='material-symbols:photo-camera-outline' />
              </div>
            </div>
          </div>
          <section className='text-center text-amali-steel-blue '>
            <h3 className='text-sm font-semibold capitalize lg:text-base'>
              {data?.user.lastName} {data?.user.firstName}
            </h3>
            <p className='text- text-xs font-semibold capitalize text-amali-steel-blue text-opacity-60 lg:text-sm'>
              {data?.user.type}
            </p>
          </section>
        </div>

        <div className='flex flex-col items-center'>
          {settingMobileNav.map((item) => {
            return (
              <MobileSettingsLink
                key={item.id}
                {...item}
                handleModal={handleModal}
              />
            );
          })}
        </div>

        <LogoutModal isOpen={isOpen} handleModal={handleModal} />
      </div>
    </MainContentLayout>
  );
};

export default MobileSettingsLayout;
