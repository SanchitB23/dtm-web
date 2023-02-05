import { ThemeProvider } from 'next-themes'
import React from 'react'

function Provider({ children }) {
	return <ThemeProvider>{children}</ThemeProvider>
}

export default Provider
