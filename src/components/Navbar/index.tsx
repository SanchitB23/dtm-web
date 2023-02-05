import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
	Avatar,
	Box,
	Button,
	Center,
	Collapse,
	Flex,
	Icon,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
import Logo from '@/components/common/Logo'

export default function WithSubNavigation(): JSX.Element {
	const { isOpen, onToggle } = useDisclosure()
	const { colorMode, toggleColorMode } = useColorMode()
	const { status } = useSession()
	return (
		<Box>
			<Flex
				bg='transparent'
				minH={'8vh'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
			>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Logo />
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
					<Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>

					{status === 'authenticated' ? (
						<Menu>
							<MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
								<Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
							</MenuButton>
							<MenuList alignItems={'center'}>
								<br />
								<Center>
									<Avatar size={'2xl'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
								</Center>
								<br />
								<Center>
									<p>Username</p>
								</Center>
								<br />
								<MenuDivider />
								<MenuItem>Your Servers</MenuItem>
								<MenuItem>Account Settings</MenuItem>
								<MenuItem>Logout</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<Button
							display={{ base: 'none', md: 'inline-flex' }}
							fontSize={'sm'}
							fontWeight={600}
							color={'white'}
							bg={'pink.400'}
							_hover={{
								bg: 'pink.300',
							}}
							onClick={() => {
								void signIn()
							}}
						>
							Member Login
						</Button>
					)}
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	)
}

const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200')
	const linkHoverColor = useColorModeValue('gray.800', 'white')
	const popoverContentBgColor = useColorModeValue('white', 'gray.800')

	return (
		<Stack direction={'row'} spacing={4} alignItems={'center'}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'lg'}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children != null && (
							<PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	)
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem): JSX.Element => (
	<Link
		href={href}
		role={'group'}
		display={'block'}
		p={2}
		rounded={'md'}
		_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
	>
		<Stack direction={'row'} align={'center'}>
			<Box>
				<Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
					{label}
				</Text>
				<Text fontSize={'sm'}>{subLabel}</Text>
			</Box>
			<Flex
				transition={'all .3s ease'}
				transform={'translateX(-10px)'}
				opacity={0}
				_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
				justify={'flex-end'}
				align={'center'}
				flex={1}
			>
				<Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
			</Flex>
		</Stack>
	</Link>
)

const MobileNav = (): JSX.Element => (
	<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
		{NAV_ITEMS.map((navItem) => (
			<MobileNavItem key={navItem.label} {...navItem} />
		))}
	</Stack>
)

const MobileNavItem = ({ label, children, href }: NavItem): JSX.Element => {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Stack spacing={4} onClick={children != null ? onToggle : undefined}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
				{children != null && (
					<Icon
						as={ChevronDownIcon}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align={'start'}
				>
					{children?.map((child) => (
						<Link key={child.label} py={2} href={child.href}>
							{child.label}
						</Link>
					))}
				</Stack>
			</Collapse>
		</Stack>
	)
}

interface NavItem {
	label: string
	subLabel?: string
	children?: NavItem[]
	href?: string
}

const NAV_ITEMS: NavItem[] = [
	{
		label: 'Our Meetings',
		children: [
			{
				label: 'Explore Design Work',
				subLabel: 'Trending Design to inspire you',
				href: '#',
			},
			{
				label: 'New & Noteworthy',
				subLabel: 'Up-and-coming Designers',
				href: '#',
			},
		],
	},
	{
		label: 'Gallery',
		children: [
			{
				label: 'Job Board',
				subLabel: 'Find your dream design job',
				href: '#',
			},
			{
				label: 'Freelance Projects',
				subLabel: 'An exclusive list for contract work',
				href: '#',
			},
		],
	},
	{
		label: 'About',
		href: '#',
	},
	{
		label: 'Contact Us',
		href: '/TestPage',
	},
]
