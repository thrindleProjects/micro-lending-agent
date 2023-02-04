import React from 'react';

import { TableHeadWrapper } from '@/components/lib/TableHead/styled';
import { TableHeadProp } from '@/components/lib/TableHead/types';

const TableHead: React.FC<TableHeadProp> = ({ children, ...rest }) => {
  return (
    <TableHeadWrapper {...rest}>
      <tr>{children}</tr>
    </TableHeadWrapper>
  );
};

export default TableHead;
