import { ChilProps } from '@/types/inde'
import Navbar from './_components/navbar'

function Layout({ children }: ChilProps) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	)
}

export default Layout
