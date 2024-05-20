import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Suspense } from 'react'
import { Icons } from '../Icons'

const Layout = () => {
	return (
		<div className="relative min-h-screen w-full">
			<Header />
			<main className="container flex flex-col items-center justify-center">
				<Suspense fallback={<Icons.Loader size={60} />}>
					<Outlet />
				</Suspense>
			</main>
		</div>
	)
}

export default Layout
