import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { TFootballFieldContext } from '@/types'
import { useQueryClient } from '@tanstack/react-query'

const FootballFieldHeader = (props: TFootballFieldContext) => {
	const { field, isFetching, isStale } = props

	const queryClient = useQueryClient()

	const onClick = () => {
		queryClient.invalidateQueries()
	}

	return (
		<section className="flex items-center justify-between gap-4">
			<h2>{field.name}</h2>
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
