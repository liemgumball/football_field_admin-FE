import { getBookingDetails } from '@/services/bookings'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import BookingDetailsTitle from './BookingDetailsHeader'
import BookingDetailsContent from './BookingDetailsContent'
import { TBooking } from '@/types'

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

	if (isLoading) return <p>is loading</p>

	if (isError)
		return <p className="text-destructive">Fail to get booking information</p>

	if (!booking)
		return <p className="text-muted-foreground">Booking not found</p>

	console.log(booking)

	return (
		<main className="space-y-4">
			<BookingDetailsTitle {...booking} />
			<BookingDetailsContent {...booking} />
		</main>
	)
}

export default BookingDetails
