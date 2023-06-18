'use client'
import React, { Fragment } from 'react'
import AuthProvider from '@/providers/AuthProvider'
import QueryProvider from '@/providers/QueryProvider'
import TwThemeProvider from '@/providers/TwThemeProvider'
import AnalyticsProvider from './AnalyticsProvider'

function PageProvider({ children }): JSX.Element {
	return (
		<Fragment>
			<TwThemeProvider>
				<QueryProvider>
					<AuthProvider>{children}</AuthProvider>
				</QueryProvider>
			</TwThemeProvider>
			<AnalyticsProvider />
		</Fragment>
	)
}

export default PageProvider
