import React from 'react';

import { ProgressBarProps } from './ProgressBar.props';

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const Parentdiv = {
    height: 4,
    width: '100%',
    backgroundColor: 'whitesmoke',
    margin: 5,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#42B0A8',
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};

export default ProgressBar;
