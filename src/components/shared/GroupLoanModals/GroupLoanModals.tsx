import dynamic from 'next/dynamic';

import LoanSuccess from '@/components/lib/LoanSuccess';
import { GroupLoanModalsProps } from '@/components/shared/GroupLoanModals/types';

const CreateGroupModal = dynamic(
  () => import('@/components/lib/CreateGroupModal')
);
const CheckBVNModal = dynamic(() => import('@/components/lib/CheckBVNModal'));
const UploadLoanFormModal = dynamic(
  () => import('@/components/lib/UploadLoanFormModal')
);
const AddMemberModal = dynamic(() => import('@/components/lib/AddMemberModal'));

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

      <LoanSuccess
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