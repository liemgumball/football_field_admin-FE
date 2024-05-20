import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
	return (
		<div className="relative min-h-screen w-full">
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout
