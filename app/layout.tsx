import { ThemeProvider } from '@/components/providers/theme.provider'
import { ChilProps } from '@/types/inde'
import type { Metadata } from 'next'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
	title: 'Startup Praktikum - Next.js',
	description: "Startup Praktikum's Next.js project",
	icons: { icon: '/sirojbek.svg' },
}

function RootLayout({ children }: ChilProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${roboto.variable} ${spaceGrotesk.variable} antialiased`}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
