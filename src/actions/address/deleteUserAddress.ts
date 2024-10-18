'use server';
import prisma from '@/lib/prisma';

export const deleteUserAddress = async (userId: string) => {
  try {
    await prisma.userAddress.delete({
      where: {
        userId,
      },
    });

    return {
      ok: true,
      message: 'Address deleted',
    };
  } catch (error) {
    return {
      ok: false,
      message: 'Error to delete address',
    };
  }
};
