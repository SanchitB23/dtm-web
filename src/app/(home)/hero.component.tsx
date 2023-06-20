import NextLink from 'next/link'

const HeroComponent = () => (
	<section
		className={
			'bg-gray-500 bg-blend-multiply w-full h-[92vh] bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)] flex items-center justify-center'
		}
	>
		<div className={'z-10 flex flex-col container text-center items-center'}>
			<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white'>
				Welcome to Delhi Toastmasters
			</h1>
			<p className='mb-6 text-lg font-normal text-gray-50 lg:text-xl w-2/3'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem impedit optio quam sapiente. Alias
				aliquam animi, architecto autem, consectetur deserunt dolorum eius incidunt magnam molestias natus numquam porro
				voluptates! Iste.
			</p>
			<NextLink
				href='/TestPage'
				className='inline-flex px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
			>
				Learn more
			</NextLink>
		</div>
		{/* <div className='relative bg-black bg-opacity-50 z-0 h-full w-full' /> */}
	</section>
)

export default HeroComponent
