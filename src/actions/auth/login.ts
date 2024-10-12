'use server';

import { signIn } from '@/auth.config';
import { AuthError } from 'next-auth';

export const authenticate = async (prevState: string | undefined, formData: FormData) => {
  try {
    console.log(Object.fromEntries(formData));
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
};
