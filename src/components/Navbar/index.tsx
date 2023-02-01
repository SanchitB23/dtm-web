import { Box, Button, Flex, Link, Stack, Text, useBoolean } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import Logo from './Logo'
import styles from './navbar.module.css'

const NavBar = (props: JSX.IntrinsicAttributes): JSX.Element => {
	const [isOpen, setIsOpen] = useBoolean()

	const [isShrunk, setShrunk] = useState(false)

	useEffect(() => {
		const handler = (): void => {
			setShrunk((isShrunk) => {
				if (!isShrunk && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
					return true
				}

				if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
					return false
				}

				return isShrunk
			})
		}

		window.addEventListener('scroll', handler)
		return () => {
			window.removeEventListener('scroll', handler)
		}
	}, [])

	return (
		<NavBarContainer {...props} isShrunk={isShrunk}>
			<Logo color={['white', 'white', 'primary.500', 'primary.500']} isShrunk={isShrunk} />
			<MenuToggle toggle={setIsOpen.toggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen} />
		</NavBarContainer>
	)
}

const CloseIcon = (): JSX.Element => (
	<svg width='24' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
		<title>Close</title>
		<path
			fill='white'
			d='M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z'
		/>
	</svg>
)

const MenuIcon = (): JSX.Element => (
	<svg width='24px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='white'>
		<title>Menu</title>
		<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
	</svg>
)

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }): JSX.Element => (
	<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
		{isOpen ? <CloseIcon /> : <MenuIcon />}
	</Box>
)

const MenuItem = ({
	children,
	to = '/',
	...rest
}: JSX.IntrinsicAttributes & { children: React.ReactNode; to: string }): JSX.Element => (
	<Link href={to}>
		<Text display='block' {...rest}>
			{children}
		</Text>
	</Link>
)

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
			<MenuItem to='/pricing'>Pricing </MenuItem>
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

const NavBarContainer = ({
	children,
	...props
}: JSX.IntrinsicAttributes & { children: React.ReactNode; isShrunk: boolean }): JSX.Element => (
	<Flex
		as='nav'
		align='center'
		justify='space-between'
		wrap='wrap'
		w='100%'
		mb={8}
		p={4}
		bg={['primary.500', 'primary.500', 'primary.100', 'primary.100']}
		color={['white', 'white', 'primary.700', 'primary.700']}
		backdropFilter='saturate(180%) blur(5px)'
		className={styles.mobileNav}
		{...props}
	>
		{children}
	</Flex>
)

export default NavBar
