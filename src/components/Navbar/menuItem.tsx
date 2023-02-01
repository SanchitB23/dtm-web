import { Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const MenuItem = ({
	children,
	to = '/',
	...rest
}: JSX.IntrinsicAttributes & { children: React.ReactNode; to: string }): JSX.Element => (
	<Link as={NextLink} href={to}>
		<Text display='block' {...rest}>
			{children}
		</Text>
	</Link>
)
export default MenuItem
