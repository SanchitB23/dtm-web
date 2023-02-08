import { Box, useClipboard, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { email, locationMapUrl, locationName, phone } from '@/constants'
import ContactInfoBtnComponent from './contactInfoBtn.component'

const ContactInfoComponent = () => {
	const { hasCopied: hasCopiedEmail, onCopy: onCopyEmail } = useClipboard(email)
	const { hasCopied: hasCopiedPhone, onCopy: onCopyPhone } = useClipboard(phone)
	return (
		<Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
			<VStack pl={0} spacing={3} alignItems='flex-start' justifyContent={'flex-start'}>
				<ContactInfoBtnComponent
					label={hasCopiedPhone ? 'Phone No. Copied!' : 'Copy Phone No.'}
					leftIcon={<MdPhone color='#1970F1' size='20px' />}
					onClick={onCopyPhone}
				>
					{phone}
				</ContactInfoBtnComponent>
				<ContactInfoBtnComponent
					leftIcon={<MdEmail color='#1970F1' size='20px' />}
					label={hasCopiedEmail ? 'Email Copied!' : 'Copy Email'}
					onClick={onCopyEmail}
				>
					{email}
				</ContactInfoBtnComponent>
				<ContactInfoBtnComponent label={'Open Maps'} leftIcon={<MdLocationOn color='#1970F1' size='20px' />}>
					<NextLink href={locationMapUrl} rel={'noopener noreferrer'} target='_blank'>
						{locationName}
					</NextLink>
				</ContactInfoBtnComponent>
			</VStack>
		</Box>
	)
}

export default ContactInfoComponent
