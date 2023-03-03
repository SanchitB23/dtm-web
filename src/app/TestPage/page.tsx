'use client'
import { useQuery } from '@tanstack/react-query'
import tempService from '@/services/temp.service'

const queryFn = async () => await tempService.getPosts()
export default function SimpleCard() {
	const { data } = useQuery({
		queryKey: ['test'],
		queryFn,
	})
	console.log('data', data)
	return <h1>Hello</h1>
}
