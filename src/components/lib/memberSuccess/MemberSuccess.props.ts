import { GroupLoanModalTypes } from '@/components/shared/GroupLoanModals/types';

export interface MemberSuccessProps {
  setMemberSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  // setShowAddMemberModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleNext?: () => void;
  handleModal(arg: GroupLoanModalTypes | null): void;
  handleClose(): void;
}
