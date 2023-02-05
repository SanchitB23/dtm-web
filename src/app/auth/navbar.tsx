import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Logo from '@/components/common/Logo'

export default function NavBar() {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex minH={'8vh'} alignItems={'center'} justifyContent={'space-between'}>
					<Logo />
					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							<Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}
