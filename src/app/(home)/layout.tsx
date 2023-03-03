'use client'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Flex minH={'100vh'} direction={'column'}>
			<NavBar />
			<Box
				as={'main'}
				flex={1}
				sx={{
					'&::-webkit-scrollbar': {
						width: '16px',
						borderRadius: '8px',
						backgroundColor: 'rgba(0, 0, 0, 0.05)',
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: 'rgba(0, 0, 0, 0.05)',
					},
				}}
			>
				{children}
			</Box>
			<Footer />
		</Flex>
	)
}
