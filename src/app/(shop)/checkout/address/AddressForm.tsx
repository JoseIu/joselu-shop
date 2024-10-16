'use client';
import { InputForm } from '@/components';
import { Country } from '@/interfaces/country.interface';
import { useAddresStore } from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdArrowForward } from 'react-icons/io';
import { Address, AddressSchema } from './addresSchema';

type Props = {
  countries: Country[];
};

export const AddressForm = ({ countries }: Props) => {
  const setAddress = useAddresStore((state) => state.setAddress);
  const address = useAddresStore((state) => state.address);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Address>({
    resolver: zodResolver(AddressSchema),
  });

  const onhandleSubmit: SubmitHandler<Address> = (data) => {
    setAddress(data);
  };

  useEffect(() => {
    if (address.name) {
      reset(address);
    }
  }, [reset, address]);
  return (
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
          type="text"
          label="Zip code"
          error={errors['zipCode']}
          {...register('zipCode')}
          placeholder="your zipCode"
          id="zipCode"
        />
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
        <div className="flex flex-col gap-[3px]">
          <label htmlFor="country" className="text-pure-black font-semibold">
            Country *
          </label>
          <select
            className="w-full px-4 py-[14px] border-[2px] border-[#0000008a] rounded-[5px]"
            id="country"
            {...register('country')}
            defaultValue={countries[0].id}
          >
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <InputForm
          type="text"
          label="Phone"
          error={errors['phone']}
          {...register('phone')}
          placeholder="your phone"
          id="phone"
        />
      </div>
      <div className="px-1 inline-flex items-center">
        <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
          <input
            type="checkbox"
            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-neutral-gray checked:bg-pure-black checked:border-pure-black"
            id="check-2"
            {...register('rememberAddress')}
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label className="cursor-pointer ml-2 text-pure-black text-sm" htmlFor="check-2">
          Remember Address?
        </label>
      </div>

      <button
        type="submit"
        className="w-full md:w-40 py-2 px-4 rounded-md bg-pure-black text-neutral-gray flex items-center gap-4 justify-center"
      >
        Next
        <IoMdArrowForward size={20} />
      </button>
    </form>
  );
};
