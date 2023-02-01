import Link from 'next/link';
import React from 'react';

const Groups = () => {
  return (
    <div className='p-16'>
      <Link href={`/groups/${1}`}>
        <h1>Groups</h1>
      </Link>
    </div>
  );
};

export default Groups;
