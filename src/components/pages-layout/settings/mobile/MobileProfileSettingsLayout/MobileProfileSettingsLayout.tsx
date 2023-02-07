import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import ProfileSettingsForm from '@/components/lib/ProfileSettingsForm';
import MainContentLayout from '@/components/shared/MainContentLayout';

const MobileProfileSettingsLayout = () => {
  const router = useRouter();

  return (
    <MainContentLayout>
      <section>
        <button
          className='ml-auto block text-2xl'
          onClick={() => router.back()}
        >
          <Icon icon='material-symbols:close-rounded' />
        </button>
        <h1 className='mt-2 text-2xl font-semibold'>Profile</h1>
      </section>
      <ProfileSettingsForm />
    </MainContentLayout>
  );
};

export default MobileProfileSettingsLayout;
