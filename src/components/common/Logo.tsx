import { chakra } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import type { ImageProps } from '@chakra-ui/react'
import type { ImageProps as NextImgProps } from 'next/image'

const ChakraImg = chakra(Image)

export default function Logo(props: JSX.IntrinsicAttributes & ImageProps & NextImgProps): JSX.Element {
	return <ChakraImg {...props} src={require('@/assets/svg/toastmasters-logo-color.svg')} alt='Logo' />
}
