'use client'
import React, { createContext, useMemo, useState } from 'react'
import '@/styles/globals.css'

export interface ThemeContextValue {
	isDarkMode: boolean
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const TwThemeProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true)
	const toggleTheme = () => {
		setIsDarkMode((prevState) => !prevState)
	}
	const themeContextValue: ThemeContextValue = useMemo(
		() => ({
			isDarkMode,
			toggleTheme,
		}),
		[isDarkMode]
	)
	console.log('theme', isDarkMode)
	return (
		<ThemeContext.Provider value={themeContextValue}>
			<html lang='en' className={isDarkMode ? 'dark' : ''}>
				<body>{children}</body>
			</html>
		</ThemeContext.Provider>
	)
}

export default TwThemeProvider
