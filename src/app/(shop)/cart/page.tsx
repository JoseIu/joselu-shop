'use client';
import { titleFont } from '@/config/fonts';
import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import { ProductsInCart } from './ui/ProductsInCart';
import { SumaryInfo } from './ui/SumaryInfo';

const CartPage = () => {
  const router = useRouter();
  const productInCart = useCartStore((state) => state.cart);

  if (!productInCart.length) {
    return router.push('/empty');
  }
  return (
    <section className="wrapper pt-20 px-4">
      <h2 className={`${titleFont.className} text-4xl mb-8`}>YOUR CART</h2>

      <div className="grid gap-8 md:grid-cols-[1fr_auto]">
        <div className="p-6 rounded-md border border-soft-gray flex flex-col gap-8">
          <ProductsInCart />
        </div>

        <SumaryInfo />
      </div>
    </section>
  );
};

export default CartPage;
