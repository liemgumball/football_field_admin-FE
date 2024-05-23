import { cn } from '@/lib/utils'
import { TTurnOfServiceStatus } from '@/types'
import { EllipsisIcon, TicketIcon, TicketXIcon, User2Icon } from 'lucide-react'

const TurnOfServiceStatus = ({
	status,
	className,
	label = false,
}: {
	status: TTurnOfServiceStatus
	className?: string
	label?: boolean
}) => {
	let Icon: React.FC | null = null

	if (status === 'available')
		Icon = () => (
			<TicketIcon
				className="mr-2 inline-block text-muted-foreground"
				size={16}
			/>
		)

	if (status === 'unavailable')
		Icon = () => (
			<TicketXIcon className="mr-2 inline-block text-primary" size={16} />
		)

	if (status === 'used')
		Icon = () => (
			<User2Icon className="mr-2 inline-block text-primary" size={16} />
		)

	if (status === 'progressing')
		Icon = () => (
			<EllipsisIcon
				className="mr-2 inline-block animate-bounce text-secondary-foreground"
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

export default TurnOfServiceStatus
