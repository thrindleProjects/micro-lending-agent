import _ from 'lodash';
import { useRouter } from 'next/router';

const useCheckLinkActive = (href: string, as?: string): boolean => {
  const { asPath } = useRouter();
  if (href === '/') {
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
