'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const queryFn = async () => await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => res.data)
export default function SimpleCard() {
	const { data } = useQuery({
		queryKey: ['test'],
		queryFn,
	})
	console.log('data', data)
	return <h1>Hello</h1>
}
