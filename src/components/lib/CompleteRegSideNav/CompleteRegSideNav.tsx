import Image from 'next/image';

import CompleteRegNavItem from '@/components/lib/CompleteRegNavItem';

type CompleteRegSideNavProps = React.FC<{
  handleModal(): void;
}>;
const CompleteRegSideNav: CompleteRegSideNavProps = ({ handleModal }) => {
  return (
    <div className='layout__side_bar__wrapper'>
      <aside className='layout__side_bar'>
        <div className='my-auto flex h-20 w-full items-center bg-white px-4 py-4'>
          <Image
            style={{
              height: '100%',
              width: 'auto',
            }}
            src='/assets/amali-logo.png'
            alt='amali Logo'
            width={300}
            height={300}
          />
        </div>
        <div className='w-full pt-12'>
          <CompleteRegNavItem handleModal={handleModal} />
        </div>
      </aside>
    </div>
  );
};

export default CompleteRegSideNav;
