export type GroupLoanModalTypes =
  | 'create-group'
  | 'check-bvn'
  | 'upload-loan-image'
  | 'add-member'
  | 'member-sucess'
  | 'loan-success';

export type GroupLoanModalsProps = React.FC<{
  stage: GroupLoanModalTypes;
  handleModal(arg: GroupLoanModalTypes): void;
  handleNext(): void;
  handlePrevious(): void;
  handleClose(): void;
}>;
