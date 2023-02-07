import style from './Table.module.scss';

import { TableProps } from '@/components/lib/Table/types';

const Table: React.FC<TableProps> = ({ children, className }) => {
  return <table className={`${style.table} ${className}`}>{children}</table>;
};

export default Table;
