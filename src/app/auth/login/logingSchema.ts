import { z } from 'zod';

export const loginSchema = z.object({
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
      required_error: 'Password must be a string',
    })
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be 6 characters' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
