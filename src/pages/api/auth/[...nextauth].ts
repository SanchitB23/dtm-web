import { HttpStatusCode } from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import authService from '@/services/auth.service'
import type { ILoginData } from '@/types/auth'
import type { User } from 'next-auth'

// todo set expiry
export default async function auth(req, res) {
	return NextAuth(req, res, {
		providers: [
			CredentialsProvider({
				// The name to display on the sign in form (e.g. 'Sign in with...')
				name: 'Credentials',
				// The credentials is used to generate a suitable form on the sign in page.
				// You can specify whatever fields you are expecting to be submitted.
				// e.g. domain, username, password, 2FA token, etc.
				// You can pass any HTML attribute to the <input> tag through the object.
				credentials: {
					email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
					password: { label: 'Password', type: 'password' },
				},
				async authorize(credentials: Record<keyof ILoginData, string> | undefined): Promise<User | null> {
					// You need to provide your own logic here that takes the credentials
					// submitted and returns either a object representing a user or value
					// that is false/null if the credentials are invalid.
					// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
					// You can also use the `req` object to obtain additional parameters
					// (i.e., the request IP address)
					const res = await authService.login(credentials)
					const user = res.data
					// If no error and we have user data, return it
					if (res.status === HttpStatusCode.Ok && Boolean(user)) {
						return user
					}
					// Return null if user data could not be retrieved
					return null
				},
			}),
		],

		pages: {
			signIn: '/auth/signin',
		},
		session: {
			strategy: 'jwt',
		},
		callbacks: {
			async signIn() {
				return true
			},
			async redirect({ baseUrl }) {
				return baseUrl
			},
			async session({ session, token }) {
				session.accessToken = token.accessToken
				return session
			},
			async jwt({ token, user }) {
				if (user != null) token = { accessToken: user.token }
				return token
			},
		},
	})
}
