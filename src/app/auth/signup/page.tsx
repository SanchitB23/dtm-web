'use client'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'

export default function SignupCard() {
	const [showPassword, setShowPassword] = useState(false)
	const [showCPassword, setShowCPassword] = useState(false)

	return (
		<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
			<Stack align={'center'}>
				<Heading fontSize={'4xl'} textAlign={'center'}>
					Sign up
				</Heading>
				<Text fontSize={'lg'}>to enjoy all of our member privileges ✌️</Text>
			</Stack>
			<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
				<Stack spacing={4}>
					<HStack>
						<Box>
							<FormControl id='firstName' isRequired>
								<FormLabel>First Name</FormLabel>
								<Input type='text' />
							</FormControl>
						</Box>
						<Box>
							<FormControl id='lastName'>
								<FormLabel>Last Name</FormLabel>
								<Input type='text' />
							</FormControl>
						</Box>
					</HStack>
					<FormControl id='email' isRequired>
						<FormLabel>Email address</FormLabel>
						<Input type='email' />
					</FormControl>
					<FormControl id='password' isRequired>
						<FormLabel>Password</FormLabel>
						<InputGroup>
							<Input type={showPassword ? 'text' : 'password'} />
							<InputRightElement h={'full'}>
								<Button
									variant={'ghost'}
									onClick={() => {
										setShowPassword((showPassword) => !showPassword)
									}}
								>
									{showPassword ? <ViewIcon /> : <ViewOffIcon />}
								</Button>
							</InputRightElement>
						</InputGroup>
					</FormControl>{' '}
					<FormControl id='confirmPassword' isRequired>
						<FormLabel>Confirm Password</FormLabel>
						<InputGroup>
							<Input type={showCPassword ? 'text' : 'password'} />
							<InputRightElement h={'full'}>
								<Button
									variant={'ghost'}
									onClick={() => {
										setShowCPassword((showCPassword) => !showCPassword)
									}}
								>
									{showCPassword ? <ViewIcon /> : <ViewOffIcon />}
								</Button>
							</InputRightElement>
						</InputGroup>
					</FormControl>
					<FormControl id='memberId' isRequired>
						<FormLabel>Toastmasters Member ID</FormLabel>
						<Input type='email' />
					</FormControl>
					<Stack spacing={10} pt={2}>
						<Button
							loadingText='Submitting'
							size='lg'
							bg={'blue.400'}
							color={'white'}
							_hover={{
								bg: 'blue.500',
							}}
						>
							Sign up
						</Button>
					</Stack>
					<Stack pt={6}>
						<Text align={'center'}>
							Already a user?{' '}
							<Button variant={'link'} color={'blue.400'} as={NextLink} href={'/auth/signin'}>
								Login
							</Button>
						</Text>
					</Stack>
				</Stack>
			</Box>
		</Stack>
	)
}
