import { OrderItem, Title } from '@/components';
import { titleFont } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import Link from 'next/link';

const produsctsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
];
const CheckOutPage = () => {
  return (
    <section className="wrapper pt-10 px-4">
      <Title title="CHECK ORDER" />
      <span className="block text-xl">Adjust elements</span>
      <Link href="/cart" className="text-sumary-color border-b border-sumary-color mb-4 inline-block">
        adjust cart
      </Link>

      <div className="grid gap-8 md:grid-cols-[1fr_auto]">
        <div className="p-6 rounded-md border border-soft-gray flex flex-col gap-8">
          {produsctsInCart.map((product) => (
            <OrderItem key={product.slug} product={product} />
          ))}
        </div>

        <div className="p-6 w-full max-h-[30rem] md:w-80 lg:w-[30rem] rounded-md border border-soft-gray flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h3 className={`${titleFont.className} text-2xl font-black`}>Delivery address</h3>
            <span>Jose Luis Gonzales</span>
            <span>AV. Siempre amor Nº14</span>
            <span>Sevilla</span>
            <span>España</span>
            <span>CD: 123123123</span>
            <span>Phone: 654321678</span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className={`${titleFont.className} text-2xl font-black`}>Summary of order</h3>

            <div className="flex items-center justify-between">
              <span className="text-sumary-color font-medium">Subtotal</span>
              <span className="font-bold">$290</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sumary-color font-medium">Taxes</span>
              <span className="font-bold">15%</span>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-medium">Total</span>
              <span className="font-bold">$334</span>
            </div>
          </div>

          <Link
            href="/checkout/address"
            className="w-full flex items-center justify-center gap-4 bg-pure-black py-2 px-4 text-neutral-50 rounded-full"
          >
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
