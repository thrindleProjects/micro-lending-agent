import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const _defaultGetDefaultTextGenerator = (path: string) => {
  if (!path) {
    return path;
  }
  return path.charAt(0).toUpperCase() + path.slice(1);
};

export default function NextBreadcrumbs({
  getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
  dynamic_text,
}: {
  getDefaultTextGenerator?: (param: string) => string;
  dynamic_text?: string;
}) {
  const router = useRouter();

  const breadcrumbs = useMemo(
    function generateBreadcrumbs() {
      const asPathWithoutQuery = router.asPath.split('?')[0];
      const asPathNestedRoutes = asPathWithoutQuery
        .split('/')
        .filter((v) => v.length > 0);

      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
        return { href, text: getDefaultTextGenerator(subpath), dynamic_text };
      });

      return [{ href: '/', text: 'Home' }, ...crumblist];
    },
    [router.asPath, getDefaultTextGenerator, dynamic_text]
  );

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      {/*
        Iterate through the crumbs, and render each individually.
        We "mark" the last crumb to not have a link.
      */}
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
}

// Each individual "crumb" in the breadcrumbs list
function Crumb({
  text,
  href,
  last = false,
  dynamic_text,
}: {
  text: string;
  href: string;
  last: boolean;
  dynamic_text?: string;
}) {
  // The last crumb is rendered as normal text since we are already on the page

  if (last) {
    return (
      <Typography className='text-amali-green' fontWeight={700}>
        {dynamic_text || text}
      </Typography>
    );
  }

  return (
    <Link
      underline='none'
      color='inherit'
      href={href}
      className='font-light text-amali-grey'
    >
      {text}
    </Link>
  );
}
