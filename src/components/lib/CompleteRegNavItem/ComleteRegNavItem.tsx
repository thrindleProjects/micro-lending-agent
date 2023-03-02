import { Icon } from '@iconify/react';

type CompleteRegNavItemProps = React.FC<{
  handleModal(): void;
}>;

const ComleteRegNavItem: CompleteRegNavItemProps = ({ handleModal }) => {
  return (
    <button
      onClick={handleModal}
      className='flex w-full items-center justify-between py-4 px-7 ease-in-out hover:bg-amali-green hover:text-white'
    >
      <span className='flex items-center gap-3 '>
        <Icon icon='material-symbols:logout' className='text-amali-notif-red' />
        <span className='text-md'>Logout</span>
      </span>
    </button>
  );
};

export default ComleteRegNavItem;
