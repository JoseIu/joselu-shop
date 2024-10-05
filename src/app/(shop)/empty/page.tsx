import { titleFont } from '@/config/fonts';
import Link from 'next/link';

const EmptyCartPage = () => {
  return (
    <section className="wrapper pt-20 px-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <img className="max-w-[50rem]" src="/empty.svg" alt="empty image" />

        <div className="flex flex-col gap-4 items-center">
          <h2 className={`${titleFont.className} text-2xl font-semibold`}>Your cart is empty</h2>
          <p className=" text-sumary-color">Let`s Start shopping now and add items you love.</p>

          <Link href="/" className="py-2 px-8 bg-pure-black text-neutral-gray rounded-full">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmptyCartPage;
