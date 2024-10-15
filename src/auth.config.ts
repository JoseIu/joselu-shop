import bcryptjs from 'bcryptjs';
import NextAuth, { Session, type NextAuthConfig } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.data = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.data as AdapterUser & Session['user'];
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        //search email
        const user = await prisma.user.findUnique({ where: { email: email.toLocaleLowerCase() } });
        if (!user) return null;
        //compare password
        if (!bcryptjs.compareSync(password, user.password)) return null;
        // return user without password
        const { password: _, ...restUser } = user;

        return restUser;
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
