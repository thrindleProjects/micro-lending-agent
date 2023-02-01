import React from 'react';

import { MobileProps } from '@/components/shared/modal/Modal.props';

const Modal: React.FC<MobileProps> = ({ children, contentWidth }) => {
  return (
    <div
      style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}
      className='fixed inset-0 z-[99999] flex items-center justify-center'
    >
      <div
        className='  rounded-md bg-white p-10'
        style={{ width: `${contentWidth}` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
