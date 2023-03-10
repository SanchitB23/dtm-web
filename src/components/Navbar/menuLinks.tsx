import { Box, Button, Stack } from '@chakra-ui/react'
import MenuItem from './menuItem'

const MenuLinks = ({ isOpen }: { isOpen: boolean }): JSX.Element => (
	<Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
		<Stack
			spacing={8}
			align='center'
			justify={['center', 'space-between', 'flex-end', 'flex-end']}
			direction={['column', 'row', 'row', 'row']}
			pt={[4, 4, 0, 0]}
		>
			<MenuItem to='/'>Home</MenuItem>
			<MenuItem to='/how'>How It works </MenuItem>
			<MenuItem to='/features'>Features </MenuItem>
			<MenuItem to='/TestPage'>Pricing </MenuItem>
			<MenuItem to='/signup'>
				<Button
					size='sm'
					rounded='md'
					color={['primary.500', 'primary.500', 'white', 'white']}
					bg={['white', 'white', 'primary.500', 'primary.500']}
					_hover={{
						bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
					}}
				>
					Create Account
				</Button>
			</MenuItem>
		</Stack>
	</Box>
)
export default MenuLinks
