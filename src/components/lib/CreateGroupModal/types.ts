import { GroupLoanModalTypes } from '@/components/shared/GroupLoanModals/types';

export type CreateGroupModalProps = React.FC<
  React.PropsWithChildren & {
    isOpen: boolean;
    handleModal(arg: GroupLoanModalTypes | null): void;
    handleClose(): void;
    handleNext(): void;
    handlePrevious(): void;
  }
>;
