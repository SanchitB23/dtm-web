import type { Metadata } from 'next'

export const RootMetadata: Metadata = {
	title: {
		default: 'Delhi Toastmasters',
		template: '%s | Delhi Toastmasters',
	},
	description: 'Homepage of Delhi Toastmasters',
	keywords: ['Delhi', 'Toastmasters', 'Delhi Toastmasters'],
	openGraph: {
		title: 'Delhi Toastmasters',
		description: 'Homepage of Delhi Toastmasters',
		siteName: 'Delhi Toastmasters',
		type: 'website',
		locale: 'en-US',
		images: [
			{
				url: '/logo.jpg',
			},
		],
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
	},
	verification: {
		google: 'google',
	},
}
export const AuthMetadata: Metadata = {
	title: 'DTM:Login',
}
