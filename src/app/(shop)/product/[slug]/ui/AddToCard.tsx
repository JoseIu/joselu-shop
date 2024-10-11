'use client';
import { QuantitySelector, SizeSelector } from '@/components';
import { useQuantitySelector } from '@/hooks/useQuantitySelector';
import { CartProduct, Product, Size } from '@/interfaces';
import { useCartStore } from '@/store';
import { useState } from 'react';

type Props = {
  product: Product;
};

export const AddToCard = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const [currentSize, setCurrentSize] = useState<Size>(product.sizes[0]);
  const { quantity, incrementQuantity, decrementQuantity, resetQuantity } = useQuantitySelector(1);

  const onAddToCart = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      image: product.images[0],
      price: product.price,
      quantity,
      size: currentSize,
      slug: product.slug,
      title: product.title,
    };

    addProductToCart(cartProduct);

    setCurrentSize(product.sizes[0]);
    resetQuantity();
  };

  return (
    <>
      <SizeSelector selectedSize={currentSize} availableSizes={product.sizes} onChaneSize={setCurrentSize} />

      <div className="flex gap-8">
        <QuantitySelector
          quantity={quantity}
          onDecrementeQuatity={decrementQuantity}
          onIncrementeQuatity={incrementQuantity}
        />
        <button
          onClick={onAddToCart}
          className="bg-pure-black text-neutral-gray px-2 py-4 rounded-full flex-grow"
        >
          Add to cart
        </button>
      </div>
    </>
  );
};
