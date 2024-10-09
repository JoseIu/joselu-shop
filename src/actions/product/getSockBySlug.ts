'use server';

import prisma from '@/lib/prisma';

export const getSockBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        slug,
      },
      select: {
        inStock: true,
      },
    });

    return product?.inStock ?? 0;
  } catch (error) {
    return 0;
  }
};
