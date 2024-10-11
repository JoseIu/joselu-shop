'use client';
import { titleFont } from '@/config/fonts';
import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

export const SumaryInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [summaryInfo, setSummaryInfo] = useState({ subTotal: 0, tax: 0, total: 0 });
  const cartStore = useCartStore();

  useEffect(() => {
    const { subTotal, tax, total } = cartStore.getSymaryInfo();
    setSummaryInfo({ subTotal, tax, total });
    setIsLoading(false);
  }, [cartStore]);
  return (
    <>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <div className="p-6 w-full max-h-80 md:w-80 lg:w-[30rem] rounded-md border border-soft-gray flex flex-col justify-between gap-4">
          <h3 className={`${titleFont.className} text-2xl font-black`}>Order Summary</h3>
          <div className="flex items-center justify-between">
            <span className="text-sumary-color font-medium">Subtotal</span>
            <span className="font-bold">{currencyFormat(summaryInfo.subTotal)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sumary-color font-medium">Taxes 15%</span>
            <span className="font-bold">{currencyFormat(summaryInfo.tax)}</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-sumary-color font-medium">Total</span>
            <span className="font-bold">{currencyFormat(summaryInfo.total)}</span>
          </div>

          <Link
            href="/checkout/address"
            className="w-full flex items-center justify-center gap-4 bg-pure-black py-2 px-4 text-neutral-50 rounded-full"
          >
            Go to Checkout
            <IoArrowForwardOutline size={24} />
          </Link>
        </div>
      )}
    </>
  );
};
