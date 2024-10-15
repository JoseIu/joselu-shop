'use server';

import { signOut } from '@/auth.config';

export const logout = async () => {
  try {
    await signOut();
  } catch (error) {
    return 'Credentials SignOut';
  }
};
