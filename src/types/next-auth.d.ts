import { DefaultSession } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: string;
    user: DefaultSession['user'] & {
      token: string;
      id: string;
      firstName: string;
      middleName: string;
      lastName: string;
      marketId: string;
      phone: string;
      bvn: string;
      bvnStatus: boolean;
      dateOfBirth: string;
      gender: string;
      status: boolean;
      type: string;
    };
    expires: ISODateString;
  }

  interface User {
    token: string;
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    marketId: string;
    phone: string;
    bvn: string;
    bvnStatus: boolean;
    dateOfBirth: string;
    gender: string;
    status: boolean;
    type: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    /** OpenID ID Token */
    user: {
      token: string;
      id: string;
      firstName: string;
      middleName: string;
      lastName: string;
      marketId: string;
      phone: string;
      bvn: string;
      bvnStatus: boolean;
      dateOfBirth: string;
      gender: string;
      status: boolean;
      type: string;
    };
  }
}
