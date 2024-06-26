import { Icons } from '@/components/Icons'
import RatingItem from '@/components/RatingItem'
import { Button } from '@/components/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { TFootballField } from '@/types'
import { useQueryClient } from '@tanstack/react-query'

type TProps = {
	field: TFootballField
	isFetching: boolean
	isStale: boolean
}

const FootballFieldHeader = (props: TProps) => {
	const queryClient = useQueryClient()
	const { field, isFetching, isStale } = props

	// Refresh all queries
	const onClick = () => {
		queryClient.invalidateQueries()
	}

	return (
		<section className="flex items-center justify-between gap-4">
			<div>
				<h2>{field.name} </h2>
				<RatingItem rating={field.rating} />
			</div>
			<TooltipProvider>
				<Tooltip>
					<Button
						onClick={onClick}
						size="sm"
						disabled={!isStale}
						variant="ghost"
						asChild
					>
						<TooltipTrigger>
							<Icons.Refresh isFetching={isFetching} />
						</TooltipTrigger>
					</Button>
					<TooltipContent>
						<p>Refresh</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</section>
	)
}

export default FootballFieldHeader
