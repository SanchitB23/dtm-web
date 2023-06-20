'use client'
import FooterTw from '@/components/FooterTw'
import NavbarTw from '@/components/NavbarTw'
import { useTheme } from '@/hooks/useTheme'

const LayoutComponent = ({ children }) => {
	const { isDarkMode } = useTheme()
	return (
		<main className={'h-screen flex flex-col'}>
			<NavbarTw />
			<div
				className={'flex items-center justify-center flex-1'}
				style={{
					backgroundColor: '#000',
					backgroundImage: isDarkMode
						? 'radial-gradient(#45ebf7 1.7000000000000002px, transparent 1.7000000000000002px), radial-gradient(#45ebf7 1.7000000000000002px, rgb(17 24 39) 1.7000000000000002px)'
						: 'radial-gradient(#45ebf7 1.7000000000000002px, transparent 1.7000000000000002px), radial-gradient(#45ebf7 1.7000000000000002px, #fcfcfd 1.7000000000000002px)',
					backgroundSize: '68px 68px',
					backgroundPosition: '0 0, 34px 34px',
				}}
			>
				{children}
			</div>
			<FooterTw />
		</main>
	)
}

export default LayoutComponent
