import { GroupLoanModalTypes } from '@/components/shared/GroupLoanModals/types';

export type CheckBVNModalProps = React.FC<{
  isOpen: boolean;
  handleModal(arg: GroupLoanModalTypes | null): void;
  handleClose(): void;
  handleNext(): void;
  handlePrevious(): void;
}>;
