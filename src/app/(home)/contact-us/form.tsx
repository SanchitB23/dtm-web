import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

function Form() {
	return (
		<VStack flex={1} spacing={5} bg={useColorModeValue('white', 'gray.700')} m={[0, 8]} borderRadius='lg' p={4}>
			<FormControl isRequired>
				<FormLabel>Name</FormLabel>

				<InputGroup>
					<InputLeftElement>
						<BsPerson />
					</InputLeftElement>
					<Input type='text' name='name' placeholder='Your Name' />
				</InputGroup>
			</FormControl>

			<FormControl isRequired>
				<FormLabel>Email</FormLabel>

				<InputGroup>
					<InputLeftElement>
						<MdOutlineEmail />
					</InputLeftElement>
					<Input type='email' name='email' placeholder='Your Email' />
				</InputGroup>
			</FormControl>

			<FormControl isRequired>
				<FormLabel>Message</FormLabel>

				<Textarea name='message' placeholder='Your Message' rows={6} resize='none' />
			</FormControl>

			<Button
				colorScheme='blue'
				bg='blue.400'
				color='white'
				_hover={{
					bg: 'blue.500',
				}}
				w={'100%'}
			>
				Send Message
			</Button>
		</VStack>
	)
}

export default Form
