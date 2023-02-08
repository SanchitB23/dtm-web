import { HStack, IconButton } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { instagramLink, whatsAppLink, youtubeLink } from '@/constants'
import type { IconButtonProps } from '@chakra-ui/react'
import type { LinkProps } from 'next/link'

const SocialsComponent = () => (
	<HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems='flex-start'>
		<CustomIconButton aria-label='whatsapp' icon={<FaWhatsapp size='28px' />} href={whatsAppLink} />
		<CustomIconButton aria-label='youtube' icon={<FaYoutube size='28px' />} href={youtubeLink} />
		<CustomIconButton aria-label='instagram' icon={<FaInstagram size='28px' />} href={instagramLink} />
	</HStack>
)

const CustomIconButton = (props: IconButtonProps & LinkProps) => (
	<IconButton
		{...props}
		href={props.href}
		aria-label='instagram'
		variant='ghost'
		size='lg'
		isRound={true}
		_hover={{ bg: '#0D74FF' }}
		as={NextLink}
		rel={'noopener noreferrer'}
		target='_blank'
	/>
)

export default SocialsComponent
