import { OrderItem, Title } from '@/components';
import { titleFont } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import clsx from 'clsx';
import { IoCardOutline } from 'react-icons/io5';

type Props = {
  params: {
    id: string;
  };
};

const produsctsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
];
const OrdersPageById = ({ params }: Props) => {
  const { id } = params;
  return (
    <section className="wrapper pt-10 px-4">
      <Title title={`Order ${id}`} />
      <div
        className={clsx('p-2 mb-4 rounded-md flex items-center gap-2 text-neutral-gray', {
          'bg-red-700': false,
          'bg-green-700': true,
        })}
      >
        <IoCardOutline size={24} />
        <span>Paid order</span>
      </div>

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

          <div
            className={clsx('p-2 mb-4 rounded-md flex items-center gap-2 text-neutral-gray', {
              'bg-red-700': false,
              'bg-green-700': true,
            })}
          >
            <IoCardOutline size={24} />
            <span>paid order</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersPageById;
