import React from 'react';

import { ProgressBarStyle } from '@/components/lib/progressBar/styled';

import { ProgressBarProps } from './ProgressBar.props';
const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarStyle className='h-1 w-full' progress={progress}>
      <div className='progress_bar h-full bg-amali-green transition-all duration-500 ease-linear'></div>
    </ProgressBarStyle>
  );
};

export default ProgressBar;
