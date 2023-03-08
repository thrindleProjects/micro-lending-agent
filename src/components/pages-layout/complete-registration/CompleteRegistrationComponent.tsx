import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import RegisterIndex from '@/components/lib/registrationSteps';
import MainContentLayout from '@/components/shared/MainContentLayout';

import { useAppDispatch } from '@/store/store.hooks';

import { setBvnDetails } from '@/slices/bvnSlice';

const CompleteRegistrationComponent = () => {
  const { data } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(
        setBvnDetails({
          bvn: data.user.bvn,
          phoneNo: data.user.phone,

          id: data.user.id,
        })
      );
    }
  }, [data, dispatch]);

  return (
    <MainContentLayout>
      <section className='flex w-full flex-col items-center gap-4 bg-white'>
        <section className='mt-8 w-full cursor-default md:w-full'>
          <h4 className='mr-auto mb-6 w-4/5 text-left text-lg font-bold md:w-[70%] md:text-xl lg:mb-0 lg:w-full'>
            Registration Form
          </h4>
          <div className='w-full'>
            {!!data && <RegisterIndex session={data} />}
          </div>
        </section>
      </section>
    </MainContentLayout>
  );
};

export default CompleteRegistrationComponent;
