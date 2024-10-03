'use client';
import type { Size } from '@/interfaces';
import clsx from 'clsx';
import { useState } from 'react';

type Props = {
  selectedSize: Size;
  availableSizes: Size[];
};

export const SizeSelector = ({ availableSizes, selectedSize }: Props) => {
  const [currentSize, setCurrentSize] = useState(selectedSize);
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-xl">Available sizes</h3>
      <div className="flex items-center gap-4 flex-wrap">
        {availableSizes.map((size) => (
          <span
            key={size}
            onClick={() => setCurrentSize(size)}
            className={clsx(
              'p-2 bg-neutral-gray text-pure-black rounded-full w-16 text-center select-none',

              {
                'bg-pure-black text-white': currentSize === size,
              }
            )}
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
};
