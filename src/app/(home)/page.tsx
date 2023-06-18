import React from 'react'
import ArticleList from './articleList.component'
import HeroComponent from './hero.component'

export default function Home(): React.ReactElement {
	return (
		<main>
			<HeroComponent />
			<ArticleList />
		</main>
	)
}
