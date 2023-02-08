import _ from 'lodash';
import { useRouter } from 'next/router';

const useCheckLinkActive = (
  href: string,
  as?: string,
  index?: boolean
): boolean => {
  let { asPath } = useRouter();
  asPath = asPath.split('?')[0].trim();
  href = href.split('?')[0].trim();
  as = as?.split('?')[0].trim();

  if (href === '/' || index) {
    return asPath === href;
  }

  const hrefArr = href.split('/');
  const asArr = as?.split('/');
  const asPathArr = asPath.split('/').splice(0, hrefArr.length);
  if (asArr) {
    return _.isEqual(asArr, asPathArr) && _.isEqual(hrefArr, asPathArr);
  }

  return _.isEqual(hrefArr, asPathArr);
};

export default useCheckLinkActive;
