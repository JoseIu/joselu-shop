import { Size } from '@prisma/client';
import prisma from '../lib/prisma';
import { initialData } from './seed';
import { countries } from './seed-countries';

const main = async () => {
  await Promise.all([
    await prisma.user.deleteMany(),
    await prisma.country.deleteMany(),
    await prisma.productImage.deleteMany(),
    await prisma.product.deleteMany(),
    await prisma.category.deleteMany(),
  ]);

  const { categories, products, users } = initialData;

  // Users
  await prisma.user.createMany({
    data: users,
  });

  //Categories
  const categoriesData = categories.map((category) => ({
    name: category,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLocaleLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); // <string=shirt, string=categoryID>

  //Products
  for (const product of products) {
    const { type, images, sizes, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        sizes: sizes as Size[],
        categoryId: categoriesMap[type],
      },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  }

  //Countries

  await prisma.country.createMany({
    data: countries,
  });

  console.log('EJECUTADO CORRECTAMENTE');
};

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
