import { Logo } from '@/components';
import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { LogingForm } from './ui/LogingForm';

const LoginPage = () => {
  return (
    <section className="wrapper h-dvh p-4 lg:grid lg:grid-cols-2">
      <div className="hidden p-4 h-full lg:flex flex-col justify-center gap-4">
        <div className="w-80">
          <div className="style">
            <Logo className="w-72" />
          </div>
        </div>
        <span className="text-3xl font-semibold max-w-[30rem]">
          Unlock your shopping experience with just one login!
        </span>
      </div>
      <div className="h-full flex flex-col gap-4 justify-center">
        <h1 className={`${titleFont.className} text-xl font-black`}>Login</h1>
        <LogingForm />
        <span className="text-sumary-color font-medium">
          You can login with your registered accounth or quick login with yout Google account
        </span>

        <div className="flex items-center gap-2">
          <span className="text-sumary-color font-medium">Don’t have an account?</span>
          <Link className="text-pure-black font-bold" href="/auth/new-account">
            Create one!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
