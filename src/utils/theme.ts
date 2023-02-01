import { extendTheme } from '@chakra-ui/react'

const colors = {
	primary: {
		100: '#c7a7ad',
		200: '#aa7b83',
		300: '#8e4f5a',
		400: '#803946',
		500: '#722331',
		600: '#67202c',
		700: '#5b1c27',
		800: '#44151d',
		900: '#2e0e14',
	},
}
const breakpoints = {
	base: '20em',
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	'2xl': '96em',
}

const customTheme = extendTheme({ colors, breakpoints })

export default customTheme
