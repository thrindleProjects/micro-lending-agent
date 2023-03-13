import AddMemberModal from '@/components/lib/AddMemberModal';
import CheckBVNModal from '@/components/lib/CheckBVNModal';
import CreateGroupModal from '@/components/lib/CreateGroupModal';
import LoanSuccessModal from '@/components/lib/loanSuccessModal';
import UploadLoanFormModal from '@/components/lib/UploadLoanFormModal';
import { GroupLoanModalsProps } from '@/components/shared/GroupLoanModals/types';

const GroupLoanModals: GroupLoanModalsProps = ({
  stage,
  handleModal,
  handleClose,
  handleNext,
  handlePrevious,
  addMemberProps,
}) => {
  return (
    <>
      <CreateGroupModal
        isOpen={stage === 'create-group'}
        handleModal={handleModal}
        handleClose={handleClose}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <CheckBVNModal
        isOpen={stage === 'check-bvn'}
        handleModal={handleModal}
        handleClose={handleClose}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <UploadLoanFormModal
        isOpen={stage === 'upload-loan-image'}
        handleModal={handleModal}
        handleClose={handleClose}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <AddMemberModal
        isOpen={stage === 'add-member'}
        handleModal={handleModal}
        handleClose={handleClose}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        {...addMemberProps}
      />

      <LoanSuccessModal
        isOpen={stage === 'loan-success'}
        handleModal={handleModal}
        handleClose={handleClose}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </>
  );
};

export default GroupLoanModals;
