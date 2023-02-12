import type { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
	interface User extends DefaultUser {
		token: string
	}

	interface Session extends DefaultSession {
		accessToken: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		accessToken: string
	}
}
