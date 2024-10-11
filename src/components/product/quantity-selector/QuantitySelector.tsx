'use client';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

type Props = {
  quantity: number;
  onIncrementeQuatity: () => void;
  onDecrementeQuatity: () => void;
};

export const QuantitySelector = ({ quantity, onIncrementeQuatity, onDecrementeQuatity }: Props) => {
  return (
    <div className="bg-neutral-gray py-2 px-8 flex items-center justify-between gap-2 rounded-full basis-40">
      <button onClick={onDecrementeQuatity}>
        <IoRemoveOutline />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrementeQuatity}>
        <IoAddOutline />
      </button>
    </div>
  );
};
