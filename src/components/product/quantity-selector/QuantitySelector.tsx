'use client';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

type Props = {
  quantity: number;
  onIncrementeQuatity: (quantity: number) => void;
  onDecrementeQuatity: (quantity: number) => void;
};

export const QuantitySelector = ({ quantity, onIncrementeQuatity, onDecrementeQuatity }: Props) => {
  const handleDecrementeQuatity = (value: number) => {
    if (quantity <= 1) return;
    onDecrementeQuatity(quantity - value);
  };
  const handleIncrementeQuatity = (value: number) => {
    if (quantity >= 10) return;
    onIncrementeQuatity(quantity + value);
  };
  return (
    <div className="bg-neutral-gray py-2 px-8 flex items-center justify-between gap-2 rounded-full basis-40">
      <button onClick={() => handleDecrementeQuatity(1)}>
        <IoRemoveOutline />
      </button>
      <span>{quantity}</span>
      <button onClick={() => handleIncrementeQuatity(1)}>
        <IoAddOutline />
      </button>
    </div>
  );
};
