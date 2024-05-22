import { geTDayOfServicesBySubfieldId } from '@/services/day-of-services'
import { TDayOfServices } from '@/types'
import { getInitialDate } from '@/utils/date'
import { useQueries } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

const useDayOfServicesQueries = (subfieldIds: string[]) => {
	const [searchParams] = useSearchParams()
	const dateText = searchParams.get('date')
	const date = dateText ? dateText : getInitialDate().toISOString()

	return useQueries<TDayOfServices[]>({
		queries: subfieldIds.map((subfieldId) => ({
			queryKey: ['day-of-services', subfieldId, date],
			queryFn: () => geTDayOfServicesBySubfieldId(subfieldId, date),
		})),
	})
}

export default useDayOfServicesQueries
