'use client'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Center,
	Checkbox,
	Divider,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	Stack,
	Text,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import type { ILoginData } from '@/types/auth'
import { loginSchema } from '@/types/auth'
import type { SignInResponse } from 'next-auth/react'

export default function SignIn() {
	const [showPassword, setShowPassword] = useState(false)
	const toast = useToast({ status: 'error' })
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		formState: {
			errors: { password, email },
		},
		control,
		reset,
	} = useForm<ILoginData>({
		resolver: zodResolver(loginSchema),
	})
	const { isLoading, mutate } = useMutation({
		mutationFn: async (data: ILoginData) => {
			await signIn('credentials', { redirect: false, ...data }).then(({ status }: SignInResponse) => {
				if (status >= 400 && status < 500) throw new Error('Please check your Credentials')
				if (status >= 500) throw new Error('Something went wrong')
				push('/dashboard')
			})
		},
		onError: (error: Error) => {
			toast({
				title: 'Error Signing in',
				description: error.message,
			})
		},
	})
	const onSubmit = (data: ILoginData) => {
		reset()
		mutate(data)
	}

	return (
		<Stack spacing={8} mx={'auto'} maxW={'lg'} py={[2, 4, 4, 12]} px={6}>
			<Stack align={'center'}>
				<Heading fontSize={'4xl'}>Sign in to your account</Heading>
				<Text fontSize={'lg'}>to enjoy all of our member privileges ✌️</Text>
			</Stack>
			<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
				<Stack spacing={4} as={'form'}>
					<FormControl id='email' isInvalid={!(email == null)}>
						<FormLabel>Email address</FormLabel>
						<Input type='email' {...register('email')} />
						<FormErrorMessage>{email?.message}</FormErrorMessage>
					</FormControl>
					<FormControl id='password' isInvalid={!(password == null)}>
						<FormLabel>Password</FormLabel>
						<InputGroup>
							<Input
								type={showPassword ? 'text' : 'password'}
								{...register('password')}
								autoComplete={'current-password'}
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
						<FormErrorMessage>{password?.message}</FormErrorMessage>
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
							onClick={handleSubmit(onSubmit)}
							isLoading={isLoading}
						>
							Sign in
						</Button>
					</Stack>
				</Stack>
				<Center mt={8}>
					<Text>
						New Member?{' '}
						<Link as={NextLink} color={'blue.400'} href={'/auth/signup'}>
							Sign up
						</Link>
					</Text>
				</Center>
				<Box display={'none'}>
					<Divider my={4} />
					<Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} onClick={() => handleSubmit(onSubmit)}>
						<Center>
							<Text>Sign in with Google</Text>
						</Center>
					</Button>
				</Box>
			</Box>
			<DevTool control={control} />
		</Stack>
	)
}
