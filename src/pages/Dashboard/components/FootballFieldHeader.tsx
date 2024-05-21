import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import useFootballFieldStore from '@/stores/football-field'

const FootballFieldHeader = () => {
	const { field, refetch, isStale, isFetching } = useFootballFieldStore()

	if (!field || !refetch) return null

	return (
		<section className="flex items-center justify-between gap-4">
			<h2>{field.name}</h2>
			<Button onClick={refetch} size="sm" disabled={isStale} variant="ghost">
				<Icons.Refresh isFetching={isFetching} />
			</Button>
		</section>
	)
}

export default FootballFieldHeader
