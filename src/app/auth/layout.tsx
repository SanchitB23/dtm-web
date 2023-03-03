import { AuthMetadata } from '@/config/metadata'
import LayoutComponent from './layout.component'

export default function AuthLayout({ children }) {
	return <LayoutComponent>{children}</LayoutComponent>
}

export const metadata = AuthMetadata
