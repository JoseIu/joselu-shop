import { categoryPath } from '@/app/constants/categoryPath';
import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

const products = initialData.products;
type Props = {
  params: { id: Category };
};

const CategoryPage = ({ params }: Props) => {
  const { id } = params;

  const prodcutCategory = products.filter((product) => product.gender === id);

  if (!categoryPath[id]) {
    notFound();
  }
  return (
    <section className="wrapper p-4">
      <Title title={`${id} products`} className="capitalize" />

      <ProductGrid products={prodcutCategory} />
    </section>
  );
};

export default CategoryPage;
