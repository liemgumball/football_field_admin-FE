import { getAvatarFallback } from '@/utils/user'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { cn } from '@/lib/utils'

const UserItem = ({
	name,
	email,
	avatar,
	className,
	nameRight,
}: {
	email: string
	name?: string
	avatar?: string
	className?: string
	nameRight?: boolean
}) => {
	return (
		<div className={cn('flex items-center gap-x-3', className)}>
			<Avatar className="h-9 w-9">
				<AvatarImage src={avatar} alt="Avatar" />
				<AvatarFallback className="font-semibold tracking-normal">
					{getAvatarFallback(name ? name : email)}
				</AvatarFallback>
			</Avatar>
			<div className={`space-y-1 ${nameRight ? 'text-right' : ''}`}>
				<p className="text-sm font-medium leading-none">
					{name ? name : email}
				</p>
				{name && <p className="text-sm text-muted-foreground">{email}</p>}
			</div>
		</div>
	)
}

export default UserItem
