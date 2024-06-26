import { NavLink, Outlet } from 'react-router-dom'

const SuperUserHome = () => {
	return (
		<div className="my-4 w-full space-y-4">
			<header className="flex justify-end">
				<nav className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-x-6">
					<NavLink
						to="/"
						className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
					>
						Football Fields
					</NavLink>
					<NavLink
						to="/customers"
						className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
					>
						Customers
					</NavLink>
				</nav>
			</header>
			<Outlet />
		</div>
	)
}

export default SuperUserHome
