// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server'

export function POST() {
	return NextResponse.json({ name: 'John Doe', token: '14231' }, { status: 400 })
}
