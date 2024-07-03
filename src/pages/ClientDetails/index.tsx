import { Icons } from '@/components/Icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getUser } from '@/services/user'
import { TUser } from '@/types'
import { getAvatarFallback } from '@/utils/user'
import { useQuery } from '@tanstack/react-query'
import { Outlet, useParams } from 'react-router-dom'

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

	const { avatarFallback, name, email } = client

	return (
		<main className="grid grid-cols-12 gap-6 pt-3">
			<header className="col-span-12 flex items-center gap-4 overflow-x-scroll pb-2 md:col-span-9">
				<Avatar className="size-16 border">
					<AvatarImage src={avatarFallback} alt="Avatar" />
					<AvatarFallback className="font-semibold tracking-normal">
						{getAvatarFallback(name ? name : email)}
					</AvatarFallback>
				</Avatar>
				<h2>{email}</h2>
			</header>
			<Outlet context={client} />
		</main>
	)
}

export default ClientDetails
