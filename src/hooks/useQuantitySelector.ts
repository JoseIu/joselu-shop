import { useState } from 'react';

export const useQuantitySelector = (value: number = 1) => {
  const [quantity, setQuantity] = useState(value);

  const incrementQuantity = () => {
    if (quantity >= 10) return;

    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity <= 1) return;

    setQuantity(quantity - 1);
  };

  const resetQuantity = () => {
    setQuantity(1);
  };

  return { quantity, incrementQuantity, decrementQuantity, resetQuantity };
};
