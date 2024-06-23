import UserItem from '@/components/UserItem'
import { TFootballField } from '@/types'
import { memo } from 'react'
import { Link } from 'react-router-dom'

const FieldListItem = (props: TFootballField) => {
	const { _id, name, rating, admin } = props

	return (
		<li className="group size-full">
			<Link
				to={`fields/${_id}`}
				className="flex size-full items-center justify-between gap-2 rounded-lg border p-4 hover:bg-accent hover:text-accent-foreground"
			>
				<div className="ml-4 space-y-1">
					<p className="font-medium">{name}</p>
					<p className="text-sm text-muted-foreground">
						{rating ? rating.toFixed(1) : 'No rating'}
					</p>
				</div>

				{admin && (
					<Link
						to={`/admins/${admin._id}`}
						className="rounded-lg p-2 hover:!bg-primary/20 group-hover:bg-primary/5"
					>
						<UserItem {...admin} />
					</Link>
				)}
			</Link>
		</li>
	)
}

export default memo(FieldListItem)
