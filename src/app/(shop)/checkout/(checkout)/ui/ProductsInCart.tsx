'use client';
import { OrderItem, SkeletonCartItem } from '@/components';
import { useCartStore } from '@/store';
import { useEffect, useState } from 'react';

export const ProductsInCart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const produsctsInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setIsLoading(!produsctsInCart.length);
  }, [produsctsInCart]);
  return (
    <div className="p-6 rounded-md border border-soft-gray flex flex-col gap-8">
      {isLoading ? (
        <SkeletonCartItem quantityItems={3} />
      ) : (
        <>
          {produsctsInCart.map((product) => (
            <OrderItem key={product.slug} product={product} />
          ))}
        </>
      )}
    </div>
  );
};
