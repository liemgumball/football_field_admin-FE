import { getBookings } from '@/services/bookings'
import { TBooking } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useBookingsQuery = (fieldId: string) =>
	useQuery<TBooking[]>({
		queryKey: ['bookings'],
		queryFn: () => getBookings(fieldId),
	})
