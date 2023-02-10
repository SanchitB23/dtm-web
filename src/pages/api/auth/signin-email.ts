// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
	name: string
	token: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
	console.log(req.body)
	res.status(200).json({ name: 'John Doe', token: '14231' })
}
