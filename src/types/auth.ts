import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }).trim(),
	password: z.string().min(1, 'Password cannot be empty'),
})
export type ILoginData = z.infer<typeof loginSchema>
