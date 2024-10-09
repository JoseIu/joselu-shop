'use server';

import prisma from '@/lib/prisma';

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        productImage: {
          select: {
            url: true,
          },
        },
      },
    });
    if (!product) return null;
    const profuctFormat = {
      ...product,
      images: product.productImage.map((image) => image.url),
    };

    return profuctFormat;
  } catch (error) {
    throw new Error('Error getting product by slug');
  }
};
