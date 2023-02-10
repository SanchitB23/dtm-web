'use client'
import { VStack, Wrap } from '@chakra-ui/react'
import ContactInfoComponent from './contactInfo.component'
import FormComponent from './form.component'
import SocialsComponent from './socials.component'
import TitleComponent from './title.component'

export default function ContactUs() {
	return (
		<Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 20 }} justify={'center'}>
			<VStack justifyContent={'space-between'}>
				<VStack>
					<TitleComponent />
					<ContactInfoComponent />
				</VStack>
				<SocialsComponent />
			</VStack>
			<FormComponent />
		</Wrap>
	)
}
