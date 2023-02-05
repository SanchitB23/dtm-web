import { Box, Button, useClipboard, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { email, locationMapUrl, locationName, phone } from '@/constants'
import ContactInfoBtn from './contactInfoBtn'

const ContactInfo = () => {
	const { hasCopied, onCopy } = useClipboard(email)
	return (
		<Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
			<VStack pl={0} spacing={3} alignItems='flex-start' justifyContent={'flex-start'}>
				<ContactInfoBtn
					label={hasCopied ? 'Email Copied!' : 'Copy Email'}
					leftIcon={<MdPhone color='#1970F1' size='20px' />}
					onClick={onCopy}
				>
					{phone}
				</ContactInfoBtn>
				<ContactInfoBtn leftIcon={<MdEmail color='#1970F1' size='20px' />} label={'Test'}>
					{email}
				</ContactInfoBtn>
				<Button
					px={2}
					size='md'
					height='48px'
					w={'max'}
					variant='ghost'
					_hover={{ border: '2px solid #1C6FEB' }}
					leftIcon={<MdLocationOn color='#1970F1' size='20px' />}
					as='a'
					href={locationMapUrl}
					justifyContent={'flex-start'}
				>
					{locationName}
				</Button>
			</VStack>
		</Box>
	)
}

export default ContactInfo
