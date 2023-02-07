import { settingsDesktopNav } from '@/data/navLinks';

import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import ActiveLink from '@/components/links/ActiveLink';
import MainContentLayout from '@/components/shared/MainContentLayout';

const SettingsLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AuthenticatedLayout>
      <MainContentLayout>
        <section className='mt-2 flex flex-col gap-4 md:gap-6 lg:gap-8'>
          <h1 className='text-lg font-bold md:text-xl lg:text-2xl'>Settings</h1>
          <nav className='h-max w-full'>
            <ul className='flex h-max w-full gap-8 border-b border-b-amali-green border-opacity-20'>
              {settingsDesktopNav.map((item) => {
                return (
                  <li key={item.id} className='w-max'>
                    <ActiveLink
                      href={item.link}
                      className='block py-4 text-xs md:text-base'
                      inActiveClassName='font-light amali-steel-blue'
                      activeClassName='relative before:absolute before:inset-x-0 before:bottom-0 before:bg-amali-green before:h-[2px] font-bold text-amali-green'
                      index={item.index}
                    >
                      {item.name}
                    </ActiveLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
        <div>{children}</div>
      </MainContentLayout>
    </AuthenticatedLayout>
  );
};

export default SettingsLayout;
