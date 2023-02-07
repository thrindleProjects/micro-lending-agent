import { mobileNavData } from '@/data/navLinks';

import NavItemContent from '@/components/lib/NavItemContent';
import ActiveLink from '@/components/links/ActiveLink';

const MobileNav: React.FC = () => {
  return (
    <nav className='mobile_nav__wrapper w-full'>
      <ul className='flex w-full justify-around border-t border-amali-grey border-opacity-50 bg-white lg:hidden'>
        {mobileNavData.map((item, index) => {
          return (
            <li key={index} title={item.name}>
              <ActiveLink
                href={item.link}
                className='flex flex-col items-center gap-px border-t-2 border-transparent py-4'
                activeClassName='text-amali-green border-amali-green'
                as={item.link}
              >
                <NavItemContent {...item} />
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
