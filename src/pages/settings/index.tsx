import { ReactElement } from 'react';

import SettingsLayout from '@/components/layout/SettingsLayout';
import ProfileSettingsLayout from '@/components/pages-layout/settings/profile-settings/ProfileSettingsLayout';

import { NextPageWithLayout } from '@/pages/_app';

const Settings: NextPageWithLayout = () => {
  return <ProfileSettingsLayout />;
};

export default Settings;

Settings.getLayout = function getLayout(page: ReactElement) {
  return <SettingsLayout>{page}</SettingsLayout>;
};
