import { TBooking } from '@/types'
import { Separator } from '@/components/ui/separator'
import ButtonStatus from '../../../components/ButtonStatus'

const BookingDetailsHeader = ({
	status,
}: Pick<TBooking, 'field' | 'status'>) => {
	return (
		<section>
			<Separator />
			<div className="my-4 ">
				<ButtonStatus size="lg" status={status} className="uppercase">
					{status}
				</ButtonStatus>
			</div>
			<Separator />
		</section>
	)
}

export default BookingDetailsHeader
