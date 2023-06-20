import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/twClassName'
import type { ImageProps as NextImgProps } from 'next/image'

export default function Logo({ className, ...props }: Partial<NextImgProps>): JSX.Element {
	return (
		<Link href={'/'}>
			<Image
				src={require('@/assets/svg/toastmasters-logo-color.svg')}
				alt='Logo'
				className={cn('h-16 mr-3 w-16', className)}
				{...props}
			/>
		</Link>
	)
}
