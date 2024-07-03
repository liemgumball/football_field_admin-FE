import UserItem from '@/components/UserItem'
import UserItemSkeleton from '@/components/UserItemSkeleton'
import { getCustomers } from '@/services/clients'
import { TUser } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

const CustomersTab = ({ debouncedSearch }: { debouncedSearch: string }) => {
	const { data, isLoading, isError, error } = useQuery<TUser[]>({
		queryKey: ['customers'],
		queryFn: getCustomers,
	})

	const customers = useMemo(
		() =>
			data?.filter((i) =>
				(i.name || i.email).toLowerCase().includes(debouncedSearch),
			),
		[data, debouncedSearch],
	)

	if (isLoading)
		return (
			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{Array(16)
					.fill(null)
					.map((_, i) => (
						<UserItemSkeleton key={i} />
					))}
			</div>
		)

	if (isError) return <p className="text-destructive">{error.message}</p>

	if (!customers)
		return <p className="text-muted-foreground">No customers found</p>

	return (
		<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
			{customers.map((i) => (
				<Link to={i._id} relative="path">
					<UserItem
						nameRight
						className="cursor-pointer justify-between rounded-md border p-3 hover:bg-muted/50"
						{...i}
						key={i._id}
					/>
				</Link>
			))}
		</div>
	)
}

export default CustomersTab
