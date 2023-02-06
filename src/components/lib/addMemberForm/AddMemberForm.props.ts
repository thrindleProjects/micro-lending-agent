export interface AddMemberFormProps {
  setShowAddMemberModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowGroupMembers?: React.Dispatch<React.SetStateAction<boolean>>;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
  count?: number;
}
