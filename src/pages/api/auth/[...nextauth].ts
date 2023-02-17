import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

import { authAPI } from '@/utils/api';
import AmaliError from '@/utils/customError';

type SignInResponse = {
  token: string;
  id: string;
  name: string;
  marketId: string;
  phone: string;
  status: false;
  type: string;
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
      session.user.name = token.user.name;
      session.user.marketId = token.user.marketId;
      session.user.phone = token.user.phone;
      session.user.type = token.user.type;
      session.user.type = token.user.type;
      return session;
    },
  },
  pages: {
    error: '/login',
    signIn: '/login',
    signOut: '/login',
  },
};

export default NextAuth(authOptions);
