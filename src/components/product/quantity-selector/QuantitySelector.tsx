'use client';
import { useState } from 'react';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(2);
  const incrementeQuatity = () => {
    if (quantity >= 10) return;
    setQuantity(quantity + 1);
  };
  const decrementeQuatity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };
  return (
    <div className="bg-neutral-gray py-2 px-8 flex items-center justify-between gap-2 rounded-full basis-40">
      <button onClick={decrementeQuatity}>
        <IoRemoveOutline />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementeQuatity}>
        <IoAddOutline />
      </button>
    </div>
  );
};
