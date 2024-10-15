'use client';
import { login, registerUser } from '@/actions';
import { InputForm, Logo, Spinner } from '@/components';
import { titleFont } from '@/config/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerSchema, RegisterSchema } from './registerSchema';

const NewAccountPage = () => {
  const [registerError, setRegisterError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onhandleSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    const resp = await registerUser(data.name, data.email, data.password);

    if (!resp.ok) {
      return setRegisterError(resp.message);
    }

    await login(data.email.toLocaleLowerCase(), data.password);

    window.location.replace('/');
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
            type="text"
            label="Name"
            placeholder="your name"
            error={errors['name']}
            id="name"
            {...register('name')}
          />
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

          {registerError && (
            <span className="px-2 py-1 rounded-sm bg-red-700 text-neutral-gray">{registerError}</span>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md bg-pure-black text-neutral-gray flex items-center justify-center gap-2"
          >
            Register {isSubmitting && <Spinner white />}
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
