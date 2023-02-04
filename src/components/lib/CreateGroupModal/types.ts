import React from 'react';

export type CreateGroupModalProps = React.FC<
  React.PropsWithChildren & {
    isOpen: boolean;
    handleModal(): void;
  }
>;
