'use client';

import { authenticate } from '@/actions';
import { InputForm } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema, LoginSchema } from '../logingSchema';

export const LogingForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onhandleSubmit: SubmitHandler<LoginSchema> = (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    dispatch(formData);
  };
  return (
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
        Log in
      </button>
    </form>
  );
};
