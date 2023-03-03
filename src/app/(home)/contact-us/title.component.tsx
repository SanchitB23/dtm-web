import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const TitleComponent = () => (
	<Box>
		<Heading>Contact Us</Heading>
		<Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
			Fill up the form to contact
		</Text>
	</Box>
)

export default TitleComponent
