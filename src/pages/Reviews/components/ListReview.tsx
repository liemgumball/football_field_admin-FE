import { TBookingReview } from '@/types'
import ReviewCard from './ReviewCard'

const ListReview = ({ reviews }: { reviews: TBookingReview[] }) => {
	return (
		<ul className="grid gap-3 md:grid-cols-3 xl:grid-cols-4">
			{reviews.map((review) => (
				<li key={review._id}>
					<ReviewCard {...review} />
				</li>
			))}
		</ul>
	)
}

export default ListReview
