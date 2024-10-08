import { getPaginationProductsWithImages } from '@/actions';
import { categoryPath } from '@/app/constants/categoryPath';
import { Pagination, ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { notFound, redirect } from 'next/navigation';

type Props = {
  params: { gender: Category };
  searchParams: {
    page?: string;
  };
};

const CategoryPage = async ({ params, searchParams }: Props) => {
  const { gender } = params;
  if (!categoryPath[gender]) {
    notFound();
  }
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginationProductsWithImages({ page, gender });
  if (!products.length) redirect(`/gender/${gender}`);
  return (
    <section className="wrapper p-4">
      <Title title={`${gender} products`} className="capitalize" />

      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </section>
  );
};

export default CategoryPage;
