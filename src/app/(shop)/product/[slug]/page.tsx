export const revalidate = 604800; //7 dyas

import { getProductBySlug } from '@/actions/product/getProductBySlug';
import {
  PorductMobileSlideShow,
  PorductSlideShow,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from '@/components';
import { titleFont } from '@/config/fonts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      images: [`/products/${product?.images[1]}`],
    },
  };
};

const ProductPage = async ({ params }: Props) => {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }
  return (
    <section className="wrapper w-full pt-20 md:grid md:gap-8 md:grid-cols-2">
      {/* IMAGES */}

      <div className="w-full lg:w-[32rem]">
        <PorductSlideShow title={product.title} images={product.images} className="hidden md:block" />
        <PorductMobileSlideShow title={product.title} images={product.images} className="block md:hidden" />
      </div>

      {/* INFO-CONENT */}
      <div className="flex px-4 flex-col gap-8">
        <div>
          <StockLabel slug={slug} />

          <h2 className={`${titleFont.className} font-black text-3xl`}>{product.title}</h2>
          <span className="font-black text-5xl">${product.price}</span>
        </div>
        <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />

        <div className="flex gap-8">
          <QuantitySelector />
          <button className="bg-pure-black text-neutral-gray px-2 py-4 rounded-full flex-grow">
            Add to cart
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
