'use client';

import { getSockBySlug } from '@/actions/product/getSockBySlug';
import { Spinner } from '@/components';
import { useEffect, useState } from 'react';

type Props = {
  slug: string;
};
export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);
  const getStock = async () => {
    const stock = await getSockBySlug(slug);
    setStock(stock);
    setIsloading(false);
  };
  return (
    <>
      {isloading ? (
        <span className="font-black text-xxl flex items-center">
          StocK: <Spinner />
        </span>
      ) : (
        <span className="font-black text-xxl">StocK: {stock}</span>
      )}
    </>
  );
};
