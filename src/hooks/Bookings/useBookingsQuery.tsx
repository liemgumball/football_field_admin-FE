import { getBookings } from '@/services/bookings'
import { TBooking, TFootballField } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useOutletContext } from 'react-router-dom'

const useBookingsQuery = () => {
	const field = useOutletContext() as TFootballField

	return useQuery<TBooking[]>({
		queryKey: ['bookings'],
		queryFn: () => getBookings(field._id),
	})
}

export default useBookingsQuery
