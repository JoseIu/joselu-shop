'use server';

import { signIn } from '@/auth.config';
import { AuthError } from 'next-auth';

export const authenticate = async (prevState: string | undefined, formData: FormData) => {
  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });
    return 'Success';
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials';
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }
};
