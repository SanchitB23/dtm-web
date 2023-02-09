import PageProvider from '@/providers/PageProvider'

function RootLayout({ children }) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<PageProvider>{children}</PageProvider>
			</body>
		</html>
	)
}

export default RootLayout
