export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/((?!pages/login|pages/register)*)'],
};
