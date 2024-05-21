import { getDayOfServicesBySubfieldId } from '@/services/day-of-services'
import { TDayOfService } from '@/types'
import { getInitialDate } from '@/utils/date'
import { useQueries } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

const useDayOfServicesQueries = (subfieldIds: string[]) => {
	const [searchParams] = useSearchParams()
	const dateText = searchParams.get('date')
	const date = dateText ? dateText : getInitialDate().toISOString()

	return useQueries<TDayOfService[]>({
		queries: subfieldIds.map((subfieldId) => ({
			queryKey: ['day-of-services', subfieldId, date],
			queryFn: () => getDayOfServicesBySubfieldId(subfieldId, date),
		})),
	})
}

export default useDayOfServicesQueries
