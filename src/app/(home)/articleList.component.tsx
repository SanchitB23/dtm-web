'use client'

import { Box, Heading, HStack, Image, Link, Tag, Text, useColorModeValue } from '@chakra-ui/react'
import NextImg from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import type { SpaceProps } from '@chakra-ui/react'

interface IBlogTags {
	tags: string[]
	marginTop?: SpaceProps['marginTop']
}

const BlogTags: React.FC<IBlogTags> = (props) => (
	<HStack spacing={2} marginTop={props.marginTop}>
		{props.tags.map((tag) => (
			<Tag size={'md'} variant='solid' colorScheme='orange' key={tag}>
				{tag}
			</Tag>
		))}
	</HStack>
)

interface BlogAuthorProps {
	date: Date
	name: string
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => (
	<HStack marginTop='2' spacing='2' display='flex' alignItems='center'>
		<Image
			borderRadius='full'
			boxSize='40px'
			src='https://100k-faces.glitch.me/random-image'
			alt={`Avatar of ${props.name}`}
		/>
		<Text fontWeight='medium'>{props.name}</Text>
		<Text>—</Text>
		<Text>{new Intl.DateTimeFormat('en-US').format(props.date)}</Text>
	</HStack>
)

const ArticleList = () => (
	<section className={'px-52 mx-auto my-8'}>
		<h1 className={'text-3xl font-bold'}>Our Stories</h1>
		<article className={'mt-1 sm:mt-3 flex flex-col md:flex-row justify-between'}>
			<div className={'flex flex-1 mr-3 relative items-center justify-center'}>
				<div className={'z-10 ml-0 sm:ml-2 mt-5 '}>
					<NextLink passHref href={'/'}>
						<NextImg
							className={'rounded-lg object-contain'}
							src={
								'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
							}
							width={500}
							height={500}
							alt='some good alt text'
						/>
					</NextLink>
				</div>
				<aside
					className={
						'z-0 w-5/6 absolute h-full pattern-dots pattern-orange-500 pattern-bg-transparent pattern-size-4 pattern-opacity-20'
					}
				/>
			</div>
			<Box display='flex' flex='1' flexDirection='column' justifyContent='center' marginTop={{ base: '3', sm: '0' }}>
				<BlogTags tags={['Engineering', 'Product']} />
				<Heading marginTop='1'>
					<Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
						Blog article title
					</Link>
				</Heading>
				<Text as='p' marginTop='2' color={useColorModeValue('gray.700', 'gray.200')} fontSize='lg'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book.
				</Text>
				<BlogAuthor name='John Doe' date={new Date('2021-04-06T19:01:27Z')} />
			</Box>
		</article>
	</section>
)

export default ArticleList
