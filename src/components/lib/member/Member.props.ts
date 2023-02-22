import { GroupLoanModalTypes } from '@/components/shared/GroupLoanModals/types';

export interface MemberProps {
  id: string;
  name: string;
  status: string;
  onClick(arg: GroupLoanModalTypes): void;
}
