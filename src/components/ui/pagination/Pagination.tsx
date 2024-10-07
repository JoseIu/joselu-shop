'use client';
import { generatePaginationNumbers } from '@/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

type Props = {
  totalPages: number;
};
export const Pagination = ({ totalPages }: Props) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get('page') ?? 1;
  const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString);
  const allPges = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
      return `${pathName}?${params.toString()}`;
    }
    if (Number(pageNumber) === 0) {
      return `${pathName}`; //href="/"
    }

    //if pageNumber > 1 return the same route
    if (Number(pageNumber) > totalPages) {
      return `${pathName}?${params.toString()}`;
    }
    if (Number(pageNumber) < 1) {
      return `${pathName}?${params.toString()}`;
    }

    params.set('page', pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };
  return (
    <div className="flex justify-center items-center mt-20">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item ">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
            >
              <IoChevronBackOutline size={30} />
            </Link>
          </li>

          {allPges.map((page, index) => (
            <li key={`${page}-${index}`} className="page-item">
              <Link
                className={clsx(
                  'page-link relative block py-1.5 px-3 border-0  outline-none transition-all duration-300 rounded text-pure-black hover:text-neutral-gray hover:bg-pure-black focus:shadow-none',
                  {
                    'bg-pure-black text-white': currentPage === Number(page),
                  }
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage + 1)}
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
