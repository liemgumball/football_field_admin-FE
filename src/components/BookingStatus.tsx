import { cn } from '@/lib/utils'
import { TBookingStatus } from '@/types'
import { BanIcon, CheckIcon, CircleDashedIcon } from 'lucide-react'

const BookingStatus = ({
	status,
	className,
	label = false,
}: {
	status: TBookingStatus
	className?: string
	label?: boolean
}) => {
	let Icon: React.FC | null = null

	if (status === 'canceled')
		Icon = () => (
			<BanIcon className="mr-2 inline-block text-destructive" size={16} />
		)
	if (status === 'confirmed')
		Icon = () => (
			<CheckIcon className="mr-2 inline-block text-primary" size={16} />
		)
	if (status === 'pending')
		Icon = () => (
			<CircleDashedIcon
				className="mr-2 inline-block text-secondary-foreground"
				size={16}
			/>
		)

	return (
		<div className={cn('text-nowrap capitalize', className)}>
			{Icon && <Icon />}
			{label && status}
		</div>
	)
}

export default BookingStatus
