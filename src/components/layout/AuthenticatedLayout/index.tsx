import { signIn, useSession } from 'next-auth/react';
import { PropsWithChildren, useCallback, useEffect } from 'react';

import logger from '@/lib/logger';
import { useMediaQuery } from '@/hooks';

import MobileNav from '@/components/shared/MobileNav';
import NavBar from '@/components/shared/NavBar';
import SideNav from '@/components/shared/SideNav';

import { registerAPI } from '@/utils/api';

const AuthenticatedLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');

  const { data } = useSession();

  const getUserDetails = useCallback(async () => {
    if (data && data.user) {
      if (data.user.status) {
        // setShowBanner(false);
        return;
      }
      try {
        const response = await registerAPI.getUserDetails(data.user.id);
        if (response && response.data) {
          if (
            !(
              response.data.completedBank &&
              response.data.completedBusiness &&
              response.data.completedContact &&
              response.data.completedUploads
            )
          ) {
            // setShowBanner(true);
            return;
          }
          // setShowBanner(false);
          signIn('update', {
            ...data.user,
            ...response.data,
            token: data.token,
          });
          return;
        }
      } catch (error) {
        // logic here
        logger(error, 'in catch');
      }
    }
  }, [data]);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  return (
    <div className='layout_wrapper '>
      {/* <StatusModal isOpen={modalOpen} /> */}

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
