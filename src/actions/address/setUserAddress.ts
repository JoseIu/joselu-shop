'use server';

import { AddressInterface } from '@/interfaces';
import prisma from '@/lib/prisma';

export const setUserAddress = async (address: AddressInterface, userId: string) => {
  try {
    const newAddress = await createOrReplaceAddress(address, userId);

    return {
      ok: true,
      address: newAddress,
    };
  } catch (error) {
    return {
      ok: false,
      error: 'Cannot save address',
    };
  }
};

const createOrReplaceAddress = async (address: AddressInterface, userId: string) => {
  try {
    const storedAddress = await prisma.userAddress.findUnique({
      where: { userId },
    });

    const addressToSave = {
      userId,
      address: address.address,
      address2: address.address2,
      name: address.name,
      surname: address.surname,
      city: address.city,
      zipCode: address.zipCode,
      phone: address.phone,
      countryId: address.country,
    };

    if (!storedAddress) {
      const newAddress = await prisma.userAddress.create({
        data: addressToSave,
      });

      return newAddress;
    }

    const updatedAddress = await prisma.userAddress.update({
      where: { userId },
      data: addressToSave,
    });

    return updatedAddress;
  } catch (error) {
    throw new Error('Cannot save address');
  }
};
