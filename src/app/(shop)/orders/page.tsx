import { Title } from '@/components';
import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';

const OrdersPage = () => {
  return (
    <section className="wrapper pt-20 px-4">
      <Title title="Orders" />

      <div className="relative overflow-x-auto rounded-md border border-gray-500">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs bg-pure-black text-neutral-gray uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                #ID
              </th>

              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-700">
              <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                1
              </td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4 text-green-700 flex items-center gap-2">
                <IoCardOutline size={24} />
                <span>Paid</span>
              </td>
              <td className="px-6 py-4">
                <Link href="/orders/1" className="text-pure-black">
                  view..
                </Link>
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-700">
              <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                2
              </td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4 text-green-700 flex items-center gap-2">
                <IoCardOutline size={24} />
                <span>Paid</span>
              </td>
              <td className="px-6 py-4">
                <Link href="/orders/1" className="text-pure-black">
                  view..
                </Link>
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-700">
              <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                3
              </td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4 text-red-600 flex items-center gap-2">
                <IoCardOutline size={24} />
                <span>Paid</span>
              </td>
              <td className="px-6 py-4">
                <Link href="/orders/1" className="text-pure-black">
                  view..
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrdersPage;
