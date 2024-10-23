import { CartProduct } from '@/interfaces';
import { currencyFormat } from '@/utils';

type Porps = {
  product: CartProduct;
};

export const OrderItem = ({ product }: Porps) => {
  return (
    <article className="w-full flex gap-4">
      <img src={`/imgs/products/${product.image}`} alt={product.title} className="w-24 h-24 rounded-sm" />
      <div className="w-full">
        <header className="flex items-center justify-between gap-2">
          <h3 className="font-bold">{product.title}</h3>
        </header>
        <span className="block">Size: {product.size}</span>

        <div className="flex flex-col gap-2">
          <span>
            {currencyFormat(product.price)} x {product.quantity}
          </span>
          <span className="font-bold">Subtotal: {currencyFormat(product.price * 3)}</span>
        </div>
      </div>
    </article>
  );
};
