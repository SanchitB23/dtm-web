import { AxiosError as AError, HttpStatusCode } from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import authService from '@/services/auth.service'
import type { ILoginData } from '@/types/auth'
import type { AxiosError } from 'axios'
import type { User } from 'next-auth'

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			id: 'user-auth',
			type: 'credentials',
			// The name to display on the sign-in form (e.g. 'Sign in with...')
			name: 'Credentials',
			// The credentials are used to generate a suitable form on the sign-in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials: Record<keyof ILoginData, string> | undefined): Promise<User | null> {
				// You need to provide your own logic here that takes the credentials
				// submitted and returns either an object representing a user or value
				// that is false/null if the credentials are invalid.
				// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
				// You can also use the `req` object to obtain additional parameters
				// (i.e., the request IP address)
				console.log('AUTHHH')
				try {
					const res = await authService.login(credentials)
					console.log('api', res)
					const user = res.data
					// If no error and we have user data, return it
					if (res.status === HttpStatusCode.Ok && Boolean(user)) {
						return user
					}
				} catch (e) {
					throw e as AxiosError
				}
				throw new AError('Something went wrong', '500')
			},
		}),
	],

	pages: {
		signIn: '/auth/signin',
		error: '/auth/signin',
	},
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async session({ session, token }) {
			session.accessToken = token.accessToken
			return session
		},
		async jwt({ token, user }) {
			if (user != null) {
				token = { accessToken: user.token }
			}
			return token
		},
	},
})

export { handler as GET, handler as POST }
