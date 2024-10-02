import { categoryPath } from '@/app/constants/categoryPath';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: 'men' | 'women' | 'kids' };
};
const CategoryPage = ({ params }: Props) => {
  const { id } = params;

  if (!categoryPath[id]) {
    notFound();
  }
  return <div>CategoryPage</div>;
};

export default CategoryPage;
