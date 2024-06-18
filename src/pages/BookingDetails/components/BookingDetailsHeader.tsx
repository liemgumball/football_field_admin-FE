import { TBooking } from '@/types'
import { Separator } from '@/components/ui/separator'
import ButtonStatus from '@/components/ButtonStatus'
import BookingResponse from '@/components/BookingResponse'

const BookingDetailsHeader = ({
	status,
	_id,
}: Pick<TBooking, '_id' | 'field' | 'status'>) => {
	return (
		<section>
			<Separator />
			<div className="my-4 flex justify-between">
				<ButtonStatus size="lg" status={status} className="uppercase">
					{status}
				</ButtonStatus>

				{status === 'pending' && (
					<BookingResponse _id={_id} className="flex-row" />
				)}
			</div>
			<Separator />
		</section>
	)
}

export default BookingDetailsHeader
