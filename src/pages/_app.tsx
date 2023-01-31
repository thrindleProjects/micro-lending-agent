import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';

import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';

import { toastOptions } from '@/utils/toastConfig';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild && process.env.NODE_ENV === 'development') {
    return null;
  }

  const getLayout =
    Component.getLayout ??
    ((page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>);
  return (
    <>
      {getLayout(<Component {...pageProps} key={router.pathname} />)}
      <Toaster position='top-right' toastOptions={toastOptions} />
    </>
  );
}

export default MyApp;
