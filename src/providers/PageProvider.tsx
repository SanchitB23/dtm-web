import React, { Fragment } from 'react'
import AuthProvider from '@/providers/AuthProvider'
import ChakraProvider from '@/providers/ChakraProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import AnalyticsProvider from './AnalyticsProvider'

function PageProvider({ children }): JSX.Element {
	return (
		<Fragment>
			<ThemeProvider>
				<ChakraProvider>
					<AuthProvider>{children}</AuthProvider>
				</ChakraProvider>
			</ThemeProvider>
			<AnalyticsProvider />
		</Fragment>
	)
}

export default PageProvider
