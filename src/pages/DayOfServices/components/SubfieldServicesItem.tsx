import { QueryObserverResult } from '@tanstack/react-query'
import SubfieldServiceSkeleton from './SubfieldServiceSkeleton'
import { TDayOfService } from '@/types'

type TProps = QueryObserverResult<TDayOfService[]>

// TODO css
const SubfieldServicesItem = (props: TProps) => {
	const { data, isLoading, isError, error } = props

	if (isLoading) return <SubfieldServiceSkeleton />

	if (isError)
		return (
			<p className="text-destructive">{error.message || 'An error occurred'}</p>
		)

	if (!data?.length)
		return <p className="text-muted-foreground">Data not found.</p>

	const service = data[0]

	return (
		<div className="overflow-hidden rounded-md border p-2">
			<h3>{service?.subfield?.name || 'Subfield'}</h3>
		</div>
	)
}

export default SubfieldServicesItem
