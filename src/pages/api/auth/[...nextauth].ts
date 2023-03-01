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
