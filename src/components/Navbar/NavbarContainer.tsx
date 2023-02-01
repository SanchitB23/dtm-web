import { Flex } from '@chakra-ui/react'
import styles from './navbar.module.css'

const NavBarContainer = ({
	children,
	isShrunk,
	...props
}: JSX.IntrinsicAttributes & { children: React.ReactNode; isShrunk: boolean }): JSX.Element => (
	<Flex
		as='nav'
		wrap='wrap'
		w={'100%'}
		justify={'center'}
		mb={8}
		p={4}
		bg={
			isShrunk
				? ['primary.500', 'primary.500', 'primary.100', 'primary.100']
				: ['primary.500', 'primary.500', 'transparent', 'transparent']
		}
		color={['white', 'white', 'primary.700', 'primary.700']}
		backdropFilter={isShrunk ? 'saturate(180%) blur(5px)' : ''}
		className={styles.mobileNav}
		zIndex={2}
		{...props}
	>
		<Flex w='90%' align='center' justify='space-between'>
			{children}
		</Flex>
	</Flex>
)
export default NavBarContainer
