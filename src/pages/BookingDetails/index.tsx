import { getBookingDetails } from '@/services/bookings'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import BookingDetailsTitle from './BookingDetailsTitle'
import BookingDetailsContent from './BookingDetailsContent'

const BookingDetails = () => {
	const { id } = useParams()

	const { data } = useQuery({
		queryKey: ['bookings', id],
		queryFn: () => getBookingDetails(id),
	})

	if (!data || !data.field || !data.subfield)
		return <p className="text-destructive">Fail to get booking information</p>

	return (
		<main>
			<BookingDetailsTitle field={data.field} status={data.status} />
			<BookingDetailsContent booking={data} />
		</main>
	)
}

export default BookingDetails
