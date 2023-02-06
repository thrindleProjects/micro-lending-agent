import Link, { LinkProps } from 'next/link';
import React from 'react';

import useCheckLinkActive from '@/utils/checkLinkActive';

/**
 * checks if the current path is active
 * @returns a boolean value
 */

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
  const isActive = useCheckLinkActive(href.toString(), as);
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
