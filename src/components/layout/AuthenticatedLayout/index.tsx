import { useSession } from 'next-auth/react';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { useMediaQuery } from '@/hooks';

import StatusModal from '@/components/lib/statusModal/StatusModal';
import MobileNav from '@/components/shared/MobileNav';
import NavBar from '@/components/shared/NavBar';
import SideNav from '@/components/shared/SideNav';

import { registerAPI } from '@/utils/api';

const AuthenticatedLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();

  const getUserDetails = useCallback(async () => {
    if (data?.user.id) {
      try {
        const response = await registerAPI.getUserDetails(data?.user.id);
        if (response.data.status === false) {
          setIsOpen(true);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  }, [data?.user.id]);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  return (
    <div className='layout_wrapper '>
      <StatusModal isOpen={isOpen} />

      {largeScreen && <SideNav />}
      {!largeScreen && <MobileNav />}

      <div className='main_wrapper'>
        <NavBar />
        <div className='main_container overflow-hidden'>
          <div className='h-full w-full overflow-hidden'>
            <main className='h-full w-full overflow-hidden'>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
