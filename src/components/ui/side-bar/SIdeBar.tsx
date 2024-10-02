'use client';

import { useUIStore } from '@/store';
import clsx from 'clsx';
import Link from 'next/link';
import {
  IoCloseCircleOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from 'react-icons/io5';

export const SIdeBar = () => {
  const isSideMnuOpen = useUIStore((state) => state.isSidebarOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <div>
      {isSideMnuOpen && (
        <div className="fixed top-0 left-0 h-screen w-full z-10 bg-pure-black opacity-30 "></div>
      )}
      {isSideMnuOpen && (
        <div
          onClick={closeMenu}
          className="fixed top-0 left-0 h-screen w-full z-10 backdrop-filter backdrop-blur-sm"
        ></div>
      )}
      <aside
        className={clsx(
          'fixed top-0 right-0 p-4 h-screen z-10 w-4/5 md:w-2/5 bg-white transition-transform flex flex-col gap-8',
          {
            'translate-x-full': !isSideMnuOpen,
          }
        )}
      >
        <IoCloseCircleOutline size={34} className="ml-auto" onClick={closeMenu} />
        <nav className="flex flex-col gap-4">
          <div className="w-full relative">
            <input
              type="search"
              name="searchg"
              id="search"
              className="w-full py-3 pl-12 pr-2 bg-pure-black text-neutral-gray rounded-md focus:outline-golden-yellow focus:placeholder-golden-yellow"
              placeholder="search"
            />
            <IoSearchOutline size={25} className="absolute top-3 left-4 text-neutral-gray" />
          </div>
          <ul className="pb-2 flex flex-col gap-4 border-b border-neutral-gray">
            <li>
              <Link
                href="/"
                className="py-2 px-4 flex items-center gap-2 rounded-md hover:bg-neutral-gray transition-colors duration-300 font-medium"
              >
                <IoPersonOutline size={30} />
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="py-2 px-4 flex items-center gap-2 rounded-md hover:bg-neutral-gray transition-colors duration-300 font-medium"
              >
                <IoTicketOutline size={30} />
                Orderns
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="py-2 px-4 flex items-center gap-2 rounded-md hover:bg-neutral-gray transition-colors duration-300 font-medium"
              >
                <IoLogInOutline size={30} />
                Log In
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="py-2 px-4 flex items-center gap-2 rounded-md hover:bg-neutral-gray transition-colors duration-300 font-medium"
              >
                <IoLogOutOutline size={30} />
                Log Out
              </Link>
            </li>
          </ul>
          <ul className="pb-2 flex flex-col gap-4 border-b border-neutral-gray">
            <li>
              <Link
                href="/"
                className="py-2 px-4 flex items-center gap-2 rounded-md hover:bg-neutral-gray transition-colors duration-300 font-medium"
              >
                <IoShirtOutline size={30} />
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="py-2 px-4 flex items-center gap-2 rounded-md hover:bg-neutral-gray transition-colors duration-300 font-medium"
              >
                <IoTicketOutline size={30} />
                Orderns
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="py-2 px-4 flex items-center gap-2 rounded-md hover:bg-neutral-gray transition-colors duration-300 font-medium"
              >
                <IoPeopleOutline size={30} />
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};
