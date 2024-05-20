import { Link } from 'react-router-dom'
import { Icons } from '../Icons'
import ThemeToggle from '../ThemeToggle'
import LogoutButton from '../LogoutButton'

const Header = () => {
	return (
		<header className="container flex items-center justify-between gap-8 border-b-2 p-4">
			<Link to="/">
				<Icons.Logo />
			</Link>

			<div className="flex items-center gap-2">
				<ThemeToggle />
				<LogoutButton />
			</div>
		</header>
	)
}

export default Header
