import type { ParsedUrlQuery } from 'querystring';

export const getGroupsQuery = (query: ParsedUrlQuery): string => {
  const params: string | URLSearchParams = new URLSearchParams();

  if (query.search && typeof query.search === 'string') {
    params.append('name', query.search);
  }

  if (query.page && typeof query.page === 'string' && !!parseInt(query.page)) {
    params.append('page', query.page);
  }

  if (query.per && typeof query.per === 'string' && !!parseInt(query.per)) {
    params.append('limit', query.per);
  } else {
    params.append('limit', '5');
  }

  return params.toString();
};
