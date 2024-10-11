'use client';
import { menuPaths } from '@/app/constants/menuPath';
import { useCartStore, useUIStore } from '@/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5';
import { Logo } from '../logo/Logo';
import { TopMenuItem } from './TopMenuItem';

export const TopMenu = () => {
  const [loaded, setLoaded] = useState(false);
  const itemsInCart = useCartStore((state) => state.getTotalItem());
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className="wrapper p-6 flex items-center justify-between border-b border-border-color">
      <Link href="/">
        <Logo className="w-32 md:w-48" />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          {menuPaths.map((item) => (
            <TopMenuItem key={item.path} path={item.path} title={item.title} />
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/search" aria-label="link search">
          <IoSearchOutline size={30} aria-label="search icon" />
        </Link>

        <div className="relative">
          {loaded && itemsInCart > 0 && (
            <span className="absolute bottom-4 left-4 w-4 h-4 p-1 text-xs bg-pure-black text-neutral-gray rounded-full flex items-center justify-center">
              {itemsInCart}
            </span>
          )}
          <Link href="/cart" aria-label="link to go cart">
            <IoCartOutline size={30} aria-label="cart icon" />
          </Link>
        </div>

        <button className="" onClick={openSideMenu}>
          <IoMenuOutline size={30} aria-label="menu icon" />
        </button>
      </div>
    </header>
  );
};
