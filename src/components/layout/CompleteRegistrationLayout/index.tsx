import { PropsWithChildren, useState } from 'react';

import { useMediaQuery } from '@/hooks';

import CompleteRegMobileNav from '@/components/lib/CompleteRegMobileNav';
import CompleteRegSideNav from '@/components/lib/CompleteRegSideNav';
import LogoutModal from '@/components/lib/LogoutModal';

const CompleteRegistrationLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const largeScreen = useMediaQuery('(min-width: 1024px)');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen((old) => !old);
  };
  return (
    <div className='layout_wrapper'>
      {largeScreen && <CompleteRegSideNav handleModal={handleModal} />}
      {!largeScreen && <CompleteRegMobileNav handleModal={handleModal} />}
      <div className='main_wrapper'>
        <div className='main_container overflow-hidden'>
          <div className='h-full w-full overflow-hidden'>
            <main className='h-full w-full overflow-hidden'>{children}</main>
          </div>
        </div>
      </div>
      <LogoutModal isOpen={isOpen} handleModal={handleModal} />
    </div>
  );
};

export default CompleteRegistrationLayout;
