'use client'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import ArticleList from './articleList.component'
import HeroComponent from './hero.component'

export default function Home(): React.ReactElement {
	return (
		<Flex direction={'column'} flex={1}>
			<HeroComponent />
			<ArticleList />
		</Flex>
	)
}
