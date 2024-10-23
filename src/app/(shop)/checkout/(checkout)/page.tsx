import { Title } from '@/components';
import Link from 'next/link';
import { PlaceOrder } from './ui/PlaceOrder';
import { ProductsInCart } from './ui/ProductsInCart';

const CheckOutPage = () => {
  return (
    <section className="wrapper pt-10 px-4">
      <Title title="CHECK ORDER" />
      <span className="block text-xl">Adjust elements</span>
      <Link href="/cart" className="text-sumary-color border-b border-sumary-color mb-4 inline-block">
        adjust cart
      </Link>

      <div className="grid gap-8 md:grid-cols-[1fr_auto]">
        <ProductsInCart />

        <PlaceOrder />
      </div>
    </section>
  );
};

export default CheckOutPage;
