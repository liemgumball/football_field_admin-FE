import { getBookingDetails } from '@/services/bookings'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import BookingDetailsHeader from './components/BookingDetailsHeader'
import BookingDetailsContent from './components/BookingDetailsContent'
import { TBooking } from '@/types'
import { Icons } from '@/components/Icons'

const BookingDetails = () => {
	const { id } = useParams()

	const {
		data: booking,
		isLoading,
		isError,
	} = useQuery<TBooking>({
		queryKey: ['bookings', id],
		queryFn: () => getBookingDetails(id),
	})

	if (isLoading) return <Icons.Loader size={60} className="container my-16" />

	if (isError)
		return <p className="text-destructive">Fail to get booking information</p>

	if (!booking)
		return <p className="text-muted-foreground">Booking not found</p>

	return (
		<main className="space-y-4">
			<BookingDetailsHeader {...booking} />
			<BookingDetailsContent {...booking} />
		</main>
	)
}

export default BookingDetails
