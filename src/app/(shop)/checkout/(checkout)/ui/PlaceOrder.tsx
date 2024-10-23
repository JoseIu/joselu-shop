'use client';
import { SekeletonPalceOrder, Spinner } from '@/components';
import { titleFont } from '@/config/fonts';
import { useAddresStore, useCartStore } from '@/store';
import { currencyFormat, sleep } from '@/utils';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export const PlaceOrder = () => {
  const [isLoding, setIsloading] = useState(true);
  const [summaryInfo, setSummaryInfo] = useState({ subTotal: 0, tax: 0, total: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const userAddress = useAddresStore((state) => state.address);
  const cartStore = useCartStore();

  const handlePlaceOrder = async () => {
    setIsSubmitting(true);
    await sleep(2);
    console.log(userAddress);
    setIsSubmitting(false);
  };

  useEffect(() => {
    const { subTotal, tax, total } = cartStore.getSymaryInfo();
    setSummaryInfo({ subTotal, tax, total });
    setIsloading(false);
  }, [cartStore]);

  return (
    <div className="p-6 w-full max-h-[30rem] md:w-80 lg:w-[30rem] rounded-md border border-soft-gray flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h3 className={`${titleFont.className} text-2xl font-black`}>Delivery address</h3>

        {isLoding ? (
          <SekeletonPalceOrder quantityItems={6} />
        ) : (
          <>
            <span>
              {userAddress.name} - {userAddress.surname}
            </span>
            <span>{userAddress.address}</span>
            <span>{userAddress.city}</span>
            <span>{userAddress.country}</span>
            <span>CD: {userAddress.zipCode}</span>
            <span>Phone: {userAddress.phone}</span>
          </>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className={`${titleFont.className} text-2xl font-black`}>Summary of order</h3>

        <div className="flex items-center justify-between">
          <span className="text-sumary-color font-medium">Subtotal</span>
          <span className="font-bold">{currencyFormat(summaryInfo.subTotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sumary-color font-medium">Taxes (15%)</span>
          <span className="font-bold">{currencyFormat(summaryInfo.tax)}</span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-medium">Total</span>
          <span className="font-bold">{currencyFormat(summaryInfo.total)}</span>
        </div>
      </div>

      <button
        disabled={isSubmitting}
        onClick={handlePlaceOrder}
        className={clsx(
          'w-full flex items-center justify-center gap-4 bg-pure-black py-2 px-4 text-neutral-50 rounded-full',
          {
            'bg-golden-yellow text-pure-black': isSubmitting,
          }
        )}
      >
        {isSubmitting ? (
          <span className="flex gap-1 items-center">
            Checkout... <Spinner />
          </span>
        ) : (
          'Checkout'
        )}
      </button>
    </div>
  );
};
