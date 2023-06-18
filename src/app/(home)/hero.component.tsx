'use client'

import NextLink from 'next/link'

const HeroComponent = () => (
	<section
		className={
			'w-full h-[92vh] bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)] flex items-center justify-center'
		}
	>
		<div className={'z-10 flex flex-col container '}>
			<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
				Welcome to Delhi Toastmasters
			</h1>
			<p className='mb-6 text-lg font-normal text-gray-50 lg:text-xl w-2/3'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem impedit optio quam sapiente. Alias
				aliquam animi, architecto autem, consectetur deserunt dolorum eius incidunt magnam molestias natus numquam porro
				voluptates! Iste.
			</p>
			<NextLink
				href='/TestPage'
				className='self-start inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
			>
				Learn more
			</NextLink>
		</div>
		<div className='absolute inset-0 bg-black bg-opacity-50 z-0 h-[92vh] mt-[8.59vh]' />
	</section>
)

export default HeroComponent

/*
{/!* <VStack *!/}
		{/!* 	w={'full'} *!/}
		{/!* 	justify={'center'} *!/}
		{/!* 	px={useBreakpointValue({ base: 4, md: 8 })} *!/}
		{/!* 	bgGradient={'linear(to-r, blackAlpha.600, transparent)'} *!/}
		{/!* > *!/}
		{/!* 	<Stack maxW={'2xl'} align={'flex-start'} spacing={6}> *!/}
		{/!* 		<Text *!/}
		{/!* 			color={'white'} *!/}
		{/!* 			fontWeight={700} *!/}
		{/!* 			lineHeight={1.2} *!/}
		{/!* 			fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })} *!/}
		{/!* 		> *!/}
		{/!* 			Welcome to Delhi Toastmasters *!/}
		{/!* 		</Text> *!/}
		{/!* 		<Stack direction={'row'}> *!/}
		{/!* 			<Button bg={'blue.400'} rounded={'full'} color={'white'} _hover={{ bg: 'blue.500' }}> *!/}
		{/!* 				Show me more *!/}
		{/!* 			</Button> *!/}
		{/!* 			<Button *!/}
		{/!* 				bg={'whiteAlpha.300'} *!/}
		{/!* 				rounded={'full'} *!/}
		{/!* 				color={'white'} *!/}
		{/!* 				_hover={{ bg: 'whiteAlpha.500' }} *!/}
		{/!* 				as={NextLink} *!/}
		{/!* 				href={'/TestPage'} *!/}
		{/!* 			> *!/}
		{/!* 				Show me more *!/}
		{/!* 			</Button> *!/}
		{/!* 		</Stack> *!/}
		{/!* 	</Stack> *!/}
		{/!* </VStack> *!/} */
