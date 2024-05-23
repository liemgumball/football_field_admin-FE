import { TBookingStatus, TFootballField } from '@/types'
import { MapPin } from 'lucide-react'
import Rating from '@/components/Rating'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const BookingDetailsTitle = ({
	field,
	status,
}: {
	field: TFootballField
	status: TBookingStatus
}) => {
	return (
		<section>
			<p className="mb-6 flex gap-1 font-normal">
				<MapPin className="text-primary" />
				{field.location.name}
			</p>
			<Separator />
			<div className="my-4 flex justify-between">
				<div className="flex items-center gap-2">
					{field.rating ? (
						<Rating rating={field.rating} size={20} />
					) : (
						<Rating rating={0} size={20} />
					)}
					<p>({field.rating ? field.rating : 'No rating'})</p>
				</div>
				<Button className="max-w-max rounded-3xl uppercase" size="lg">
					{status}
				</Button>
			</div>
			<Separator />
		</section>
	)
}

export default BookingDetailsTitle
