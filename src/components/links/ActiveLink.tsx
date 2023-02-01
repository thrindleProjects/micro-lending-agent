import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

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
  const isActive = asPath === href || asPath === as;
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
