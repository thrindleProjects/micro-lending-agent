import dynamic from 'next/dynamic';
import { AiOutlinePlus } from 'react-icons/ai';
import useSWR from 'swr';

import useGroupLoanModals from '@/hooks/useGroupLoanModals';

import Button from '@/components/buttons/Button';
import ActionButton from '@/components/lib/ActionButton';
import GroupsListTable from '@/components/lib/GroupsListTable';
import ActionButtonItem from '@/components/shared/ActionButtonItem';
import InputSearch from '@/components/shared/InputSearch';
import MainContentLayout from '@/components/shared/MainContentLayout';

const GroupsLayout = () => {
  // const [groups] = useState<typeof groupsList>(groupsList);
  const [stage, handleModal, handleClose, handleNext, handlePrevious] =
    useGroupLoanModals(['create-group', 'check-bvn', 'add-member']);
  const GroupLoanModals = dynamic(
    () => import('@/components/shared/GroupLoanModals')
  );
  // const router = useRouter();
  // const { query } = router;

  const data = useSWR('/api/group');

  const { isValidating } = data;

  // async function fetcher(url: string) {
  //   const params: string = getGroupsQuery(query);
  //   return await groupAPI.getAllAgentsGroups(url, params.toString());
  // }

  return (
    <>
      <MainContentLayout>
        <h4 className='block text-xl font-semibold sm:text-2xl lg:hidden '>
          Groups
        </h4>
        <div className='mt-6 flex w-full justify-between lg:mt-0'>
          <div className='w-full lg:w-2/4 xl:w-2/5'>
            <InputSearch
              placeholder='Type Group Name'
              isLoading={isValidating}
            />
          </div>
          <Button
            type='button'
            variant='primary'
            size='base'
            leftIcon={AiOutlinePlus}
            className='hidden lg:inline-flex'
            onClick={() => handleModal('create-group')}
          >
            <span className='font-semibold'>Create New Group</span>
          </Button>
        </div>

        <GroupsListTable />
      </MainContentLayout>
      <ActionButton
        actions={[
          <ActionButtonItem
            icon='ph:bank-thin'
            text='Apply for loan'
            key={0}
            onClick={() => handleModal('check-bvn')}
          />,
          <ActionButtonItem
            icon='ph:users-three-light'
            text='Create Group'
            key={1}
            onClick={() => handleModal('create-group')}
          />,
        ]}
      />
      {stage && (
        <GroupLoanModals
          stage={stage}
          handleModal={handleModal}
          handleClose={handleClose}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      )}
    </>
  );
};

export default GroupsLayout;
