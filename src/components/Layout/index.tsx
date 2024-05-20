import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
	return (
		<div className="relative min-h-screen w-full">
			<Header />
			<main className="container flex flex-col items-center justify-center">
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
