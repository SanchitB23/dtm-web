'use client'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
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
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import NextLink from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { ISignupData } from '@/types/auth'
import { signupSchema } from '@/types/auth'

export default function SignupCard() {
	const [showPassword, setShowPassword] = useState(false)
	const [showCPassword, setShowCPassword] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<ISignupData>({
		resolver: zodResolver(signupSchema),
	})
	const onSubmit = (val) => {
		console.log(val)
	}
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
							<FormControl id='firstName' isRequired isInvalid={!(errors.firstName == null)}>
								<FormLabel>First Name</FormLabel>
								<Input type='text' {...register('firstName')} />
								<FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
							</FormControl>
						</Box>
						<Box>
							<FormControl id='lastName'>
								<FormLabel>Last Name</FormLabel>
								<Input type='text' {...register('lastName')} />
							</FormControl>
						</Box>
					</HStack>
					<FormControl id='email' isRequired isInvalid={!(errors.email == null)}>
						<FormLabel>Email address</FormLabel>
						<Input type='email' {...register('email')} />
						<FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
					</FormControl>
					<FormControl id='password' isRequired isInvalid={!(errors.password == null)}>
						<FormLabel>Password</FormLabel>
						<InputGroup>
							<Input
								type={showPassword ? 'text' : 'password'}
								{...register('password')}
								onCopy={(e) => {
									e.preventDefault()
								}}
								onPaste={(event) => {
									event.preventDefault()
								}}
							/>
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
						<FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
					</FormControl>{' '}
					<FormControl id='confirmPassword' isRequired isInvalid={!(errors.confirmPassword == null)}>
						<FormLabel>Confirm Password</FormLabel>
						<InputGroup>
							<Input
								type={showCPassword ? 'text' : 'password'}
								{...register('confirmPassword')}
								onCopy={(e) => {
									e.preventDefault()
								}}
								onPaste={(event) => {
									event.preventDefault()
								}}
							/>
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
						<FormErrorMessage>{errors?.confirmPassword?.message}</FormErrorMessage>
					</FormControl>
					<FormControl id='memberID' isRequired isInvalid={!(errors.memberID == null)}>
						<FormLabel>Toastmasters Member ID</FormLabel>
						<Input type='text' {...register('memberID')} />
						<FormErrorMessage>{errors?.memberID?.message}</FormErrorMessage>
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
							onClick={handleSubmit(onSubmit)}
							// isLoading={isLoading}
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
			<DevTool control={control} />
		</Stack>
	)
}
