import { Separator } from '@/components/ui/separator'
import { TBooking } from '@/types'
import { formatDate, format } from 'date-fns'
import { formatPrice } from '@/utils/price'

const BookingDetailsContent = (props: TBooking) => {
	const {
		_id,
		subfield,
		from,
		to,
		price,
		date,
		name,
		createdAt,
		user,
		description,
	} = props

	return (
		<section className="mt-5 space-y-3 text-xl font-medium">
			<h3 className="text-4xl ">Booking details</h3>
			<Separator />
			<p>Booking ID: {_id}</p>
			<p>Subfield: {subfield.name}</p>
			<p>Size: {subfield.size}</p>
			<p>
				Time : {from} - {to}
			</p>
			<p>Price: {formatPrice(price)}</p>
			<p>Booking date: {formatDate(date, 'PPP')} </p>
			<Separator />
			<h3 className="text-4xl ">Booking by</h3>
			<p>Name: {name}</p>
			<p>Email: {user.email}</p>
			<p>Phone: {user.phoneNumber}</p>
			<p>Create at: {createdAt && format(createdAt, 'PPP')} </p>
			<Separator />
			<h3 className="text-4xl ">More information</h3>
			<p>
				Notes of Client: {description ? description : 'No More Description'}{' '}
			</p>
			<p>Extra Services: ___</p>
		</section>
	)
}

export default BookingDetailsContent
