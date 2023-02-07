'use client'
import { VStack, Wrap } from '@chakra-ui/react'
import ContactInfo from './contactInfo'
import Form from './form'
import Socials from './socials'
import Title from './title'

export default function ContactUs() {
	return (
		<Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
			<VStack justifyContent={'space-between'}>
				<VStack>
					<Title />
					<ContactInfo />
				</VStack>
				<Socials />
			</VStack>
			<Form />
		</Wrap>
	)
}
