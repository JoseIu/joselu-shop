import { QuantitySelector } from '@/components/product/quantity-selector/QuantitySelector';
import { Product } from '@/interfaces';
import { IoTrashOutline } from 'react-icons/io5';

type Porps = {
  product: Product;
};

export const CartItem = ({ product }: Porps) => {
  return (
    <article className="w-full flex gap-4">
      <img src={`/imgs/products/${product.images[0]}`} alt={product.title} className="w-24 h-24 rounded-sm" />
      <div className="w-full">
        <header className="flex items-center justify-between gap-2">
          <h3 className="font-bold">{product.title}</h3>
          <button>
            <IoTrashOutline size={20} className="text-red-800" />
          </button>
        </header>
        <span className="block">Size: {product.sizes[0]}</span>

        <div className="flex items-center justify-between">
          <span>${product.price}</span>
          <QuantitySelector />
        </div>
      </div>
    </article>
  );
};
