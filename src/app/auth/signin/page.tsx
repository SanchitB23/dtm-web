'use client'

import {
	Box,
	Button,
	Center,
	Checkbox,
	Divider,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export default function SignIn() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl')
	return (
		<Stack spacing={8} mx={'auto'} maxW={'lg'} py={[2, 4, 4, 12]} px={6}>
			<Stack align={'center'}>
				<Heading fontSize={'4xl'}>Sign in to your account</Heading>
				<Text fontSize={'lg'}>to enjoy all of our member privileges ✌️</Text>
			</Stack>
			<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
				<Stack spacing={4}>
					<FormControl id='email'>
						<FormLabel>Email address</FormLabel>
						<Input type='email' />
					</FormControl>
					<FormControl id='password'>
						<FormLabel>Password</FormLabel>
						<Input type='password' />
					</FormControl>
					<Stack spacing={10}>
						<Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
							<Checkbox visibility={'hidden'}>Remember me</Checkbox>
							<Link color={'blue.400'}>Forgot password?</Link>
						</Stack>
						<Button
							bg={'blue.400'}
							color={'white'}
							_hover={{
								bg: 'blue.500',
							}}
							onClick={() => {
								void signIn('credentials')
							}}
						>
							Sign in
						</Button>
					</Stack>
				</Stack>
				<Center mt={8}>
					<Text>
						New Member?{' '}
						<Link as={NextLink} color={'blue.400'} href={'/signup'}>
							Sign up
						</Link>
					</Text>
				</Center>
				<Box display={'none'}>
					<Divider my={4} />
					<Button
						w={'full'}
						variant={'outline'}
						leftIcon={<FcGoogle />}
						onClick={() => {
							void signIn('google', { callbackUrl: callbackUrl ?? 'http://localhost:3000/' })
						}}
					>
						<Center>
							<Text>Sign in with Google</Text>
						</Center>
					</Button>
				</Box>
			</Box>
		</Stack>
	)
}
