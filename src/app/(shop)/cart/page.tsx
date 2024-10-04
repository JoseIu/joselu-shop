import { CartItem } from '@/components';
import { titleFont } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

const produsctsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
];

const CartPage = () => {
  return (
    <section className="wrapper pt-20 px-4">
      <h2 className={`${titleFont.className} text-4xl mb-8`}>YOUR CART</h2>

      <div className="grid gap-8 md:grid-cols-[1fr_auto]">
        <div className="p-6 rounded-md border border-soft-gray flex flex-col gap-8">
          {produsctsInCart.map((product) => (
            <CartItem key={product.slug} product={product} />
          ))}
        </div>

        <div className="p-6 w-full max-h-80 md:w-80 lg:w-[30rem] rounded-md border border-soft-gray flex flex-col justify-between gap-4">
          <h3 className={`${titleFont.className} text-2xl font-black`}>Order Summary</h3>
          <div className="flex items-center justify-between">
            <span className="text-sumary-color font-medium">Subtotal</span>
            <span className="font-bold">$290</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sumary-color font-medium">Taxes</span>
            <span className="font-bold">15%</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-sumary-color font-medium">Total</span>
            <span className="font-bold">$334</span>
          </div>

          <Link
            href="/checkout/address"
            className="w-full flex items-center justify-center gap-4 bg-pure-black py-2 px-4 text-neutral-50 rounded-full"
          >
            Go to Checkout
            <IoArrowForwardOutline size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
