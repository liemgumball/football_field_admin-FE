import { Separator } from '@/components/ui/separator'
import { TBooking } from '@/types'
import { formatPrice } from '@/utils/price'

const BookingDetailsContent = ({ booking }: { booking: TBooking }) => {
	return (
		<section className="container mt-5 space-y-3 text-xl font-medium">
			<h3 className="text-4xl ">Booking details</h3>
			<Separator />
			<p>Size: {booking.subfield.size}</p>
			<p>
				Time : {booking.from} - {booking.to}
			</p>
			<p>Price: {formatPrice(booking.price)}</p>
			<p>Booking date: </p>
		</section>
	)
}

export default BookingDetailsContent
