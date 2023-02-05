import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import prisma from '@/lib/prismadb'

export default async function auth(req, res) {
	return NextAuth(req, res, {
		providers: [
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			}),
		],

		pages: {
			signIn: '/auth/signin',
		},
		adapter: PrismaAdapter(prisma),
		session: {
			strategy: 'jwt',
		},
	})
}
