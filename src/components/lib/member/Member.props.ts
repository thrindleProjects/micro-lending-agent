import { GroupLoanModalTypes } from '@/components/shared/GroupLoanModals/types';

export interface MemberProps {
  id: number;
  name: string;
  status: string;
  onClick(arg: GroupLoanModalTypes): void;
}
