import { MainContentLayoutProps } from './types';

const MainContentLayout: React.FC<MainContentLayoutProps> = (props) => {
  const { children, className, overwriteStyles, ...rest } = props;

  return (
    <>
      <div
        {...rest}
        className={`${
          overwriteStyles && className
            ? className
            : className
            ? `h-full w-full overflow-y-auto py-8 px-7 lg:pl-14 ${className}`
            : 'h-full w-full overflow-y-auto py-8 px-7 lg:pl-14'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default MainContentLayout;
