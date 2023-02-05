'use client'
import React from 'react'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'

function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
