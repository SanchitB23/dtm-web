import React, { Fragment } from 'react'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'

function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<Fragment>
			<NavBar />
			{children}
			<Footer />
		</Fragment>
	)
}

export default RootLayout
