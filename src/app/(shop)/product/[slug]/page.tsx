import { titleFont } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

type Props = {
  params: { slug: string };
};

const ProductPage = ({ params }: Props) => {
  const { slug } = params;

  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <section className="wrapper pt-20 px-4 grid gap-8 xl:grid-cols-2">
      {/* IMAGES */}
      <div className="grid md:grid-cols-[auto_1fr] gap-4">
        <img
          className="md:order-2 rounded-md"
          src={`/imgs/products/${product.images[0]}`}
          alt={product.title}
        />
        <div className="flex gap-4 md:flex-col md:w-40 ">
          <img className="rounded-md" src={`/imgs/products/${product.images[0]}`} alt={product.title} />
          <img className="rounded-md" src={`/imgs/products/${product.images[1]}`} alt={product.title} />
        </div>
      </div>

      {/* INFO-CONENT */}

      <div className="flex flex-col gap-8">
        <div>
          <h2 className={`${titleFont.className} font-black text-3xl`}>{product.title}</h2>
          <span className="font-black text-5xl">${product.price}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl">Available sizes</h3>
          <div className="flex items-center gap-4 flex-wrap">
            {product.sizes.map((size) => (
              <span key={size} className="p-2 bg-neutral-gray text-pure-black rounded-full w-16 text-center">
                {size}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
          <div className="bg-neutral-gray py-2 px-8 flex items-center justify-between gap-2 rounded-full basis-40">
            <button>
              <IoAddOutline />
            </button>
            <span>2</span>
            <button>
              <IoRemoveOutline />
            </button>
          </div>
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
