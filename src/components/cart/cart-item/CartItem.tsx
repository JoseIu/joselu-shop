'use client';
import { QuantitySelector } from '@/components/product/quantity-selector/QuantitySelector';
import { useQuantitySelector } from '@/hooks/useQuantitySelector';
import { CartProduct } from '@/interfaces';
import { useCartStore } from '@/store';
import Link from 'next/link';
import { IoTrashOutline } from 'react-icons/io5';

type Porps = {
  product: CartProduct;
};

export const CartItem = ({ product }: Porps) => {
  const { quantity, incrementQuantity, decrementQuantity } = useQuantitySelector(product.quantity);
  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);
  const removeProduct = useCartStore((state) => state.removeProduct);

  const handleIncrememtQuantity = () => {
    incrementQuantity();
    updateProductQuantity(product, quantity);
  };
  const handleDecrementQuantity = () => {
    decrementQuantity();
    updateProductQuantity(product, quantity);
  };
  return (
    <article className="w-full flex gap-4">
      <img src={`/imgs/products/${product.image}`} alt={product.title} className="w-24 h-24 rounded-sm" />
      <div className="w-full">
        <header className="flex items-center justify-between gap-2">
          <Link href={`/product/${product.slug}`} className="hover:underline">
            <h3 className="font-bold">{product.title}</h3>
          </Link>
          <button onClick={() => removeProduct(product)}>
            <IoTrashOutline size={20} className="text-red-800" />
          </button>
        </header>
        <span className="block">Size: {product.size}</span>

        <div className="flex items-center justify-between">
          <span>${product.price}</span>
          <QuantitySelector
            quantity={quantity}
            onDecrementeQuatity={handleDecrementQuantity}
            onIncrementeQuatity={handleIncrememtQuantity}
          />
        </div>
      </div>
    </article>
  );
};
