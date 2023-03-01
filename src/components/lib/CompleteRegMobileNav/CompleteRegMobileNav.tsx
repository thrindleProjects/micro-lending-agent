import { Icon } from '@iconify/react';

type CompleteRegMobileNavProps = React.FC<{
  handleModal(): void;
}>;

const CompleteRegMobileNav: CompleteRegMobileNavProps = ({ handleModal }) => {
  return (
    <nav className='mobile_nav__wrapper w-full'>
      <ul className='flex w-full justify-around border-t border-amali-grey border-opacity-50 bg-white lg:hidden'>
        <li title='Logout'>
          <button
            className='flex flex-col items-center gap-px border-t-2 border-transparent py-4'
            onClick={handleModal}
          >
            <span className='flex flex-col items-center lg:flex-row lg:gap-3 '>
              <span className='text-lg'>
                <Icon
                  icon='material-symbols:logout'
                  className='font-bold text-amali-notif-red'
                />
              </span>
              <span className='text-xs font-semibold lg:text-base'>Logout</span>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default CompleteRegMobileNav;
