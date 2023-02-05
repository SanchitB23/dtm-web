import { HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Socials = () => (
	<HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems='flex-start'>
		<IconButton
			aria-label='whatsapp'
			variant='ghost'
			size='lg'
			isRound={true}
			_hover={{ bg: '#0D74FF' }}
			icon={<FaWhatsapp size='28px' />}
		/>
		<IconButton
			aria-label='youtube'
			variant='ghost'
			size='lg'
			isRound={true}
			_hover={{ bg: '#0D74FF' }}
			icon={<FaYoutube size='28px' />}
		/>
		<IconButton
			aria-label='instagram'
			variant='ghost'
			size='lg'
			isRound={true}
			_hover={{ bg: '#0D74FF' }}
			icon={<FaInstagram size='28px' />}
		/>
	</HStack>
)

export default Socials
