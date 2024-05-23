import { PATHS } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				'flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-x-6',
				className,
			)}
			{...props}
		>
			<NavLink
				to={PATHS.DASHBOARD}
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Overview
			</NavLink>
			<NavLink
				to={PATHS.DAY_OF_SERVICES}
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Day of services
			</NavLink>
			<NavLink
				to={PATHS.BOOKINGS}
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Bookings
			</NavLink>
			<NavLink
				to={PATHS.REVIEWS}
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Reviews
			</NavLink>
			<NavLink
				to={PATHS.SETTINGS}
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Settings
			</NavLink>
		</nav>
	)
}
