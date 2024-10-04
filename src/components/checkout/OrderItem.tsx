import { Product } from '@/interfaces';

type Porps = {
  product: Product;
};

export const OrderItem = ({ product }: Porps) => {
  return (
    <article className="w-full flex gap-4">
      <img src={`/imgs/products/${product.images[0]}`} alt={product.title} className="w-24 h-24 rounded-sm" />
      <div className="w-full">
        <header className="flex items-center justify-between gap-2">
          <h3 className="font-bold">{product.title}</h3>
        </header>
        <span className="block">Size: {product.sizes[0]}</span>

        <div className="flex flex-col gap-2">
          <span>${product.price} x 3</span>
          <span className="font-bold">Subtotal: ${product.price * 3}</span>
        </div>
      </div>
    </article>
  );
};
