import { Link } from 'react-router-dom'
import { Icons } from '../Icons'
import ThemeToggle from '../ThemeToggle'

const Header = () => {
	return (
		<header className="container flex items-center justify-between gap-8 border-b-2 p-4">
			<Link to="/">
				<Icons.Logo />
			</Link>

			<ThemeToggle />
		</header>
	)
}

export default Header
