'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  path: string;
  title: string;
};
export const TopMenuItem = ({ path, title }: Props) => {
  const menuPath = usePathname();

  const inPathActive = menuPath === path && 'bg-pure-black text-neutral-gray';
  return (
    <li>
      <Link
        href={path}
        className={`${inPathActive} px-4 py-2 rounded-md font-medium hover:bg-pure-black hover:text-neutral-gray transition-colors duration-200 ease-in`}
      >
        {title}
      </Link>
    </li>
  );
};
