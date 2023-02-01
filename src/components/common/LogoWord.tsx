import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

const ChakraImg = chakra(Image)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function LogoWord(props) {
	return <ChakraImg {...props} alt={'Logo'} src={require('@/assets/svg/toastmasterswordmarkcolor (1).svg')} />
}
