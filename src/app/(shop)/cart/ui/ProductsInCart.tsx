'use client';
import { CartItem, SkeletonCartItem } from '@/components';
import { useCartStore } from '@/store';
import { useEffect, useState } from 'react';

export const ProductsInCart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const produsctsInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setIsLoading(!produsctsInCart.length);
  }, [produsctsInCart]);
  return (
    <>
      {isLoading ? (
        <SkeletonCartItem quantityItems={4} />
      ) : (
        <>
          {produsctsInCart.map((product) => (
            <CartItem key={`${product.slug}-${product.size}`} product={product} />
          ))}
        </>
      )}
    </>
  );
};
