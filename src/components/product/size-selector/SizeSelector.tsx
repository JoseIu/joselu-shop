'use client';
import type { Size } from '@/interfaces';
import clsx from 'clsx';

type Props = {
  selectedSize: Size;
  availableSizes: Size[];
  onChaneSize: (size: Size) => void;
};

export const SizeSelector = ({ availableSizes, selectedSize, onChaneSize }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-xl">Available sizes</h3>
      <div className="flex items-center gap-4 flex-wrap">
        {availableSizes.map((size) => (
          <span
            key={size}
            onClick={() => onChaneSize(size)}
            className={clsx(
              'p-2 bg-neutral-gray text-pure-black rounded-full w-16 text-center select-none cursor-pointer',

              {
                'bg-pure-black text-white': selectedSize === size,
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
