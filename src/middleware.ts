export { default } from 'next-auth/middleware';

// export default withAuth(
//   function middleware(req) {
//     const session = req.nextauth.token?.user;

//     if (
//       session &&
//       !(
//         session.completedBank &&
//         session.completedBusiness &&
//         session.completedContact &&
//         session.completedUploads
//       )
//     ) {
//       // return NextResponse.redirect(new URL('/complete-registration', req.url));
//     }
//   },
//   {
//     callbacks: {
//       authorized: (session) => !!session.token,
//     },
//   }
// );

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login|register|assets|serviceWorker|fonts).*)',
  ],
};
