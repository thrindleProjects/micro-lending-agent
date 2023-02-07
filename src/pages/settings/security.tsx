import { ReactElement } from 'react';

import SettingsLayout from '@/components/layout/SettingsLayout';
import SecuritySettingsLayout from '@/components/pages-layout/settings/security/SecuritySettingsLayout';

const SecuritySettings = () => {
  return <SecuritySettingsLayout />;
};

export default SecuritySettings;

SecuritySettings.getLayout = function getLayout(page: ReactElement) {
  return <SettingsLayout>{page}</SettingsLayout>;
};
