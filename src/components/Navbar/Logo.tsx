/* eslint-disable no-duplicate-imports */
import { chakra, Flex, Heading, useBreakpoint, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import type { BoxProps } from '@chakra-ui/react'

const ChakraImg = chakra(Image)

export default function Logo({
	isShrunk,
	...props
}: JSX.IntrinsicAttributes & BoxProps & { isShrunk: boolean }): JSX.Element {
	const [test] = useMediaQuery('(min-width: 1280px)')
	const breakpoint = useBreakpoint()
	console.log(test, breakpoint)
	return (
		<Flex {...props} alignItems={'center'} gap={'3'}>
			<ChakraImg
				src={
					isShrunk
						? require('@/assets/svg/toastmasterswordmarkcolor (1).svg')
						: require('@/assets/svg/toastmasters-logo-color.svg')
				}
				alt='Logo'
				w={[20, 50, 100]}
			/>
			<Heading>{breakpoint === 'base' ? 'DTM' : 'Delhi Toastmasters'}</Heading>
		</Flex>
	)
}
