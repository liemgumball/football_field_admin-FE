import { getAvatarFallback } from '@/utils/user'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const UserItem = ({
	name,
	email,
	avatar,
}: {
	email: string
	name?: string
	avatar?: string
}) => {
	return (
		<div className="flex items-center gap-x-3">
			<Avatar className="h-9 w-9">
				<AvatarImage src={avatar} alt="Avatar" />
				<AvatarFallback className="font-semibold tracking-normal">
					{getAvatarFallback(name ? name : email)}
				</AvatarFallback>
			</Avatar>
			<div className="space-y-1">
				<p className="text-sm font-medium leading-none">
					{name ? name : email}
				</p>
				{name && <p className="text-sm text-muted-foreground">{email}</p>}
			</div>
		</div>
	)
}

export default UserItem
