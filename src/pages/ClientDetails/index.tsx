import { Icons } from '@/components/Icons'
import UserRoleItem from '@/components/UserRoleItem'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { getUser } from '@/services/user'
import { TUser } from '@/types'
import { getAvatarFallback } from '@/utils/user'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { MessageCircleIcon, PhoneCallIcon, Trash2Icon } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

const ClientDetails = () => {
	const { id } = useParams()

	if (!id) throw new Error('Invalid client id provided')

	const {
		isLoading,
		isError,
		data: client,
	} = useQuery<TUser>({
		queryKey: ['users', id],
		queryFn: () => getUser(id),
	})

	if (isLoading) return <Icons.Loader size={60} className="container my-16" />

	if (isError)
		return <p className="text-destructive">Fail to get client information.</p>

	if (!client) return <p className="text-muted-foreground">Client not found.</p>

	const {
		avatarFallback,
		name,
		email,
		_id,
		phoneNumber,
		role,
		createdAt,
		updatedAt,
	} = client

	return (
		<main className="grid grid-cols-12 gap-6">
			{/* <ScrollArea className="w-full"> */}
			<header className="col-span-12 flex items-center gap-4 overflow-x-scroll pb-2 md:col-span-9">
				<Avatar className="size-16 border">
					<AvatarImage src={avatarFallback} alt="Avatar" />
					<AvatarFallback className="font-semibold tracking-normal">
						{getAvatarFallback(name ? name : email)}
					</AvatarFallback>
				</Avatar>
				<h2>{email}</h2>
			</header>
			{/* <ScrollBar orientation="horizontal" />
			</ScrollArea> */}

			<section className="container col-span-12 grid gap-4 justify-self-center md:grid-cols-2 md:justify-self-start">
				<p className="text-xl font-bold">
					ID{' '}
					<span className="ml-2 text-base font-medium text-muted-foreground">
						{_id}
					</span>
				</p>
				<p className="text-xl font-bold">
					Email{' '}
					<span className="ml-2 text-base font-medium text-muted-foreground">
						{email}
					</span>
				</p>
				<p className="text-xl font-bold">
					Role{' '}
					<span className="ml-2 text-base font-medium text-muted-foreground">
						{' '}
						<UserRoleItem role={role} />
					</span>
				</p>
				<p className="text-xl font-bold">
					Name{' '}
					{name ? (
						<span className="ml-2 text-base font-medium text-muted-foreground">
							{name}
						</span>
					) : (
						<span className="ml-2 text-sm font-medium text-muted-foreground">
							Not provided
						</span>
					)}
				</p>
				<p className="text-xl font-bold">
					Phone Number{' '}
					<span className="ml-2 text-base font-medium text-muted-foreground">
						{phoneNumber}
					</span>
				</p>
				{createdAt && (
					<p className="text-xl font-bold">
						Join{' '}
						<span className="ml-2 text-base font-medium text-muted-foreground">
							{format(createdAt, 'PPP')}
						</span>
					</p>
				)}
				{updatedAt && (
					<p className="text-xl font-bold">
						Last update{' '}
						<span className="ml-2 text-base font-medium text-muted-foreground">
							{format(updatedAt, 'PPP')}
						</span>
					</p>
				)}
			</section>

			<div className="col-span-12 flex flex-col gap-4 md:col-span-3 md:col-start-10 md:row-start-1 md:flex-row">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button asChild size="icon" className="w-full">
								<Link to="chat">
									<MessageCircleIcon size={20} />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Chat to this client.</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								asChild
								size="icon"
								variant="secondary"
								className="w-full"
							>
								<Link to={`tel:${phoneNumber}`}>
									<PhoneCallIcon size={20} />
								</Link>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Call to this client.</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button size="icon" variant="destructive" className="w-full">
								<Trash2Icon size={20} />
							</Button>
						</TooltipTrigger>
						<TooltipContent>Delete this client.</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</main>
	)
}

export default ClientDetails
