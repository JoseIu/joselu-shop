'use client';
import { Product } from '@/interfaces';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  product: Product;
};
export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  return (
    <article key={product.slug} className="flex flex-col gap-4 ">
      <Link href={`/product/${product.slug}`}>
        <img
          className="aspect-square rounded-lg"
          src={`./imgs/products/${displayImage}`}
          alt={product.title}
          loading="lazy"
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>
      <div>
        <h2 className="font-medium text-xl">{product.title}</h2>

        <span className="text-xl font-bold">${product.price}</span>
      </div>
    </article>
  );
};
