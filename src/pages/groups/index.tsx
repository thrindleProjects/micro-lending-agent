import Link from 'next/link';
import React from 'react';

import MainContentLayout from '@/components/shared/MainContentLayout';

const Groups = () => {
  return (
    <MainContentLayout>
      <div className='p-16'>
        <Link href={`/groups/${1}`}>
          <h1>Groups</h1>
        </Link>
      </div>
    </MainContentLayout>
  );
};

export default Groups;
