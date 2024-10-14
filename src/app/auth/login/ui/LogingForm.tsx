'use client';

import { authenticate } from '@/actions';
import { InputForm, Spinner } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { IoWarningOutline } from 'react-icons/io5';
import { loginSchema, LoginSchema } from '../logingSchema';

const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const router = useRouter();

  //TODO: check if can i use hook form with action form
  const {
    register,

    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (state === 'Success') {
      router.replace('/');
    }
  }, [state, router]);
  return (
    <form action={dispatch} className="flex flex-col gap-4">
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

      {state === 'Invalid credentials' && (
        <div className="py-1 px-4 flex items-center gap-2 bg-red-700 text-neutral-gray rounded-sm">
          <IoWarningOutline size={20} />
          <span className="uppercase font-semibold">Invalid credentials</span>
        </div>
      )}
      <LoginButton />
    </form>
  );
};
export default LoginForm;

const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 rounded-md bg-pure-black text-neutral-gray flex items-center justify-center"
    >
      {pending ? (
        <span className="flex items-center justify-center gap-1">
          Logging in...
          <Spinner white />
        </span>
      ) : (
        'Login'
      )}
    </button>
  );
};
