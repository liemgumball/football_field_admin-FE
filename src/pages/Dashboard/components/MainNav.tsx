import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				'mb-2 flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-x-6',
				className,
			)}
			{...props}
		>
			<NavLink
				to=""
				relative="path"
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Overview
			</NavLink>
			<NavLink
				to="day-of-services"
				relative="path"
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Day of services
			</NavLink>
			<NavLink
				to="bookings"
				relative="path"
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Bookings
			</NavLink>
			<NavLink
				to="reviews"
				relative="path"
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Reviews
			</NavLink>
			<NavLink
				to="settings"
				relative="path"
				className="text-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Settings
			</NavLink>
		</nav>
	)
}
