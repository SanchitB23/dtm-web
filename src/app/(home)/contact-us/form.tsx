import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md'
import * as z from 'zod'
import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { IconType } from 'react-icons'

const formSchema = z.object({
	name: z.string().min(1, { message: 'Name is Required' }).max(24, { message: 'Name is too long' }),
	email: z.string().email({ message: 'Invalid email address' }),
	phone: z.string().min(9, { message: 'Enter Valid Phone Number' }).max(12, { message: 'Enter Valid Phone Number' }),
	message: z.string().min(1, { message: 'Message is Required' }),
})

type IFormInput = z.infer<typeof formSchema>
const asd = formSchema.keyof().Values
type IFormKeys = keyof typeof asd

function Form() {
	const {
		register,
		handleSubmit,
		formState: {
			errors: { message, phone, email, name },
		},
	} = useForm<IFormInput>({
		resolver: zodResolver(formSchema),
	})
	const onSubmit = (data: IFormInput) => {
		console.info('submit', data)
	}
	return (
		<VStack
			flex={1}
			spacing={5}
			bg={useColorModeValue('white', 'gray.700')}
			m={[0, 8]}
			borderRadius='lg'
			p={4}
			as={'form'}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormElement
				isMessage={false}
				label={'Name'}
				Icon={BsPerson}
				placeHolder={'Your Name'}
				register={register}
				error={name}
				formKey='name'
			/>
			<FormElement
				isMessage={false}
				label={'Email'}
				Icon={MdOutlineEmail}
				placeHolder={'Your Email'}
				register={register}
				error={email}
				formKey='email'
			/>
			<FormElement
				isMessage={false}
				label={'Phone'}
				Icon={MdOutlinePhone}
				placeHolder={'Your Phone Number'}
				register={register}
				error={phone}
				formKey='phone'
			/>
			<FormElement
				isMessage
				label={'Message'}
				placeHolder={'Your Message'}
				register={register}
				error={message}
				formKey='message'
			/>
			<Button
				colorScheme='blue'
				bg='blue.400'
				color='white'
				_hover={{
					bg: 'blue.500',
				}}
				w={'100%'}
				type='submit'
			>
				Send Message
			</Button>
		</VStack>
	)
}

interface FormElementsProps {
	isMessage: boolean
	label: string
	Icon?: IconType
	placeHolder: string
	error?: FieldError
	register: UseFormRegister<IFormInput>
	formKey: IFormKeys
}

const FormElement = ({ placeHolder, error, register, label, isMessage, Icon, formKey }: FormElementsProps) => (
	<FormControl isInvalid={!(error == null)}>
		<FormLabel>{label}</FormLabel>
		{isMessage ? (
			<Textarea placeholder={placeHolder} {...register(formKey)} rows={6} resize='none' />
		) : (
			<InputGroup>
				<InputLeftElement>{Icon != null && <Icon />}</InputLeftElement>
				<Input type='text' placeholder={placeHolder} {...register(formKey)} />
			</InputGroup>
		)}
		{!(error == null) && <FormErrorMessage>{error.message}</FormErrorMessage>}
	</FormControl>
)

export default Form
