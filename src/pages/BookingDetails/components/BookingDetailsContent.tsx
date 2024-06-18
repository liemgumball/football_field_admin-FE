import { Separator } from '@/components/ui/separator'
import { TBooking } from '@/types'
import { formatDate, format } from 'date-fns'
import { formatPrice } from '@/utils/price'
import { Textarea } from '@/components/ui/textarea'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import UserItem from '@/components/UserItem'
import Rating from '@/components/Rating'

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
		review,
	} = props

	return (
		<section className="mt-5 w-full space-y-6 font-medium md:text-xl">
			<div className="flex w-full flex-col justify-between gap-x-3 gap-y-6 lg:flex-row">
				<div className="w-full space-y-3 rounded md:border md:p-5">
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
				<div className="space-y-3 rounded md:border md:p-5 lg:w-1/3">
					<h3 className="text-4xl ">Booking by</h3>
					<Separator />

					<p>Name: {name}</p>
					<p>Email: {user.email}</p>
					<p>Phone: {user.phoneNumber}</p>
					<p>Create at: {createdAt && format(createdAt, 'PPP')} </p>
				</div>
			</div>

			<div className="space-y-3 rounded md:border md:p-5">
				<h3 className="text-4xl ">More information</h3>
				<Separator />

				<p className="mt-3">
					Extra Services:{' '}
					<i className="text-sm text-muted-foreground">(feature in future)</i>
				</p>
				<p>Notes of Client:</p>
				<Textarea
					className="mt-4 text-base"
					value={description ? description : 'No More Description'}
					readOnly
				/>
			</div>

			{review && (
				<Card>
					<CardHeader>
						<CardTitle>
							<UserItem {...user} />
						</CardTitle>
						<CardDescription className="flex gap-1">
							<Rating rating={review.rating} size={18} />
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Textarea value={review.description} readOnly />
					</CardContent>
				</Card>
			)}
		</section>
	)
}

export default BookingDetailsContent
