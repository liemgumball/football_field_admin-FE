import useDayOfServicesQueries from '../hooks/useDayOfServicesQueries'
import SubfieldServicesItem from './SubfieldServicesItem'
import { QueryObserverResult } from '@tanstack/react-query'
import { TDayOfServices } from '@/types'

const SubfieldServicesList = () => {
	const queries = useDayOfServicesQueries() as QueryObserverResult<
		TDayOfServices[]
	>[]

	if (!queries.length)
		return <p className="text-muted-foreground">Not services data to show.</p>

	return (
		<ul className="my-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{queries.map((query, index) => (
				<SubfieldServicesItem key={index} {...query} />
			))}
		</ul>
	)
}

export default SubfieldServicesList
