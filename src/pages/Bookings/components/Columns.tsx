import { TBooking, TBookingStatus, TSubField } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { ColumnHeader } from './ColumnHeader'

import { formatPrice } from '@/utils/price'
import StatusColumnHeader from './StatusColumnHeader'
import BookingStatus from '@/components/BookingStatus'
import ColumnActions from './ColumnActions'

const Columns: ColumnDef<TBooking, TBooking>[] = [
	{
		id: 'actions',
		cell: ({ row }) => <ColumnActions {...row.original} />,
	},
	{
		accessorKey: '_id',
		id: 'ID',
		header: 'ID',
		size: 0,
	},
	{
		accessorKey: 'status',
		header: ({ column }) => <StatusColumnHeader column={column} />,
		cell: ({ cell }) => (
			<BookingStatus
				status={cell.getValue() as unknown as TBookingStatus}
				label
				className="w-[90px] capitalize"
			/>
		),
		filterFn: 'equalsString',
	},
	{
		accessorKey: 'subfield',
		header: 'Subfield',
		cell: ({ cell }) => {
			const subfield = cell.getValue() as unknown as TSubField
			return <div className="">{subfield.name}</div>
		},
	},

	{
		accessorKey: 'date',
		header: ({ column }) => (
			<ColumnHeader column={column} title="Booking Date" />
		),
		cell: ({ cell }) => (
			<div className="text-nowrap">
				{format(cell.getValue() as unknown as string, 'PPP')}
			</div>
		),
	},
	{
		accessorKey: 'from',
		header: 'Start At',
	},
	{
		accessorKey: 'to',
		header: 'Finish At',
	},
	{
		accessorKey: 'price',
		header: ({ column }) => <ColumnHeader column={column} title="Price" />,
		cell: ({ cell }) => (
			<div className="truncate">
				{formatPrice(cell.getValue() as unknown as number)}
			</div>
		),
	},
	{
		accessorKey: 'createdAt',
		id: 'Created At',
		header: ({ column }) => <ColumnHeader column={column} title="Created At" />,
		cell: ({ cell }) => (
			<div className="truncate">
				{format(cell.getValue() as unknown as string, 'Pp')}
			</div>
		),
	},
]

export default Columns
