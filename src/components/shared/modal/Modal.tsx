import React from 'react';

import MainContentLayout from '@/components/shared/MainContentLayout';
import { MobileProps } from '@/components/shared/modal/Modal.props';

const Modal: React.FC<MobileProps> = ({
  children,
  className,
  contentWidth,
}) => {
  return (
    <MainContentLayout>
      <div
        style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}
        className='fixed inset-0 z-[99999] overflow-y-scroll md:flex md:items-center md:justify-center'
      >
        <div
          className={`${className} rounded-md bg-white  p-10`}
          style={{ width: `${contentWidth}` }}
        >
          {children}
        </div>
      </div>
    </MainContentLayout>
  );
};

export default Modal;
