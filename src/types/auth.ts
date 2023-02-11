import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }).trim(),
	password: z.string().min(1, 'Password cannot be empty'),
})
export type ILoginData = z.infer<typeof loginSchema>

export const signupSchema = z
	.object({
		firstName: z.string().min(1, { message: 'firstName is Required' }).max(24, { message: 'Name is too long' }),
		lastName: z.string().optional(),
		email: z.string().email({ message: 'Invalid email address' }),
		password: z.string().min(7, 'Password too small').max(18, 'Password too long'),
		confirmPassword: z.string(),
		memberID: z.string().min(1, { message: 'Enter Toastmasters Member ID' }),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	})
export type ISignupData = z.infer<typeof signupSchema>
