import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import SecuritySettingsForm from '@/components/lib/SecuritySettingsForm';
import MainContentLayout from '@/components/shared/MainContentLayout';

const MobileSecuritySettingsLayout = () => {
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
        <h1 className='mt-2 text-2xl font-semibold'>Change Password</h1>
      </section>
      <SecuritySettingsForm />
    </MainContentLayout>
  );
};

export default MobileSecuritySettingsLayout;
