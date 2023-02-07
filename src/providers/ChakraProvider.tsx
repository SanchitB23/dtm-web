import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import theme from '@/lib/theme'

function Provider({ children }) {
	return (
		<Fragment>
			<ColorModeScript />
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</Fragment>
	)
}

export default Provider
