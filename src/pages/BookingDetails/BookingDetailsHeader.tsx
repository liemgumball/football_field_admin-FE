import { TBooking } from '@/types'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const BookingDetailsTitle = ({
	status,
}: Pick<TBooking, 'field' | 'status'>) => {
	return (
		<section>
			<Separator />
			<div className="my-4 ">
				<Button className="max-w-max rounded-3xl uppercase" size="lg">
					{status}
				</Button>
			</div>
			<Separator />
		</section>
	)
}

export default BookingDetailsTitle
