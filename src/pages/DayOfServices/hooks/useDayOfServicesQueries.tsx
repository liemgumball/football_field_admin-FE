import { geTDayOfServicesBySubfieldId } from '@/services/day-of-services'
import useFootballFieldStore from '@/stores/football-field'
import { TDayOfServices } from '@/types'
import { getInitialDate } from '@/utils/date'
import { useQueries } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

const useDayOfServicesQueries = () => {
	const field = useFootballFieldStore((state) => state.field)
	if (!field) throw new Error('Field not found')

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
