import { TTurnOfService } from '@/types'
import { formatPrice } from '@/utils/price'
import TurnOfServiceStatus from '@/components/TurnOfServiceStatus'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import TurnOfServiceForm from './TurnOfServiceForm'
import { Link } from 'react-router-dom'
import { PATHS } from '@/constants/navigation'

const TurnOfServiceItem = (props: TTurnOfService & { _id: string }) => {
	const { at, price, status, bookingId, _id } = props

	const content = (
		<>
			<div className="flex items-center gap-1">
				<TurnOfServiceStatus status={status} />
				<span>{at}</span>
			</div>
			<p className="text-sm">{formatPrice(price)}</p>
		</>
	)

	let item: React.ReactNode

	if (status === 'available')
		item = (
			<li className="text-background-foreground flex items-center justify-between rounded border bg-background p-2 hover:bg-accent/60">
				{content}
			</li>
		)

	if (status === 'unavailable')
		item = (
			<li className="flex items-center justify-between rounded border bg-secondary p-2 text-secondary-foreground hover:bg-accent/60">
				{content}
			</li>
		)

	if (status === 'progressing')
		item = (
			<li className="flex items-center justify-between rounded border bg-accent p-2 text-accent-foreground">
				{content}
			</li>
		)

	if (status === 'used' || status === 'progressing')
		item = (
			<Link className="block" to={`${PATHS.BOOKINGS}/${bookingId}`}>
				<li className="flex items-center justify-between rounded border bg-muted p-2 text-muted-foreground hover:bg-muted/70">
					{content}
				</li>
			</Link>
		)

	if (status === 'available' || status === 'unavailable')
		return (
			<Popover>
				<PopoverTrigger className="w-full">{item}</PopoverTrigger>
				<PopoverContent>
					<TurnOfServiceForm _id={_id} price={price} status={status} at={at} />
				</PopoverContent>
			</Popover>
		)

	return item
}

export default TurnOfServiceItem
