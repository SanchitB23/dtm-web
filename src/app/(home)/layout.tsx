'use client'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'

function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
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

export default RootLayout
