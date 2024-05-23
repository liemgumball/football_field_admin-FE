import { geTDayOfServicesBySubfieldId } from '@/services/day-of-services'
import { TDayOfServices, TFootballFieldContext } from '@/types'
import { getInitialDate } from '@/utils/date'
import { useQueries } from '@tanstack/react-query'
import { useOutletContext, useSearchParams } from 'react-router-dom'

const useDayOfServicesQueries = () => {
	const { field } = useOutletContext() as TFootballFieldContext

	const [searchParams] = useSearchParams()
	const dateText = searchParams.get('date')
	const date = dateText ? dateText : getInitialDate().toISOString()

	return useQueries<TDayOfServices[]>({
		queries: field.subfieldIds.map((subfieldId) => ({
			queryKey: ['day-of-services', subfieldId, date],
			queryFn: () => geTDayOfServicesBySubfieldId(subfieldId, date),
		})),
	})
}

export default useDayOfServicesQueries
