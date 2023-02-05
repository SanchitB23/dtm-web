import { chakra } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { ImageProps } from '@chakra-ui/react'
import type { ImageProps as NextImgProps } from 'next/image'

const ChakraImg = chakra(Image)

type Props = Partial<ImageProps> & Partial<NextImgProps>

export default function Logo(props: Props): JSX.Element {
	return (
		<Link href={'/'}>
			<ChakraImg src={require('@/assets/svg/toastmasters-logo-color.svg')} alt='Logo' w={[8, 12, 20]} {...props} />
		</Link>
	)
}
