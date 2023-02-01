export interface MemberProps {
  id: number;
  name: string;
  status: string;
  setLoanModal: React.Dispatch<React.SetStateAction<boolean>>;
}
