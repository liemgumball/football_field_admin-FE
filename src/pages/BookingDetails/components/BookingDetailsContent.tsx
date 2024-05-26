import { Separator } from '@/components/ui/separator'
import { TBooking } from '@/types'
import { formatDate, format } from 'date-fns'
import { formatPrice } from '@/utils/price'
import { Textarea } from '@/components/ui/textarea'

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
		<section className="mt-5 space-y-4 text-sm font-medium md:text-xl">
			<div className="flex flex-col gap-8 md:flex-row">
				<div className="w-full space-y-4">
					<div className="space-y-3 rounded md:border md:p-5">
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
					</div>
					<div className="space-y-3 rounded md:border md:p-5">
						<h3 className="text-4xl ">More information</h3>
						<Separator />
						<p>
							Notes of Client:
							<Textarea
								className="mt-4 text-base"
								value={description ? description : 'No More Description'}
								disabled
							/>
						</p>
						<p className="mt-3">Extra Services: ___</p>
					</div>
				</div>
				<div className="space-y-3 self-start rounded md:border md:p-5">
					<h3 className="text-4xl ">Booking by</h3>
					<Separator />
					<p>Name: {name}</p>
					<p>Email: {user.email}</p>
					<p>Phone: {user.phoneNumber}</p>
					<p>Create at: {createdAt && format(createdAt, 'PPP')} </p>
				</div>
			</div>
		</section>
	)
}

export default BookingDetailsContent
