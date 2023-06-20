'use client'
import { useContext } from 'react'
import type { ThemeContextValue } from '@/providers/TwThemeProvider'
import { ThemeContext } from '@/providers/TwThemeProvider'

export const useTheme = (): ThemeContextValue => {
	const theme = useContext(ThemeContext)
	if (theme == null) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return theme
}
