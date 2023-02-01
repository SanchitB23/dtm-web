'use client'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { AnalyticsWrapper } from '@/components/Analytics'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import theme from '@/utils/theme'

function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<ChakraProvider theme={theme}>
					<NavBar />
					{children}
					<Footer />
				</ChakraProvider>
				<AnalyticsWrapper />
			</body>
		</html>
	)
}

export default RootLayout
