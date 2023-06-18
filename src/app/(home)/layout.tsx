import React from 'react'
import FooterTw from '@/components/FooterTw'
import NavbarTw from '@/components/NavbarTw'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={'flex flex-col'}>
			<NavbarTw />
			<main className={'h-screen flex-1'}>{children}</main>
			<FooterTw />
		</div>
	)
}
