import { Button, Tooltip } from '@chakra-ui/react'
import React from 'react'
import type { ButtonProps } from '@chakra-ui/react'

type PropExtension = React.PropsWithChildren & ButtonProps

interface Props extends PropExtension {
	label: string
}

const ContactInfoBtnComponent = ({ children, leftIcon, label, ...props }: Props) => (
	<Tooltip label={label} closeOnClick={false} hasArrow>
		<Button
			px={2}
			size='md'
			height='48px'
			variant='ghost'
			_hover={{ border: '2px solid #1C6FEB' }}
			leftIcon={leftIcon}
			justifyContent={'flex-start'}
			w={''}
			{...props}
		>
			{children}
		</Button>
	</Tooltip>
)

export default ContactInfoBtnComponent
