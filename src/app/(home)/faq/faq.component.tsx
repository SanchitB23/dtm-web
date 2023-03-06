'use client'
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
	Heading,
} from '@chakra-ui/react'
import React from 'react'
import type { IFaqSchema } from './page'

const FaqComponent = ({ data: { items: data } }: IFaqSchema) => (
	<Container maxW={'7xl'} p='12'>
		<Heading textAlign={'left'} mb={6}>
			Frequently Asked Questions
		</Heading>
		<Accordion allowToggle>
			{data.map(({ fields, sys: { id } }) => (
				<AccordionItem key={id}>
					<h2>
						<AccordionButton>
							<Box as='span' flex='1' textAlign='left'>
								{fields.question}
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>{fields.answer}</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	</Container>
)

export default FaqComponent
