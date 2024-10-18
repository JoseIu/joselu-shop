'use server';
import { AddressInterface } from '@/interfaces';
import prisma from '@/lib/prisma';

export const getUserAddress = async (userId: string): Promise<AddressInterface | null> => {
  try {
    const address = await prisma.userAddress.findUnique({
      where: { userId },
    });

    if (!address) return null;
    const { countryId, address2, ...restAddress } = address;

    const addressFormatted = {
      ...restAddress,
      country: countryId,
      address2: address2 || '',
    };

    return addressFormatted;
  } catch (error) {
    return null;
  }
};
