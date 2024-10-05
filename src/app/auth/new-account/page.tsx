'use client';
import { InputForm, Logo } from '@/components';
import { titleFont } from '@/config/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerSchema, RegisterSchema } from './registerSchema';

const NewAccountPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onhandleSubmit: SubmitHandler<RegisterSchema> = (data) => {
    const obejestToSend = {
      ...data,
      test: 'Test',
    };
    console.log(obejestToSend);
  };
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
        <h1 className={`${titleFont.className} text-xl font-black`}>Creante Account</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onhandleSubmit)}>
          <InputForm
            type="email"
            label="Email"
            placeholder="example@google.com"
            error={errors['email']}
            id="email"
            {...register('email')}
          />
          <InputForm
            type="password"
            label="Password"
            placeholder="******"
            error={errors['password']}
            id="password"
            {...register('password')}
          />

          <button type="submit" className="w-full px-4 py-2 rounded-md bg-pure-black text-neutral-gray">
            Register
          </button>
        </form>
        <span className="text-sumary-color font-medium">
          You can login with your registered accounth or quick login with yout Google account
        </span>

        <div className="flex items-center gap-2">
          <span className="text-sumary-color font-medium">Have an account?</span>
          <Link href="/auth/login" className="text-pure-black font-bold">
            Login!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewAccountPage;
