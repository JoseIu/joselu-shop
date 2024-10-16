import { z } from 'zod';

export const AddressSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(1, { message: 'Name cant be empy' }),
  surname: z.string({ required_error: 'Surname is required' }).min(1, { message: 'Surname cant be empty' }),
  address: z.string({ required_error: 'Address is required' }).min(1, { message: 'Address cant be empty' }),
  address2: z.string().optional(),
  zipCode: z
    .string({ required_error: 'ZipCode is required' })
    .min(1, { message: 'ZipCode cant be empty' })
    .refine((code) => !isNaN(Number(code)), { message: 'Zip code must be a number' }),
  city: z.string({ required_error: 'City is required' }).min(1, { message: 'City cant be empty' }),
  country: z.string({ required_error: 'Country is required' }).min(1, { message: 'Country cant be empty' }),
  phone: z.string({ required_error: 'Phone is required' }).min(1, { message: 'Phone cant be empty' }),
  rememberAddress: z.boolean().optional().default(false),
});

export type Address = z.infer<typeof AddressSchema>;
