'use client'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import NextLink from 'next/link'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { ToastWarn } from '@/components/common/Toast'
import { cn } from '@/lib/twClassName'
import type { ILoginData } from '@/types/auth'
import { loginSchema } from '@/types/auth'
import type { SignInResponse } from 'next-auth/react'

export default function SignIn() {
	const [showPassword, setShowPassword] = useState(false)
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
	const { isLoading, mutate, error, isError } = useMutation({
		mutationFn: async (data: ILoginData) => {
			await signIn('credentials', { redirect: false, ...data, callbackUrl: '/dashboard' }).then(
				({ status }: SignInResponse) => {
					console.log('some error', status)
					if (status >= 400 && status < 500) {
						throw new Error('Please check your Credentials')
					}
					if (status >= 500) {
						throw new Error('Something went wrong')
					}
				}
			)
		},
		onError: (e: Error) => {
			console.log('errr', e)
			return e
		},
	})
	const onSubmit = (data: ILoginData) => {
		reset()
		mutate(data)
	}
	console.log('er', error, isError)
	return (
		<div className={'relative w-full h-full flex items-center'}>
			{isError && <ToastWarn text={error?.message} />}
			<section className={'space-x-8 space-y-8 mx-auto max-w-lg py-2 sm:py-4 lg:py-12 px-6'}>
				<div className={'text-center text-slate-800 dark:text-slate-100 space-y-4'}>
					<h1 className={'text-4xl font-bold'}>Sign in to your account</h1>
					<p className={'text-lg font-semibold'}>to enjoy all of our member privileges ✌️</p>
				</div>
				<div className={'rounded-lg bg-gray-50 dark:bg-slate-800 shadow-lg p-8'}>
					<form className={'space-y-4'}>
						<div>
							<label
								htmlFor='email'
								className={cn('block mb-2 text-sm font-medium text-gray-900 dark:text-white', {
									'text-red-700 dark:text-red-500': email === null || email?.message,
								})}
							>
								Email address
							</label>
							<input
								type='email'
								id='email'
								className={cn(
									'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
									{
										'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
											email === null || email?.message,
									}
								)}
								placeholder='john.doe@company.com'
								required
								{...register('email')}
							/>
							<p className='mt-1 text-sm text-red-600 dark:text-red-500'>{email?.message}</p>
						</div>
						<div>
							<label
								htmlFor='password'
								className={cn('block mb-2 text-sm font-medium text-gray-900 dark:text-white', {
									'text-red-700 dark:text-red-500': password === null || password?.message,
								})}
							>
								Password
							</label>
							<div className='relative'>
								<input
									id={'password'}
									type={showPassword ? 'text' : 'password'}
									className={cn(
										'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
										{
											'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
												email === null || email?.message,
										}
									)}
									placeholder='Password'
									{...register('password')}
									autoComplete={'current-password'}
								/>
								<button
									className='absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none'
									onClick={(event) => {
										event.preventDefault()
										setShowPassword((prevState) => !prevState)
									}}
								>
									{showPassword ? (
										<AiOutlineEyeInvisible className='h-5 w-5 text-gray-400' />
									) : (
										<AiOutlineEye className='h-5 w-5 text-gray-400' />
									)}
								</button>
							</div>
							<p className='mt-1 text-sm text-red-600 dark:text-red-500'>{password?.message}</p>
						</div>
						<div className={'flex flex-col justify-center'}>
							<div className='flex justify-end mb-6'>
								<div className='flex items-center h-5'>
									<input
										id='remember'
										type='checkbox'
										value=''
										className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
										required
									/>
								</div>
								<label
									htmlFor='remember'
									className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize'
								>
									forget password
								</label>
							</div>
							<button
								type='button'
								className='disabled:text-gray-300 disabled:cursor-not-allowed flex items-center place-self-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
								onClick={handleSubmit(onSubmit)}
								disabled={isLoading}
							>
								{isLoading && (
									<svg
										aria-hidden='true'
										className='w-4 h-4 mr-2 text-gray-200 animate-spin fill-blue-600'
										viewBox='0 0 100 101'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
											fill='currentColor'
										/>
										<path
											d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
											fill='currentFill'
										/>
									</svg>
								)}
								Sign in
							</button>
						</div>
					</form>
					<div className={'flex justify-center mt-3 dark:text-gray-300 capitalize'}>
						<text>
							New Member?
							<NextLink className={'text-blue-400 ml-2'} href={'/auth/signup'}>
								Sign up
							</NextLink>
						</text>
					</div>
				</div>
				<DevTool control={control} />
			</section>
		</div>
	)
}
