import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

export const NotFound = () => {
  return (
    <section className="wrapper h-[calc(100dvh-4rem)] flex flex-col items-center justify-center">
      <img src="/not-found.gif" alt="404 not found page gif" className="max-w-lg select-none" />

      <div className="flex flex-col items-center gap-2">
        <h2 className={`${titleFont.className} text-5xl font-black`}>Page not found!</h2>
        <span className="text-xl">Whoops,¿Are you lost?</span>
        <Link href="/" className="py-1 px-4 rounded-md bg-pure-black text-light-gray flex items-center gap-2">
          <IoArrowBack size={20} />
          Return to the home
        </Link>
      </div>
    </section>
  );
};
