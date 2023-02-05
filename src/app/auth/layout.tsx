'use client'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import NavBar from './navbar'

export default function AuthLayout({ children }) {
	return (
		<html lang='en'>
			<head />
			<body>
				<Box
					minH={'100vh'}
					bgColor={useColorModeValue('gray.50', 'gray.800')}
					opacity={0.8}
					bgSize='68px 68px'
					bgPosition='0 0, 34px 34px'
					backgroundImage={useColorModeValue(
						'radial-gradient(#444cf7 1.35px, transparent 1.35px), radial-gradient(#444cf7 1.35px, transparent 1.35px);',
						'radial-gradient(#45EBF7FF 1.35px, transparent 1.35px), radial-gradient(#45EBF7FF 1.35px, transparent 1.35px);'
					)}
				>
					<NavBar />
					<Flex align={'center'} justify={'center'} minH={'92vh'}>
						{children}
					</Flex>
				</Box>
			</body>
		</html>
	)
}
