import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

import { authAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

type SignInResponse = {
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
  completedContact: boolean;
  completedBusiness: boolean;
  completedBank: boolean;
  completedUploads: boolean;
};

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: 'Login Form',
      id: 'login',
      credentials: {
        phone: {
          label: 'phone',
          type: 'string',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        try {
          const data: {
            phone: string;
            password: string;
          } = {
            phone: credentials?.phone as string,
            password: credentials?.password as string,
          };
          const user = await authAPI.login(data);
          return user.data as SignInResponse;
        } catch (error) {
          // handle errors here
          if (error instanceof AmaliError) {
            throw new AmaliError(error.message);
          }
        }
        return null;
      },
    }),
    Credentials({
      name: 'Update Session',
      id: 'update',
      credentials: {
        token: {
          label: 'token',
          type: 'string',
        },
        id: {
          label: 'id',
          type: 'string',
        },
        firstName: {
          label: 'firstName',
          type: 'string',
        },
        middleName: {
          label: 'middleName',
          type: 'string',
        },
        lastName: {
          label: 'lastName',
          type: 'string',
        },
        marketId: {
          label: 'marketId',
          type: 'string',
        },
        phone: {
          label: 'phone',
          type: 'string',
        },
        bvn: {
          label: 'bvn',
          type: 'string',
        },
        bvnStatus: {
          label: 'bvnStatus',
          type: 'checkbox',
        },
        dateOfBirth: {
          label: 'dateOfBirth',
          type: 'string',
        },
        gender: {
          label: 'gender',
          type: 'string',
        },
        status: {
          label: 'status',
          type: 'boolean',
        },
        type: {
          label: 'type',
          type: 'string',
        },
        completedContact: {
          label: 'completedContact',
          type: 'boolean',
        },
        completedBusiness: {
          label: 'completedBusiness',
          type: 'boolean',
        },
        completedBank: {
          label: 'completedBank',
          type: 'boolean',
          required: true,
        },
        completedUploads: {
          label: 'completedUploads',
          type: 'boolean',
        },
      },
      async authorize(credentials) {
        try {
          const data: SignInResponse = {
            token: credentials?.token as string,
            id: credentials?.id as string,
            firstName: credentials?.firstName as string,
            middleName: credentials?.middleName as string,
            lastName: credentials?.lastName as string,
            marketId: credentials?.marketId as string,
            phone: credentials?.phone as string,
            bvn: credentials?.bvn as string,
            bvnStatus: credentials?.bvnStatus === 'true' ? true : false,
            dateOfBirth: credentials?.dateOfBirth as string,
            gender: credentials?.gender as string,
            status: credentials?.status === 'true' ? true : false,
            type: credentials?.type as string,
            completedContact:
              credentials?.completedContact === 'true' ? true : false,
            completedBusiness:
              credentials?.completedBusiness === 'true' ? true : false,
            completedBank: credentials?.completedBank === 'true' ? true : false,
            completedUploads:
              credentials?.completedUploads === 'true' ? true : false,
          };
          return data;
        } catch (error) {
          if (error instanceof AmaliError) {
            throw new AmaliError(error.message);
          }
        }
        return null;
      },
    }),
  ],
  secret: `${process.env.NEXTAUTH_SECRET}`,
  callbacks: {
    jwt: ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: ({ session, token }) => {
      session.token = token.user.token;
      session.user.id = token.user.id;
      session.user.firstName = token.user.firstName;
      session.user.middleName = token.user.middleName;
      session.user.lastName = token.user.lastName;
      session.user.marketId = token.user.marketId;
      session.user.phone = token.user.phone;
      session.user.bvn = token.user.bvn;
      session.user.bvnStatus = token.user.bvnStatus;
      session.user.dateOfBirth = token.user.dateOfBirth;
      session.user.dateOfBirth = token.user.dateOfBirth;
      session.user.gender = token.user.gender;
      session.user.type = token.user.type;
      session.user.status = token.user.status;
      session.user.completedBank = token.user.completedBank;
      session.user.completedBusiness = token.user.completedBusiness;
      session.user.completedContact = token.user.completedContact;
      session.user.completedUploads = token.user.completedUploads;
      return session;
    },
  },
  pages: {
    error: '/login',
    signIn: '/login',
    signOut: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 330 days
  },
};

export default NextAuth(authOptions);
