import { PATHS } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn('flex items-center space-x-4 lg:space-x-6', className)}
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
				to={PATHS.PAYMENTS}
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Payments
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
