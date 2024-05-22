import { TBooking } from '@/types'

import { CopyIcon, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'

import BookingResponse from './BookingResponse'

const ColumnActions = (props: TBooking) => {
	const { _id, status } = props

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => {
						navigator.clipboard.writeText(_id)
					}}
				>
					Copy ID <CopyIcon className="ml-3 size-3" />
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link to={`/bookings/${_id}`}>View booking details</Link>
				</DropdownMenuItem>
				{status === 'pending' && (
					<>
						<DropdownMenuSeparator />
						<BookingResponse _id={_id} />
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ColumnActions
