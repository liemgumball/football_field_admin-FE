import { getBookings } from '@/services/bookings'
import useFootballFieldStore from '@/stores/football-field'
import { TBooking } from '@/types'
import { useQuery } from '@tanstack/react-query'

const useBookingsQuery = () => {
	const field = useFootballFieldStore((state) => state.field)
	if (!field) throw new Error('Field not found')

	return useQuery<TBooking[]>({
		queryKey: ['bookings'],
		queryFn: () => getBookings(field._id),
	})
}

export default useBookingsQuery
