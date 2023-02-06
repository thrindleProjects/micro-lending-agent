import _ from 'lodash';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

/**
 * checks if the current path is active
 * @returns a boolean value
 */
const checkIsActive = (href: string, asPath: string, as?: string): boolean => {
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

type ActiveLinkProps = LinkProps &
  React.PropsWithChildren<{
    activeClassName?: string;
    as?: string;
    className?: string;
  }>;
/**
 *
 * @param param0 Link Component that can tell if it's target is active
 * @returns A React component that can tell if it's target is active
 */
const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
  as,
  activeClassName,
  className,
}) => {
  const { asPath } = useRouter();
  const isActive = checkIsActive(href.toString(), asPath, as);
  const classNames = isActive
    ? `${className} ${activeClassName}`
    : `${className}`;

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
};

export default ActiveLink;
