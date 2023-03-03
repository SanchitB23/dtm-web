import { RootMetadata } from '@/config/metadata'
import PageProvider from '@/providers/PageProvider'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<PageProvider>{children}</PageProvider>
			</body>
		</html>
	)
}
export const metadata = RootMetadata
