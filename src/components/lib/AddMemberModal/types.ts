import { GroupLoanModalTypes } from '@/components/shared/GroupLoanModals/types';

export type AddMemberModalProps = React.FC<{
  isOpen: boolean;
  handleModal(arg: GroupLoanModalTypes | null): void;
  handleClose(): void;
  handleNext(): void;
  handlePrevious(): void;
  onAdd?: () => void;
  maxNew?: number;
}>;
