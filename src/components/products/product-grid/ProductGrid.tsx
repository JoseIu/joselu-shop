import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';

type Props = {
  products: Product[];
};

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-8">
      {products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
