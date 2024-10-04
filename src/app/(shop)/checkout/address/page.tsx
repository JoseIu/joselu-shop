'use client';
import { InputForm } from '@/components';
import { titleFont } from '@/config/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Address, AddressSchema } from './addresSchema';

const AdressPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>({
    resolver: zodResolver(AddressSchema),
  });

  const onhandleSubmit: SubmitHandler<Address> = (data) => {
    const obejestToSend = {
      ...data,
      test: 'Test',
    };
    console.log(obejestToSend);
  };
  return (
    <section className="wrapper pt-20 px-4">
      <h2 className={`${titleFont.className} text-3xl font-black`}>Direction</h2>
      <span className="block font-medium mb-4">Delivery address</span>
      <form onSubmit={handleSubmit(onhandleSubmit)} className="flex flex-col gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <InputForm
            type="text"
            label="Name"
            error={errors['name']}
            {...register('name')}
            placeholder="your name"
            id="name"
          />
          <InputForm
            type="text"
            label="Last name"
            error={errors['surname']}
            {...register('surname')}
            placeholder="your last name"
            id="last-name"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <InputForm
            type="text"
            label="Direction"
            error={errors['address']}
            {...register('address')}
            placeholder="your address"
            id="address"
          />
          <InputForm
            type="text"
            label="Direction (optional)"
            error={errors['address2']}
            {...register('address2')}
            placeholder="your address"
            isRequired={false}
            id="address2"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <InputForm
            type="number"
            label="Zip code"
            error={errors['zipCode']}
            {...register('zipCode')}
            placeholder="your zipCode"
            id="zipCode"
          />
          {/* TODO: MAKE SELECT INPUT-COMPONENT */}
          <InputForm
            type="text"
            label="City"
            error={errors['city']}
            {...register('city')}
            placeholder="your city"
            id="city"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <InputForm
            type="text"
            label="Country"
            error={errors['country']}
            {...register('country')}
            placeholder="your country"
            id="zicountrypCode"
          />
          <InputForm
            type="text"
            label="Phone"
            error={errors['phone']}
            {...register('phone')}
            placeholder="your phone"
            id="phone"
          />
        </div>

        <Link
          href="/checkout"
          className="w-full md:w-40 py-2 px-4 rounded-md bg-pure-black text-neutral-gray"
        >
          Next
        </Link>
      </form>
    </section>
  );
};

export default AdressPage;
