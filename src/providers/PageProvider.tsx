import React, { Fragment } from 'react'
import AuthProvider from '@/providers/AuthProvider'
import ChakraProvider from '@/providers/ChakraProvider'
import QueryProvider from '@/providers/QueryProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import AnalyticsProvider from './AnalyticsProvider'

function PageProvider({ children }): JSX.Element {
	return (
		<Fragment>
			<ThemeProvider>
				<ChakraProvider>
					<QueryProvider>
						<AuthProvider>{children}</AuthProvider>
					</QueryProvider>
				</ChakraProvider>
			</ThemeProvider>
			<AnalyticsProvider />
		</Fragment>
	)
}

export default PageProvider
