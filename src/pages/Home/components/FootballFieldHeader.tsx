import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { TFootballField } from '@/types'

const FootballFieldHeader = (
	props: Partial<TFootballField> & {
		refetch: () => void
		isFetching?: boolean
		isStale?: boolean
	},
) => {
	const { isFetching, refetch, name, isStale } = props

	return (
		<section className="flex items-center justify-between gap-4">
			<h2>{name}</h2>
			<Button
				onClick={refetch}
				size="sm"
				disabled={isFetching || !isStale}
				variant="ghost"
			>
				<Icons.Refresh isFetching={isFetching} />
			</Button>
		</section>
	)
}

export default FootballFieldHeader
