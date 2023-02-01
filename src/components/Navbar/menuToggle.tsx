import { Box } from '@chakra-ui/react'
import CloseIcon from '@/components/Navbar/CloseIcon'
import MenuIcon from '@/components/Navbar/menuIcon'

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }): JSX.Element => (
	<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
		{isOpen ? <CloseIcon /> : <MenuIcon />}
	</Box>
)
export default MenuToggle
