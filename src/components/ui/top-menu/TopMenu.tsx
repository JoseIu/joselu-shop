'use client';
import { useUIStore } from '@/store';
import Link from 'next/link';
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5';
import { Logo } from '../logo/Logo';

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <header className="wrapper p-4 flex items-center justify-between border-b border-border-color">
      <Link href="/">
        <Logo className="w-32" />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/category/men"
              className="px-4 py-1 rounded-md font-medium hover:bg-pure-black hover:text-neutral-gray transition-colors duration-200 ease-in"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              href="/category/women"
              className="px-4 py-1 rounded-md font-medium hover:bg-pure-black hover:text-neutral-gray transition-colors duration-200 ease-in"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              href="/category/kids"
              className="px-4 py-1 rounded-md font-medium hover:bg-pure-black hover:text-neutral-gray transition-colors duration-200 ease-in"
            >
              Kids
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <Link href="/search" aria-label="link search">
          <IoSearchOutline className="w-5 h-5" aria-label="search icon" />
        </Link>

        <div className="relative">
          <span className="absolute bottom-3 left-3  w-4 h-4 p-1 text-xs bg-pure-black text-neutral-gray rounded-full flex items-center justify-center">
            3
          </span>
          <Link href="/cart" aria-label="link to go cart">
            <IoCartOutline className="w-5 h-5" aria-label="cart icon" />
          </Link>
        </div>

        <button className="" onClick={openSideMenu}>
          <IoMenuOutline className="w-6 h-6" aria-label="menu icon" />
        </button>
      </div>
    </header>
  );
};
