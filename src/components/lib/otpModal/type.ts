export interface OtpModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  setRegisterStep: React.Dispatch<React.SetStateAction<boolean>>;
}
