import { z } from 'zod';

export const registerSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, { message: 'Email is required' })
    .email({
      message: 'Invalid email',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(1, { message: 'Email is required' }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
