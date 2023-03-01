import { default as MaterialUIPagination } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useRouter } from 'next/router';

import { PaginationWrapper } from './styled';

type PaginationProps = React.FC<{
  count: number;
  className: string;
}>;

const Pagination: PaginationProps = ({ count, className }) => {
  const router = useRouter();

  const { page } = router.query;

  const handleClick = (item: number | null) => {
    if (item === null) {
      return;
    }

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: item },
      },
      {
        pathname: router.pathname,
        query: { ...router.query, page: item },
      },
      { shallow: true }
    );
  };

  if (count === 1) {
    return <></>;
  }

  return (
    <PaginationWrapper className={className}>
      <div className='yes'></div>
      <MaterialUIPagination
        page={parseInt(`${page}`, 10) || 1}
        count={count}
        renderItem={({
          selected,
          page,
          disabled,
          variant,
          shape,
          type,
          size,
        }) => (
          <PaginationItem
            onClick={() => handleClick(page)}
            selected={selected}
            disabled={disabled}
            variant={variant}
            shape={shape}
            color='primary'
            type={type}
            size={size}
            page={page}
          />
        )}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
