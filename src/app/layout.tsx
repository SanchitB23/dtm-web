import { RootMetadata } from '@/config/metadata'
import PageProvider from '@/providers/PageProvider'

export default function RootLayout({ children }) {
	return <PageProvider>{children}</PageProvider>
}
export const metadata = RootMetadata
